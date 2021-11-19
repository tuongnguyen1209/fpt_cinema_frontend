import React from "react";
import { TitleStyle } from "./title-style";
import {useState} from "react"
import { Link } from "react-router-dom";

function Title({title1, title2}) {

    const [state, setState] = useState("span");
    const [state2, setState2] = useState("span2");

    const ChangeBtn = (e) => {
        e.preventDefault();
        setState("span");
        setState2("span2");
    };
    const ChangeBtn2 = (e) => {
        e.preventDefault();
        setState2("span");
        setState("span2");
    };
    return (
        <TitleStyle >

            <div className="title">
            <span className={state}>
                <Link to="" onClick={ChangeBtn}>
                    {title1}
                </Link>
            </span>
            <span className={state2}>
                <Link to="" onClick={ChangeBtn2}>
                    {title2}
                </Link>
            </span>
            <div className="line">
                <div className="line1"></div>
                <div className="line2"></div>
            </div>
            </div>

        </TitleStyle>
    )
}

export default Title