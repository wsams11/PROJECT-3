// Import the necessary passport packages
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

// Import our User Mongoose Model
const User = require("../models").User;

// Import our config file
const config = require("../config");

// Setup options for Local Strategy
const localOptions = {
  usernameField: "email"
};

// Create Local Strategy
const localLogin = new LocalStrategy(localOptions, function(
  email,
  password,
  done
) {
  // Find a user based off their email
  // If we wanted to search based off a field of `username` we would pass in
  // "username" on line 13
  User.findOne({ email })
    .then(user => {
      // If there is no error and no user exists
      if (!user) {
        // call passports done function with false
        return done(null, false, {
          message: "User does not exist"
        });
      }
      // If we made it to this point in our code we can assume we have a valid email
      // Using the comparePassword() method we defined in our User Schema 
      // we check if the user entered in the correct password
      user.comparePassword(password, (err, isMatch) => {
        // If there was an error we pass it along to passport
        if (err) {
          return done(err);
        }
        // if the passwords do not match
        // let passport know that there was no error 
        // but we still nee to let them know that the match was false
        if (!isMatch) {
          return done(null, false, {
            message: "Passwords do not match"
          });
        }

        // If the password did match we will pass along our user to the next route handler
        return done(null, user);
      });
    })
    .catch(err => {
      return done(err);
    });
});

// Setup options for JWT Strategy
const jwtOptions = {
  // extract the jwt token we created from the header
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  // pass in the jwt secret to decode the token
  secretOrKey: config.secret
};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // See if the user exist in the DB
  User.findById(payload.sub)
    .then(user => {
      // If the user exists, call the done function with that user
      if (user) {
        done(null, user);
      } else {
        // If not call the done function without a user object
        done(null, false);
      }
    })
    .catch(err => {
      // if there is an error call the done function with the err and no user
      return done(err, false);
    });
});

// Tell Passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);