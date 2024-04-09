import React from "react";
import {Link} from "react-router-dom";

const WebSection: React.FC = () => {
    return(
        <div className="container-fluid p-5">
            <div className="row d-flex align-items-center">
                <div className="col-md-4">
                    <img className="img-fluid" src="/web.png" alt=""/>
                </div>
                <div className="col-md-8 pb-4">
                    <div className="d- flex justify-content-sm-center justify-content-md-start">
                        <h4 className="d-flex justify-content-sm-center justify-content-md-start" style={{color: "#6B3CC9"}}>Web & Mobile App Development</h4>
                        <p className="d-flex justify-content-sm-center justify-content-md-start">Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                    </div>
                    <div className="d-flex justify-content-sm-center justify-content-md-start">
                        <Link className="btn text-white" to={"/#"} style={{backgroundColor:"#F28D35"}}>LEARN MORE</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export  default WebSection;