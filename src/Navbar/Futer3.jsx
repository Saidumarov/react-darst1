import React from "react";
import "./futer.css";
import img from "./companit/assets/ph.jpg"
import img1 from "./companit/assets/commit.png"



const Futer3 = () => {
    return (
        <div>
            <div className="futflex">
                <div className="fut">
                    <img src={img} alt="" className="futimg" />

                    <b>112</b></div>
                <div className="futcentr">
                    <h1>Allow image/video upload to feed</h1>
                    <p>Images and screencasts can enhance comments on solutions.</p>
                    <div className="futfat">
                        Feature
                    </div>
                </div>
                <div className="futright"  style={{ marginLeft: '210px' }}>
                    <img src={img1} alt="" className="commit" />
                    <h2 className="futp"><b>2</b></h2>
                </div>
            </div>
        </div>
    )
}

export default Futer3