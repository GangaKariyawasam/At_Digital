import React, {useState} from "react";

export const Navbar: React.FC = ()=>{
    const [offcanvasVisible, setOffcanvasVisible] = useState(false);

    const toggleOffcanvas = () => {
        setOffcanvasVisible(!offcanvasVisible);
    };

    return(
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#6B3CC9" }}>
                <div className="container-fluid">
                    <div className="d-flex align-items-center gap-2">
                        <img src="/logo.svg" alt="logo" />
                        <a className="navbar-brand text-white" href="#">AT DIGITAL</a>
                    </div>
                    <button className="navbar-toggler text-white" type="button" onClick={toggleOffcanvas} data-bs-toggle="offcanvas" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <img src="/list.svg" alt="hamburger" />
                    </button>
                    <div className={`offcanvas offcanvas-end ${offcanvasVisible ? 'show' : ''}`} id="navbarSupportedContent" aria-labelledby="navbarSupportedContentLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => setOffcanvasVisible(false)}></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                {offcanvasVisible && (
                                    <li className="nav-item">
                                        <a className="nav-link active text-white" aria-current="page" href="#">HOME</a>
                                    </li>
                                )}
                                <li className="nav-item">
                                    <a className={`nav-link ${offcanvasVisible ? '' : 'text-white'}`} aria-current="page" href="#">SERVICES</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${offcanvasVisible ? '' : 'text-white'}`} href="#">ABOUT US</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${offcanvasVisible ? '' : 'text-white'}`} href="#">CONTACT US</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${offcanvasVisible ? '' : 'text-white'}`} href="#">CAREERS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
