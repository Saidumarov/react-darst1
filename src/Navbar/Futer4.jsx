import React from "react";
import "./futer.css";
import img from "./companit/assets/ph.jpg"
import img1 from "./companit/assets/commit.png"



const Futer4 = () => {
    return (
        <div>
            <div className="futflex">
                <div className="fut">
                    <img src={img} alt="" className="futimg" />

                    <b>112</b></div>
                <div className="futcentr">
                    <h1>Ability to follow others</h1>
                    <p>Stay updated on comments and solutions other people post.</p>
                    <div className="futfat">
                        Feature
                    </div>
                </div>
                <div className="futright"  style={{ marginLeft: '225px' }}>
                    <img src={img1} alt="" className="commit" />
                    <h2 className="futp"><b>2</b></h2>
                </div>
            </div>
        </div>
    )
}

export default Futer4