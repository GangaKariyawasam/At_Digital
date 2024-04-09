import React from "react";

export const Footer: React.FC = ()=>{

    return(
        <>
            <footer className="container-fluid pt-4" style={{backgroundColor: "#6B3CC9"}}>
                <div className="row">
                    <div className="col-xl-4 col-md-12">
                        <div className="d-flex align-items-center gap-2">
                            <img src="/src/assets/logo.svg" alt="logo" />
                            <a className="navbar-brand text-white" href="#" style={{fontWeight:"700", fontSize:"26px"}}>AT DIGITAL</a>
                        </div>
                        <p className="text-white">Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <p className="text-white" style={{fontWeight:"700"}}>Our Technologies</p>
                        <ul className="text-white list-unstyled">
                            <li>ReactJS</li>
                            <li>Gatsby</li>
                            <li>NextJS</li>
                            <li>NodeJS</li>
                        </ul>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <p className="text-white" style={{fontWeight:"700"}}>Our Services</p>
                        <ul className="text-white list-unstyled">
                            <li>Social media Marketing</li>
                            <li>Web & Mobile App Development</li>
                            <li>Data & Analytics</li>
                        </ul>
                    </div>
                    <div className="row mx-0">
                        <div className="border-top" style={{backgroundColor: "yellow"}}></div>
                        <div className="col-xl-12">
                            <p className="text-white text-center">Privacy Policy | Terms & Conditions</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}