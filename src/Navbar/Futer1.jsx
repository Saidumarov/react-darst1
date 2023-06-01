import React from "react";
import "./futer.css";
import img from "./companit/assets/ph.jpg"
import img1 from "./companit/assets/commit.png"



const Futer1 = () => {
    return (
        <div>
            <div className="futflex">
                <div className="fut">
                    <img src={img} alt="" className="futimg" />

                    <b>119</b></div>
                <div className="futcentr">
                    <h1>Add tags for solutions</h1>
                    <p>It would help people with light sensitivitie and dark mode.</p>
                    <div className="futfat">
                        Feature
                    </div>
                </div>
                <div className="futright"  style={{ marginLeft: '250px' }}>
                    <img src={img1} alt="" className="commit" />
                    <h2 className="futp"><b>2</b></h2>
                </div>
            </div>
        </div>
    )
}

export default Futer1