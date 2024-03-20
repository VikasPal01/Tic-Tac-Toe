import React from "react";

const Square=(props)=>{
    return(
        <div className="square"
        onClick={props.onClick}
        style={{border :"1px solid black",width:"100%",height:"100px",textAlign:"center",display: "flex",
        justifyContent: "center",
        alignItems: "center", fontSize:"32px",fontWeight:"500"}}>
            <h5>{props.value}</h5>
        </div>
    );
};
export default Square;