import React, { useState } from "react";
import logo from "../images/1s.png";

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative bg-black bg-opacity-60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-12 md:p-20 ">
        {/* Section header */}
        <div className="text-center pb-12 md:pb-16">
          <div className="w-ful">
            <img src={logo} className="mx-auto mb-8" />
          </div>

          <div className="max-w-3xl mx-auto bg-slate-100 p-6 bg-opacity-80 rounded-xl">
            <p
              className="text-xl text-gray-600 mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Ut consequatur explicabo in optio earum aut quod aliquam. Ea omnis
              quisquam ea sunt iusto ut suscipit omnis et fuga dolores non quas
              vitae est quia dolores sit ipsam repellat. Eum perferendis tenetur
              est odit vitae aut consectetur maiores est galisum consequatur.
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <div>
                <a
                  className="btn text-white bg-orange-300 hover:bg-orange-400 w-full sm:w-auto sm:ml-4"
                  href="https://api.whatsapp.com/send/?phone=5549999999999"
                >
                  FALE CONOSCO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
