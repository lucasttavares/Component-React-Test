import React from "react";
import { Avatar } from "../Avatar";
import { ImageButton } from "../ImageButton";

export function Comment({text, image, functionImage}){
    return(
        <div className="flex items-center justify-between bg-[#E5E1E6] p-4 rounded-2xl mb-8">
            <div><Avatar image={image} wSize={50} hSize={50} radius={100} /></div>
            <div><a className="mr-32 ml-32">{text}</a></div>
            <div><ImageButton image={functionImage} wSize={48} hSize={48}/></div>
        </div>
    )
}