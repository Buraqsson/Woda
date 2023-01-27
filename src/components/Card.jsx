import React from "react";

const Card = () => {
  return (
    <div className="pt-12 px-6 h-full my-10  border-grey-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
      <img
        src="https://picsum.photos/id/1016/720/400"
        alt="blog"
        className="lg:h-72 md:h-48 w-full object-cover object-center:"
      />
      <div className="p-4 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
        <h1 className="text-2xl font-semibold mb-3"> Tips</h1>
        <p className="leading-relaxed mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam modi,
          sed do eiusmod tempor incidiunt ut labor et dolore magna.
        </p>
        <div className="flex items-center flex-wrap text-black text-base not-italic	font-normal	font-rustica ">
          <a
            className="text-regal-blue font-rustica font-medium text-lg inline-flex items-center md:mb-2 lg:mb-0"
            href="#"
          >
            Läs mer
            <svg
              class="w-4 h-4 ml-2"
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
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
