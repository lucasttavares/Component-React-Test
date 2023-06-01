import React from "react";

export function ImageButton({wSize, hSize, image}){
    return(
        <button type="button"
        style={{
            width: wSize,
            height:hSize,
        }}>
            <img src={image}/>
        </button>
    )
}