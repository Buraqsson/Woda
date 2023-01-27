import React from "react";
import { CiCircleRemove } from "react-icons/ci";
import { useLocation, Link } from "react-router-dom";
import { useRef } from "react";
import Header from "../Header/Header.jsx";

const inställningar = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  }
  return (
    <div className="flex-row items-center  px-6  ">
      <Header title="home" bgImg="" />
      <div className="flex gap-4 items-start px-6 pt-2 ">
        <svg
          className=""
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.2511 5.87208L19.2522 5.87208C19.8478 5.87104 20.4421 5.8163 21.0281 5.70852L21.0384 5.70662L21.0487 5.70444C21.0502 5.70411 21.0519 5.70414 21.0541 5.70502C21.056 5.70578 21.0591 5.70756 21.0623 5.71129C22.394 7.7551 23.0365 10.1862 22.8907 12.6369C22.7445 15.0928 21.8148 17.4315 20.2449 19.298C18.6752 21.1644 16.5518 22.4565 14.1982 22.9809C11.8448 23.5053 9.38724 23.2342 7.19805 22.2078C5.00864 21.1813 3.20562 19.4546 2.06504 17.2875C0.924356 15.1201 0.509405 12.632 0.884357 10.2015C1.2593 7.77099 2.40317 5.53349 4.13969 3.82787C5.87089 2.12749 8.09674 1.04825 10.4803 0.750148C10.4814 0.750339 10.4826 0.750745 10.484 0.751528C10.4869 0.753086 10.4912 0.756597 10.4949 0.763365L10.5007 0.774266L10.5069 0.784969C11.4003 2.33221 12.6766 3.61657 14.2104 4.50948C15.7444 5.40245 17.482 5.87251 19.2511 5.87208ZM10.4987 0.724627L10.8429 0.0929616L10.4987 0.724627Z"
            stroke="#3703CC"
            stroke-width="1.5"
          />
        </svg>

        <h1 className="pb-6 placeholder:px-4  text-black font-semibold text-2xl xl:text-6xl">
          Dina mätare
        </h1>
      </div>
      <div className="bg-white flex justify-items-center max-w-md pt-6 pb-6 px-6 h-full  border-grey-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
        <form action="" className="">
          <button
            type="button"
            class="flex flex-row gap-5 items-center  text-white bg-second-color hover:bg-regal-blue focus:ring-4  font-normal text-base not-italic rounded-lg  px-4 py-1  mb-2  "
          >
            Anna Hansson
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.04165 6.62743L12.9914 1.67768L11.5772 0.263468L6.62744 5.21322L1.67769 0.263468L0.26348 1.67768L5.21323 6.62743L0.26348 11.5772L1.67769 12.9914L6.62744 8.04164L11.5772 12.9914L12.9914 11.5772L8.04165 6.62743Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            type="button"
            class="text-white gap-5 bg-second-color hover:bg-regal-blue focus:ring-4 focus:ring-blue-300 font-normal text-base not-italic rounded-lg  px-4 py-1  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 inline-flex items-center justify-between "
          >
            Hanna Rickardsson
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.04165 6.62743L12.9914 1.67768L11.5772 0.263468L6.62744 5.21322L1.67769 0.263468L0.26348 1.67768L5.21323 6.62743L0.26348 11.5772L1.67769 12.9914L6.62744 8.04164L11.5772 12.9914L12.9914 11.5772L8.04165 6.62743Z"
                fill="white"
              />
            </svg>
          </button>
        </form>
      </div>
      <div className="flex items-center pt-10 pb-10 ">
        <h2 className=" text-blue-700 font-medium text-lg">
          <a href="#">Lägg till fler mätare</a>
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
      <Link to="/invite">
        <button
          type="submint"
          className="bg-regal-blue text-white w-full text-regular py-2 rounded-full shadow-md trandition-colors"
        >
          BJUD IN{" "}
        </button>
      </Link>
      <h1 className="flex items-start pt-6">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_606_1603)">
            <path
              d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68508C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21Z"
              fill="#3703CC"
            />
            <path
              d="M12 18.75C12.6213 18.75 13.125 18.2463 13.125 17.625C13.125 17.0037 12.6213 16.5 12 16.5C11.3787 16.5 10.875 17.0037 10.875 17.625C10.875 18.2463 11.3787 18.75 12 18.75Z"
              fill="#3703CC"
            />
            <path
              d="M12.75 6.00001H11.625C11.1815 5.99902 10.7422 6.08564 10.3323 6.2549C9.92236 6.42416 9.54991 6.67272 9.23632 6.98632C8.92272 7.29991 8.67416 7.67236 8.5049 8.08228C8.33564 8.4922 8.24902 8.93152 8.25001 9.37501V9.75001H9.75001V9.37501C9.75001 8.87773 9.94755 8.40081 10.2992 8.04918C10.6508 7.69755 11.1277 7.50001 11.625 7.50001H12.75C13.2473 7.50001 13.7242 7.69755 14.0758 8.04918C14.4275 8.40081 14.625 8.87773 14.625 9.37501C14.625 9.87229 14.4275 10.3492 14.0758 10.7008C13.7242 11.0525 13.2473 11.25 12.75 11.25H11.25V14.625H12.75V12.75C13.6451 12.75 14.5036 12.3944 15.1365 11.7615C15.7694 11.1286 16.125 10.2701 16.125 9.37501C16.125 8.4799 15.7694 7.62146 15.1365 6.98852C14.5036 6.35559 13.6451 6.00001 12.75 6.00001Z"
              fill="#3703CC"
            />
          </g>
          <defs>
            <clipPath id="clip0_606_1603">
              <rect width="50" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p className="px-6 items-center text-base not-italic font-normal ">
          Bjud in fler användare för att hjälpas åt att hålla koll på er
          vattenförbrukning.{" "}
        </p>
      </h1>
      <p className="text-4xl	font-semibold not-italic	pt-10 pb-6 ">
        Profilinställningar
      </p>
      <p className="not-italic font-normal  text-lg		">
        Uppdatera ditt lösenord:
      </p>
      <form onSubmit={onSubmit} class="bg-third-color w-25 h-full p-6 rounded ">
        <div className="pb-5">
          <input
            type="password"
            id="password"
            class="bg-third-color  last:border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nytt lösenord"
            required
          />
        </div>
        <div className="pb-10">
          <input
            type="password"
            id="password"
            class="bg-third-color  last:border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Bekräfta lösenord"
            required
          />
        </div>
        <Link to="/verifierakonto">
          <button
            type="submint"
            class="bg-white w-full text-regal-blue text-lg font-medium py-4 rounded-full hover:bg-blue-600 trandition-colors border-1.5 shadow-xl mb-10"
          >
            UPPDATERA{" "}
          </button>
        </Link>
      </form>
    </div>
  );
};

export default inställningar;
