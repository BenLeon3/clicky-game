import React from "react";
import "./images.css";
import image1 from "./images/Black-Lion.png";
import image2 from "./images/Yellow-Lion.png";
import image3 from "./images/Hunk.png";
import image4 from "./images/Pidge.png";
import image5 from "./images/Red-Lion.png";
import image6 from "./images/Voltron1.png";
import image7 from "./images/Keith.png";
import image8 from "./images/Girl.png";
import image9 from "./images/Yellow-Lion2.png";
import image10 from "./images/Green-Lion.png";
import image11 from "./images/Lance.png";
import image12 from "./images/Voltron3.png";
// import {handleIncrement} from "../Counter/Counter";
import FlipMove from 'react-flip-move';




class GameImages extends React.Component {
 

    render () {
        return ( 
            <div className="container">
                <FlipMove>
                    <div className="row1">
                        <img onClick={this.handleIncrement} className="click-item shake" key="1" id={1} src={image1} alt='image1' height="200" width="170" />
                        <img onClick={this.handleIncrement} className="click-item shake" key="2" id={2} src={image2} alt='image2' height="200" width="170" />
                        <img onClick={this.handleIncrement} key="3" id={3} src={image3} alt='image3' height="200" width="170" />
                        <img onClick={this.handleIncrement} key="4" id={4} src={image4} alt='image4' height="200" width="170" />
                    </div>
                    <div className="row2">
                        <img onClick={this.handleIncrement} key="5" id={5} src={image5} alt='image1' height="200" width="170" />
                        <img onClick={this.handleIncrement} key="6" id={6} src={image6} alt='image2' height="200" width="170" />
                        <img onClick={this.handleIncrement} key="7" id={7} src={image7} alt='image3' height="200" width="170" />
                        <img onClick={this.handleIncrement} key="8" id={8} src={image8} alt='image4' height="200" width="170" />
                    </div>
                    <div className="row3">
                        <img onClick={this.handleIncrement} key="9" id={9} src={image9} alt='image9' height="200" width="170" />
                        <img onClick={this.handleIncrement} key="10" id={10} src={image10} alt='image10' height="200" width="170" />
                        <img onClick={this.handleIncrement} key="11" id={11} src={image11} alt='image11' height="200" width="170" />
                        <img onClick={this.handleIncrement} key="12" id={12} src={image12} alt='image12' height="200" width="170" />
                    </div>
                </FlipMove>
            </div>
         
        );

        
    }
}


 




export default GameImages;
