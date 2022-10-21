import React from "react";
import { AiOutlineHeart, AiOutlineIdcard, AiOutlineLike } from "react-icons/ai";

function FeaturesBlocks() {
  return (
    <section className="relative bg-gray-200">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-orange-400">Viagens dos seus sonhos</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <AiOutlineLike className="w-16 h-16 p-1 -mt-1 mb-2" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
                Siga nossas paginas e fique por dentro dos descontos!
              </h4>
              <a
                className="btn text-white bg-orange-300 hover:bg-orange-400 w-full sm:w-auto sm:ml-4 mt-4 cursor-pointer"
          
              >
                ENTRE EM CONTATO
              </a>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <AiOutlineIdcard className="w-16 h-16 p-1 -mt-1 mb-2" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
                Quais documentos fazer para levar nas viagens?
              </h4>
              <a
                className="btn text-white bg-orange-300 hover:bg-orange-400 w-full sm:w-auto sm:ml-4 mt-4 cursor-pointer"
          
              >
                ENTRE EM CONTATO
              </a>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <AiOutlineHeart className="w-16 h-16 p-1 -mt-1 mb-2" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">
                Venha curtir os melhores roteiros!<br></br>
              </h4>
              <a
                className="btn text-white bg-orange-300 hover:bg-orange-400 w-full sm:w-auto sm:ml-4 mt-4 cursor-pointer"
          
              >
                ENTRE EM CONTATO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
