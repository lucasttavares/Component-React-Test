import React from "react";

export function Button({wSize, hSize, bgColor, text, radius}){
    return(
        <button type="button"
        style={{
            width: wSize,
            height:hSize,
            backgroundColor: bgColor,
            borderRadius: radius
        }}>
            {text}
        </button>
    )
}