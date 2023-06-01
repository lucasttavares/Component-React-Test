import React from "react";

export function Avatar({ wSize, hSize, image, radius }) {
    return (
      <div>
        <img src={image}

        style={{width: wSize,
        height: hSize,
        borderRadius: radius
        }}/>
      </div>
    );
  }