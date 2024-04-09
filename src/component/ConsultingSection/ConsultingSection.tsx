import React from "react";
import {Link} from "react-router-dom";

const ConsultingSection: React.FC = () => {
    return(
        <div className="container-fluid p-5">
            <div className="row d-flex align-items-center">
                <div className="col-md-8 order-last order-md-1 pb-4">
                    <div className="d- flex justify-content-sm-center justify-content-md-start">
                        <h4 className="d-flex justify-content-sm-center justify-content-md-start" style={{color: "#6B3CC9"}}>Digital Strategy Consulting</h4>
                        <p className="d-flex justify-content-sm-center justify-content-md-start">Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                    </div>
                    <div className="d-flex justify-content-sm-center justify-content-md-start">
                        <Link className="btn text-white" to={"/#"} style={{backgroundColor:"#F28D35"}}>LEARN MORE</Link>
                    </div>
                </div>
                <div className="col-md-4 order-first order-md-2">
                    <img className="img-fluid" src="/src/assets/consulting.png" alt=""/>
                </div>
            </div>
        </div>
    )
}
export  default ConsultingSection;