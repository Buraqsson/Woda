import React from "react";
import { useRef } from "react";
import logo from "../../imges/logo.svg";
import { Link } from "react-router-dom";

const SkappaKonto = () => {
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
    <form onSubmit={onSubmit} class="bg-third-color w-25 h-full p-6 rounded ">
      <span className="flex justify-center text-4xl font-semibold mt-10">
        Skapa konto
      </span>
      <div className="py-5">
        <input
          type="email"
          id="email"
          class="bg-third-color last:border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="E-postadress"
          required
        />
      </div>
      <div className="pb-5">
        <input
          type="password"
          id="password"
          class="bg-third-color  last:border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Lösenord"
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
          class="bg-regal-blue w-full text-gray-100 py-2 rounded-full hover:bg-blue-600 trandition-colors"
        >
          SKAPA KONTO
        </button>
      </Link>
      <div className="flex  justify-center pt-3 my-16 ">
        <img src={logo} alt="logo" className="w-35 h-35 " />
      </div>
    </form>
  );
};

export default SkappaKonto;
