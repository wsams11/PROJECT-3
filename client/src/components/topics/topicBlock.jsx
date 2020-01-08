import React from "react";
import "./topic.css";


function topicBlock(props){
    return  (<div class="col-xs-12 col-sm-6 col-md-4">
    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
        <div class="mainflip">
            <div class="frontside">
                <div class="card">
                    <div class="card-body text-center">
                        <p><img class=" img-fluid" src={props.image} alt={props.title}></img></p>
                        <h4 class="card-title">{props.title} </h4>
                        <p class="card-text">{props.frontText} </p>
                    </div>
                </div>
            </div>
            <div class="backside">
                <div class="card">
                    <div class="card-body text-center mt-4">
                        <h4 class="card-title">{props.title} </h4>
                        <p class="card-text">{props.backText}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

);
}

export default TopicBlock;