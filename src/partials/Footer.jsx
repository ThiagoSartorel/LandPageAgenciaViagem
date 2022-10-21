import React from "react";

function Footer() {
  return (
    <footer>
      <div className="w-full mx-auto bg-gray-50 text-xl">
        <div className="px-10 grid grid-cols-1 sm:grid-cols-3 gap-10 py-4 md:py-12 text-center">

          <div className="text-sm text-gray-600 text-center pt-4">
            <a
              className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out text-base"
            >
              Politica de Privacidade
            </a>
          </div>
          
          <div className="">
            <h6 className="text-gray-800 font-medium mb-2">Kviagens</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <p className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out ">
                  Agência de viagens © Todos os Direitos Reservados
                </p>
              </li>
            </ul>
          </div>

          <div className="">
            <h6 className="text-gray-800 font-medium mb-2">CNPJ</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <p className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  876544/0001-06
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center py-4 border-t border-gray-200 bg-gray-900 bg-opacity-90 shadow-xl">
          <div className="text-sm text-white mr-4">
          Thiago Sartorel  © Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
