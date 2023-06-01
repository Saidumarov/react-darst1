import React from "react";
import "./navbar.css";
import Nav from "./companit/Nav";
import Futer from "./Futer";
import Futer1 from "./Futer1";
import Futer2 from "./Futer2";
import Futer3 from "./Futer3";
import Futer4 from "./Futer4";
import Futer5 from "./Futer5";


const Navbar = () => {
    return (
        <div>
            <div className="con">
                <div className="conwap">
                    <div className="con2">
                        <h1 className="conh1"> Frontend Mentor</h1>
                        <p className="conpp"> Frontend Mentor</p>
                    </div>
                    <div className="con22">
                        <div className="ai">
                            <div className="ai1">All</div>
                            <div className="ui">UI</div>
                            <div className="ux">UX</div>
                        </div>
                        <div className="bug">
                            <div className="bug1">Enhancement</div>
                            <div className="bug2">Bug</div>

                        </div>
                        <div className="fet">
                            Feature
                        </div>
                    </div>
                    <div className="con23">
                        <div className="ret">
                            <h1 className="reth1">Roadmap</h1>
                            <p className="retp"><u>View</u></p>
                        </div>
                        <div className="ret1">
                            <div className="reto"></div>
                            <h2 className="retpan">Planned</h2>
                            <h2 className="retpan1">2</h2>
                        </div>
                        <div className="ret2">
                            <div className="reto" style={{ backgroundColor: "#AD1FEA" }}></div>
                            <h2 className="retpan"  >In-Progress</h2>
                            <h2 className="retpan1" style={{ paddingLeft: "22px" }}>3</h2>
                        </div>
                        <div className="ret3">
                            <div className="reto" style={{ backgroundColor: "#62BCFA" }}></div>
                            <h2 className="retpan">Live</h2>
                            <h2 className="retpan1" style={{ paddingLeft: "98px" }}>1</h2>
                        </div>
                    </div>
                </div>
                <div className="conwap1">
                    <div className="con1">
                        <Nav />
                    </div>
                    <div className="con3">
                        <Futer />
                    </div>
                    <div className="con4">
                        <Futer1 />

                    </div>
                    <div className="con5">
                        <Futer2 />

                    </div>
                    <div className="con6">
                        <Futer3 />

                    </div>
                    <div className="con7">
                        <Futer4 />

                    </div>
                    <div className="con8">
                        <Futer5 />

                    </div>

                </div>

            </div>


        </div>
    )
}

export default Navbar