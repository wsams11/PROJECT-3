import React from "react";
import "./topic.css";


function topicBlock(props){
    return  (<div class="col-xs-12 col-sm-6 col-md-4">
    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
        <div class="mainflip">
            <div class="frontside">
                <div class="card">
                    <div class="card-body text-center">
                        <p><img class=" img-fluid" src={imgUrl} alt="card image"></img></p>
                        <h4 class="card-title">{...props} </h4>
                        <p class="card-text">{...props} </p>
                    </div>
                </div>
            </div>
            <div class="backside">
                <div class="card">
                    <div class="card-body text-center mt-4">
                        <h4 class="card-title">{...props} </h4>
                        <p class="card-text">{...props}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

);
}

export default topicBlock;