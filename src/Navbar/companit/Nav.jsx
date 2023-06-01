import React from "react";
import img from "./assets/pho.jpg"
import "./Nav.css"

const Nav = () => {
    return (
        <div>
            <div className="navcon">
                <img src={img} alt="" className="img" />
                <h1 className="navh1">6 Suggestions</h1>
                <p className="navp">Sort by : <b> Most Upvotes</b> </p>
                <button><b>+ Add Feedback</b></button>
            </div>



        </div>

    )
}

export default Nav
