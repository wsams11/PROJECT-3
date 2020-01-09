import React from "react";
import "./topic.css";


function TopicBlock(props){
    return  ( 
    
    <div className="col-xs-12 col-sm-6 col-md-4">
    <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
        <div className="mainflip">
            <div className="frontside">
                <div className="card">
                    <div className="card-body text-center">
                        <p><img className=" img-fluid" src={props.image} alt={props.title}></img></p>
                        <h4 className="card-title">{props.title} </h4>
                        <p className="card-text">{props.frontText} </p>
                    </div>
                </div>
            </div>
            <div className="backside">
                <div className="card">
                    <div className="card-body text-center mt-4">
                        <h4 className="card-title">{props.title} </h4>
                        <p className="card-text">{props.backText}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

);
}

export default TopicBlock;