import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useRef } from "react";
import logo from "../../imges/logo.svg";

const login = () => {
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
    <form
      onSubmit={onSubmit}
      className="  bg-third-color   w-25 h-full p-6 rounded"
    >
      <span className="flex justify-center text-4xl font-semibold mt-10">
        Välkommen!
      </span>
      <div className="py-5">
        <input
          type="email"
          id="email"
          class="bg-third-color  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="E-postadress"
          required
        />
      </div>
      <div className="pb-10">
        <input
          type="password"
          id="password"
          class="bg-third-color border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Lösenord"
          required
        />
      </div>
      <button
        type="submint"
        className="bg-regal-blue w-full font-normal text-lg not-italic text-gray-100 py-2 rounded-full hover:bg-blue-600 trandition-colors"
      >
        LOGGA IN
      </button>
      <p
        className="flex items-center justify-center mb-4 text-regal-blue font-medium text-lg not-italic py-8 hover:text-blue-600 trandition-colors"
        hrf="#"
      >
        Glomet lössenord?
      </p>
      <Link to="/skappakonto">
        <button
          type="submint"
          className="bg-white w-full text-regal-blue font-rustica font-normal text-lg not-italic py-2 rounded-full shadow-md trandition-colors"
        >
          SKAPA KONTO
        </button>
      </Link>
      <div className="flex  justify-center pt-3 my-10 ">
        <img src={logo} alt="logo" className="w-35 h-35 " />
      </div>
    </form>
  );
};

export default login;
