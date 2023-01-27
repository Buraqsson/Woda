import React from "react";
import { VscVerified } from "react-icons/vsc";

const verifieraKonto = () => {
  return (
    <form class="text-4xl bg-third-color w-96 p-6 ">
      <div class="flex items-center justify-center mb-4">
        <VscVerified className=" w-40 h-40 inline-block fill-regal-blue" />
      </div>
      <p className="text-3xl font-semibold not-italic	text-center	 mb-4">
        Innan du kan komma igång måste du verifiera ditt konto{" "}
      </p>
      <p className="text-base font-normal not-italic text-center mb-4">
        Din verifieringslänk kommer till din mail. Hittar du inte det? Glöm inte
        att kolla din skräppost.
      </p>
      <p className="font-medium text-lg	text-center	text-regal-blue mb-4">
        <a haref="#"> Inte fått en länke?</a>
      </p>
      <button
        type="submint"
        class="bg-regal-blue w-full text-gray-100 py-2 rounded-full hover:bg-blue-600 trandition-colors"
      >
        SKICKA IGEN
      </button>
    </form>
  );
};

export default verifieraKonto;
