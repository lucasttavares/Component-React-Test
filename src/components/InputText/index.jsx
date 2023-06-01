import React from "react";

export function InputText({ wSize, hSize, placeholder, radius, name, bgColor }) {
    return (
      <input type="text"
      name={name}
      placeholder={placeholder}
      className="placeholder-[#372D3B] opacity-100"
      
      style={{width: wSize,
        height: hSize,
        borderRadius:radius,
        backgroundColor: bgColor,
        outline: "none",
        padding:"20px",
      }}/>
    );
  }