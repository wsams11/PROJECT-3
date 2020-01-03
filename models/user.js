const mongoose = require("mongoose");

const bcrypt= require("bcrypt");

const Schema = mongoose.Schema;

const UserSchema = new Schema({

email: {
    type: String,
    required: true,
    lowercase: true
},

password: String,


topics: {
    type: Array,
    default: []
}
  });




// On save hook, encrypt password
UserSchema.pre("save", function (next) {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      this.password = hash;
      next();
    });
  });
});

// create a method to check a users password
UserSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};





const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
