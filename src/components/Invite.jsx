import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { useLocation, Link } from "react-router-dom";
import { useRef } from "react";

function Invite() {
  return (
    <form class="   bg-third-color px-6 mt-5 ">
      <Link to="/setting">
        {" "}
        <div className="text-regal-blue py-1 ">
          <svg
            className="w-4 h-4  inline-block"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.250001 7L6.5 0.75L7.375 1.625L2 7L7.375 12.375L6.5 13.25L0.250001 7Z"
              fill="#3703CC"
            />
          </svg>

          <sp href="#">Tillbaka</sp>
        </div>
      </Link>

      <p className="text-3xl font-semibold not-italic	text-center	py-5">
        Bjuda in ....{" "}
      </p>
      <p className="text-base font-normal not-italic text-center mb-4">
        Är det fler ska ha möjligheten att hålla koll på vattenförbrukningen?
        Bjud in dem till appen.
      </p>

      <form class="flex items-center">
        <label for="simple-search" class="sr-only">
          Search
        </label>
        <div class="relative w-full">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
          />
        </div>
        <button
          type="submit"
          class="p-2.5 ml-2 text-sm font-medium text-white bg-regal-blue rounded-lg border border-regal-blue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <BsPlusLg />
          <span class="sr-only">Search</span>
        </button>
      </form>
      <p className="font-medium text-lg	text-left	text-black py-3.5 mb-4">
        <a haref="#"> Från dina kontakter:</a>
      </p>
      <form class="flex items-center w- h-14 text-white gap-5 bg-second-color focus:ring-4 focus:ring-blue-300 font-normal text-base not-italic rounded-lg  px-4 py-1  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800  justify-between  mb-4">
        <label
          for="default-checkbox"
          class="ml-2 text-base font-normal not-italic text-white  dark:text-gray-300"
        >
          Anna Hansoon
        </label>
        <input
          disabled
          id="default-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
      </form>
      <div class="flex items-center w- h-14 text-white gap-5 bg-white focus:ring-4 focus:ring-blue-300 font-normal text-base not-italic rounded-lg  px-4 py-1  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800  justify-between  mb-4">
        <label
          for="default-checkbox"
          class="ml-2 text-base font-normal not-italic text-regal-blue dark:text-gray-300"
        >
          Pappa
        </label>
        <input
          disabled
          id="default-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <div class="flex items-center opacity-50  h-14 text-reglar-blue gap-5 bg-white focus:ring-4 focus:ring-blue-300 font-normal text-base not-italic rounded-lg  px-4 py-2   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800  justify-between  my-4">
        <label
          for="default-checkbox"
          class="ml-2 text-base font-normal not-italic  text-regal-blue  dark:text-gray-300"
        >
          Sten Andersson
        </label>
        <input
          disabled
          id="default-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
      <button
        type="submint"
        class="bg-regal-blue w-full text-gray-100 py-2 rounded-full hover:bg-blue-600 trandition-colors my-5"
      >
        VÄLJ MÄTARE
      </button>
    </form>
  );
}

export default Invite;
