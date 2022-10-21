import React from "react";
import { useState } from "react";
import logo from "../images/1s.png";
import { FaWhatsapp, FaSearchLocation, FaVoicemail } from "react-icons/fa";
import { Switch } from "@headlessui/react";

const Contact = () => {
  const [nm, setNm] = useState("");
  const [em, setEm] = useState("");
  const [msg, setMsg] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [enabled1, setEnabled1] = useState(false);
  function handleName(e) {
    console.log(e.target.value);
    setNm(e.target.value);
  }
  function handleEmail(e) {
    console.log(e.target.value);
    setEm(e.target.value);
  }
  function handleMessage(e) {
    console.log(e.target.value);
    setMsg(e.target.value);
  }
  function handleSubmit(event) {
    console.log(`${nm} ${em} ${msg}`);
  }


  return (
    <div className="bg-gray-200 pb-6">
      <section id="contacts ">
        <h3 className=" h2 mb-4 text-center text-orange-400">Contato</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 p-2 md:p-6 md:mx-12 space-x-6">
          {/* left */}
          <div className="h-full py-8 mx-4">
            <img
              className="mx-auto mb-6"
              src={logo}
              width="300"
              height=""
              alt="consultoria-fundo"
            />
            <h1 className="text-center text-black text-2xl font-mono font-bold tracking-wider">
              Informações para contato
            </h1>
            <div className=" text-white p-2">
              <div className="flex justify-center items-center py-1">
                <FaWhatsapp className="text-black"/>
                <p className="ml-2 text-black">(49) 9 9999-9999</p>
              </div>
              <div className="flex justify-center items-center py-1">
                <FaVoicemail className="text-black"/>
                <p className="ml-2 text-black">viagensdososnhos@gmail.com</p>
              </div>
              <div className="flex justify-center items-center py-1">
                <FaSearchLocation className="text-black" />
                <p className="ml-0 md:ml-2 w-56 lg:w-auto text-center text-black">
                  Endereço n000, 000.000.000-00, Cidade-UF
                </p>
              </div>
            </div>
          </div>

          {/* right */}

          <form
            className=" container w-full"
          >
            <div className="mr-8 mt-4">
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-400">Nome</label>
                <input
                  required
                  type="text"
                  name="name"
                  className="w-full bg-white-800 rounded border border-gray-700 focus:ring-indigo-200 text-base outline-none text-dark-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={handleName}
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-400"
                >
                  Email
                </label>
                <input
                  required
                  type="text"
                  name="email"
                  className="w-full bg-white-800 rounded border border-gray-700 focus:ring-indigo-200 text-base outline-none text-dark-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={handleEmail}
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="phone"
                  className="leading-7 text-sm text-gray-400">
                  Telefone
                </label>
                <input
                  required
                  type="text"
                  name="phone"
                  className="w-full bg-white-800 rounded border border-gray-700 focus:ring-indigo-200 text-base outline-none text-dark-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={handleName}
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="title"
                  className="leading-7 text-sm text-gray-400"
                >
                  Assunto
                </label>
                <input
                  required
                  type="text"
                  name="title"
                  className="w-full bg-white-800 rounded border border-gray-700 focus:ring-indigo-200 text-base outline-none text-dark-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={handleEmail}
                />
              </div>
              <div className=" mb-4">
                <label htmlFor="content"
                  className="leading-7 text-sm text-gray-400">
                  Mensagem
                </label>
                <textarea
                  required
                  type="text"
                  name="content"
                  className="w-full bg-white-800 rounded border border-gray-800 focus:ring-indigo-200 h-32 text-base outline-none text-dark-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  onChange={handleMessage}
                />
              </div>

              <div className="flex flex-col">
                <div className="flex">
                  <Switch
                    required
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${enabled ? "bg-blue-600" : "bg-gray-500"
                      } relative inline-flex h-6 w-16 sm:w-12 items-center rounded-full mx-4`}
                  >
                    <span
                      className={`${enabled ? "translate-x-6" : "translate-x-1"
                        } inline-block h-4 w-4 transform rounded-full bg-white`}
                    />
                  </Switch>
                  <div className="absolute" hidden>
                    <input type="checkbox" checked={enabled} />
                  </div>
                  <a className="underline">Li e aceito os termos de Política de Privacidade.</a>
                </div>
                <div className="flex py-0 sm:py-2">
                  <Switch
                    required
                    checked={enabled1}
                    onChange={setEnabled1}
                    className={`${enabled1 ? "bg-blue-600" : "bg-gray-500"
                      } relative inline-flex h-6 w-12 items-center rounded-full mx-4`}
                  >
                    <span
                      className={`${enabled1 ? "translate-x-6" : "translate-x-1"
                        } inline-block h-4 w-4 transform rounded-full bg-white`}
                    />
                  </Switch>
                  <a >Aceito recerber e-mails.</a>
                </div>
                <div className="flex mt-2 sm:mt-0">
                  <button
                    type="submit"
                    className="mx-auto md:mx-0 mt-4 text-white border-0 py-2 px-6 focus:outline-none  rounded text-lg bg-orange-300 hover:bg-orange-400"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
