import React from "react"
import './index.css';
import { Avatar } from "./components/Avatar";
import { InputText } from "./components/InputText";
import { Button } from "./components/Button";
import { ImageButton } from "./components/ImageButton";
import { Comment } from "./components/Comment";

export function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-4xl w-auto">

        <div className="bg-[#E5D8EA] mx-auto w-36 h-14 mt-5 mb-12 rounded-4xl"></div>
        <div className="flex flex-col ml-12">
          <b className="text-4xl text-[#372D3B]">Encontre <span className="text-[#864293]">Fábio</span> no local de partida</b>
          <a className="text-2xl text-[#372D3B]">Chega em 3 minutos (800 metros)</a>
        </div>

        <div className="flex items-center justify-between mt-12">
          <div className="flex flex-col ml-12 items-center">
            <Avatar image="src/public/driver.svg" wSize={378} hSize={170} radius={0} />
          </div>

          <div className="flex flex-col mr-12">
            <b className="text-4xl text-[#372D3B]">BCD0D19</b>
            <a className="text-2xl text-[#372D3B]">Honda Civic Roxo</a>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-between mt-12 mx-12">
            <div className="text-lg text-[#372D3B] mr-12">
              <InputText name="mensage" wSize={590} hSize={50} placeholder="Enviar mensagem para Boris..." radius={18} bgColor="#F5EDF7"/>
            </div>

              <div className="flex">
                <div className="font-bold text-white mr-8">
                  <Button text="Publicar" wSize={108} hSize={50} radius={8} bgColor="#00875F"/>
                </div>

                <div className="mr-8">
                  <ImageButton image="src/public/telephone.svg" wSize={50} hSize={50}/>
                </div>

                <div>
                  <ImageButton image="src/public/plus.svg" wSize={50} hSize={50}/>
                </div>
              </div>
          </div>
    
            <div className="mt-12 mx-12">
              <Comment text="Boris estou no local já lhe esperando. estou com camisa azul e calça jeans" image="src/public/avatar2.svg" functionImage="src/public/delete.svg"/>
            </div>

            <div className="mx-12">
              <Comment text="Acabei de lhe ver. Vou estacionar o carro próximo." image="src/public/avatar1.svg" functionImage="src/public/delete.svg"/>
            </div>

        </div>
        
      </div>
    </div>
  );
}