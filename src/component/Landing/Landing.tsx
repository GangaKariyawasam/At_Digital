import React from "react";
import {Link} from "react-router-dom";

const Landing: React.FC = () => {

    return(
        <div className="container-fluid p-0">
            <div className="row position-relative">
                <div style={{
                    backgroundImage: 'url("/src/assets/home_img.jpeg")',
                    backgroundSize: 'cover',
                    minHeight: '100vh'
                }}>
                </div>
                <div className="row m-0">
                    <div className="col-xl-4 col-md-12 test p-0">
                        <div className="custom-bg-gradient p-3">
                            <h1 className="text-white">We crush your competitors, goals, and sales records - without the B.S.</h1>
                            <Link className="btn text-white" to={"/#"} style={{backgroundColor:"#F28D35"}}>GET FREE CONSULTATION</Link>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    )
}

export  default Landing;