import React, { useState, useEffect } from "react";
import navBar from "../components/navBar";
import topicBlock from "../components/topicBlock";
import footer from "../components/footer";



return (
    <body>
    <navBar></navBar>
  
    <section id="team" className="pb-5">
        <div className="container">
            <h5 className="section-title h1">TOPICS</h5>
            <div className="row">
                <topicBlock></topicBlock>
                <topicBlock></topicBlock>
                <topicBlock></topicBlock>
                <topicBlock></topicBlock>
                <topicBlock></topicBlock>
                <topicBlock></topicBlock>
                <topicBlock></topicBlock>
                <topicBlock></topicBlock>
                <topicBlock></topicBlock>

            </div>
        </div>
    </section>
    <footer></footer>
    </body>
  )