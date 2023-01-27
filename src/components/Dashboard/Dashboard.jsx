import React from "react";
import Card from "../Card.jsx";
import Chart from "../Chart.jsx";
import ProgressBar from "../ProgressBar/Progressbar.jsx";
import Header from "../Header/Header.jsx";
import { useLocation, Link } from "react-router-dom";
import { BsThermometerHigh } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div>
      <Header title="home" bgImg="" />

      <form className="flex space-x-2.5 px-6">
        <button className="flex-1 bg-white hover:bg-gray-100 text-regal-blue font-semibold py-2 px-4 rounded-xl drop-shadow-xl">
          Dag
        </button>
        <button className="flex-1 bg-white hover:bg-gray-100 text-regal-blue font-semibold py-2 px-4   rounded-xl drop-shadow-xl">
          Vecka
        </button>
        <button className="flex-1 bg-white hover:bg-gray-100 text-regal-blue font-semibold py-2 px-4  rounded-xl drop-shadow-xl">
          Månad
        </button>
        <button className="flex-1 bg-white hover:bg-gray-100 text-regal-blue font-semibold py-2 px-4  rounded-xl drop-shadow-xl ">
          År
        </button>
      </form>
      <div className="mx-auto px-6 sm:px-6 lg:px-8 py-1">
        <Link to="/">
          <p className="flex justify-start gap-2 px-1 py-10 text-regal-blue font-medium text-lg">
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 2H13.5V0.5H12V2H6V0.5H4.5V2H1.5C0.675 2 0 2.675 0 3.5V18.5C0 19.325 0.675 20 1.5 20H16.5C17.325 20 18 19.325 18 18.5V3.5C18 2.675 17.325 2 16.5 2ZM16.5 18.5H1.5V8H16.5V18.5ZM16.5 6.5H1.5V3.5H4.5V5H6V3.5H12V5H13.5V3.5H16.5V6.5Z"
                fill="#3703CC"
              />
            </svg>
            Välj intervall
          </p>
        </Link>
        <span className="font-semibold font-rustica py-5 text-4xl text-black   ">
          Nuvarande vattenförbrukning
        </span>
      </div>
      <div className=" mx-auto px-6 sm:px-6 lg:px-8 mt-1  ">
        <div className="max-w-md pt-10 px-6 h-full   border-grey-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
          <ProgressBar />
          <p className=" text-base not-italic font-rustica font-medium text-regal-blue pt-6 pb-1">
            102 036 l
          </p>
          <p className=" text-xs not-italic font-normal font-rustica pb-3">
            Av förra årets förbrukning
          </p>
        </div>
        <div className="container  py-2 mx-auto">
          <span className="pb-8  text-regal-blue font-rustica font-medium text-lg mt-10">
            <a href="#">Få hjälp att minska din förbrukning </a>
            <svg
              className="w-6 h-6 ml-2 inline-block"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </span>

          <div className=" max-w-md sm:w-1/2 lg:w-1/3">
            <div className="flex justify-start gap-2 pt-16 ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_606_339)">
                  <path
                    d="M10.5 6.75C11.0821 6.75515 11.6571 6.62285 12.1784 6.36386C12.6997 6.10487 13.1525 5.7265 13.5 5.25952C13.8511 5.72268 14.3046 6.09827 14.8251 6.35686C15.3456 6.61544 15.9189 6.75001 16.5 6.75001C17.0812 6.75001 17.6545 6.61544 18.175 6.35686C18.6954 6.09827 19.149 5.72268 19.5 5.25952C19.8475 5.7265 20.3003 6.10487 20.8216 6.36386C21.3429 6.62285 21.918 6.75515 22.5 6.75V5.25C21.9892 5.22018 21.4989 5.03906 21.0913 4.72969C20.6838 4.42031 20.3776 3.99667 20.2116 3.5127C20.1611 3.36382 20.0654 3.2344 19.9378 3.14249C19.8103 3.05059 19.6572 3.00077 19.5 3C19.343 2.99882 19.1897 3.04746 19.0621 3.13893C18.9345 3.23039 18.8392 3.35997 18.7899 3.50902C18.6242 3.99377 18.3179 4.41821 17.9101 4.72826C17.5023 5.03831 17.0114 5.21994 16.5 5.25C15.9892 5.22018 15.4989 5.03906 15.0913 4.72969C14.6838 4.42031 14.3776 3.99667 14.2115 3.5127C14.1611 3.36382 14.0654 3.2344 13.9378 3.14249C13.8103 3.05059 13.6572 3.00077 13.5 3C13.3425 2.99663 13.1882 3.04442 13.0602 3.1362C12.9321 3.22797 12.8373 3.35879 12.7899 3.50902C12.6242 3.99377 12.3179 4.41821 11.9101 4.72826C11.5023 5.03831 11.0114 5.21994 10.5 5.25H9.75003V4.5C9.75003 3.70435 9.43395 2.94129 8.87135 2.37868C8.30874 1.81607 7.54567 1.5 6.75002 1.5C5.95438 1.5 5.19131 1.81607 4.6287 2.37868C4.0661 2.94129 3.75002 3.70435 3.75002 4.5V12.9463C2.85836 13.5626 2.17891 14.4394 1.80465 15.4567C1.43038 16.474 1.37959 17.5821 1.6592 18.6294C1.93882 19.6767 2.53519 20.612 3.36672 21.3074C4.19826 22.0027 5.22433 22.4242 6.30456 22.514C7.38479 22.6039 8.4664 22.3578 9.40142 21.8095C10.3364 21.2611 11.0792 20.4372 11.528 19.4505C11.9769 18.4639 12.1099 17.3626 11.9089 16.2974C11.7079 15.2323 11.1827 14.2552 10.4052 13.5H10.5C11.0821 13.5051 11.6571 13.3728 12.1784 13.1139C12.6997 12.8549 13.1525 12.4765 13.5 12.0095C13.8511 12.4727 14.3046 12.8483 14.8251 13.1069C15.3456 13.3654 15.9189 13.5 16.5 13.5C17.0812 13.5 17.6545 13.3654 18.175 13.1069C18.6954 12.8483 19.149 12.4727 19.5 12.0095C19.8475 12.4765 20.3003 12.8549 20.8216 13.1139C21.3429 13.3728 21.918 13.5051 22.5 13.5V12C21.9892 11.9702 21.4989 11.7891 21.0913 11.4797C20.6838 11.1703 20.3776 10.7467 20.2116 10.2627C20.1611 10.1138 20.0654 9.9844 19.9378 9.89249C19.8103 9.80059 19.6572 9.75077 19.5 9.75C19.343 9.74882 19.1897 9.79746 19.0621 9.88893C18.9345 9.98039 18.8392 10.11 18.7899 10.259C18.6242 10.7438 18.3179 11.1682 17.9101 11.4783C17.5023 11.7883 17.0114 11.9699 16.5 12C15.9892 11.9702 15.4989 11.7891 15.0913 11.4797C14.6838 11.1703 14.3776 10.7467 14.2115 10.2627C14.1611 10.1138 14.0654 9.9844 13.9378 9.89249C13.8103 9.80059 13.6572 9.75077 13.5 9.75C13.3425 9.74663 13.1882 9.79442 13.0602 9.8862C12.9321 9.97797 12.8373 10.1088 12.7899 10.259C12.6242 10.7438 12.3179 11.1682 11.9101 11.4783C11.5023 11.7883 11.0114 11.9699 10.5 12H9.75003V6.75H10.5ZM5.25002 4.5C5.25002 4.10218 5.40806 3.72064 5.68936 3.43934C5.97067 3.15804 6.3522 3 6.75002 3C7.14785 3 7.52938 3.15804 7.81068 3.43934C8.09199 3.72064 8.25003 4.10218 8.25003 4.5V9H5.25002V4.5ZM6.75002 21C5.92467 21.0006 5.1222 20.7287 4.46722 20.2265C3.81223 19.7243 3.34136 19.0199 3.12772 18.2226C2.91408 17.4254 2.96961 16.5799 3.28569 15.8175C3.60177 15.0551 4.16073 14.4183 4.87577 14.0061L5.25002 13.7893V10.5H8.25003V13.7893L8.62427 14.0061C9.33932 14.4183 9.89828 15.0551 10.2144 15.8175C10.5304 16.5799 10.586 17.4254 10.3723 18.2226C10.1587 19.0199 9.68782 19.7243 9.03283 20.2265C8.37785 20.7287 7.57538 21.0006 6.75002 21Z"
                    fill="#3703CC"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_606_339">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <h1 className="pb-8  text-black font-degular font-semibold text-2xl xl:text-6xl">
                Varmvattenförbrukning
              </h1>
            </div>
            <div className=" bg-regal-blue pt-5 px-6     border-opacity-60 rounded-lg overflow-hidden shadow-xl">
              <div className="grid grid-cols-2 divide-x">
                <div className="pl-1 pb-5  ">
                  <h1 className="text-white text-base font-normal not-italic text-align: center  lg:text-5xl xl:text-6xl">
                    Förbrukning
                  </h1>
                  <h1 className="text-white text-2xl font-semibold not-italic text-align: center  lg:text-5xl xl:text-6xl">
                    180
                  </h1>
                  <h1 className="text-white opacity-60 text-base font-normal not-italic text-align: center  lg:text-5xl xl:text-6xl">
                    Liter
                  </h1>
                </div>
                <div className=" pl-16 ">
                  <h1 className="text-white text-base font-normal not-italic text-align: center  lg:text-5xl xl:text-6xl">
                    Kostnad
                  </h1>
                  <h1 className="text-white text-2xl font-semibold not-italic text-align: center  lg:text-5xl xl:text-6xl">
                    3456
                  </h1>
                  <h1 className="text-white opacity-60 text-base font-normal not-italic text-align: center  lg:text-5xl xl:text-6xl">
                    kronor
                  </h1>
                </div>
              </div>
            </div>
            <div className="py-12 ">
              <h2 className=" text-regal-blue font-rustica font-medium text-lg">
                <a href="#">Få hjälp att minska din förbrukning</a>
                <svg
                  className="w-6 h-6 ml-2 inline-block"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </h2>
            </div>

            <Chart />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
