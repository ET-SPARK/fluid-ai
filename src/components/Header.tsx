import React, { useState } from "react";

function Header() {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Header for larger screens */}
      <div className="flex justify-between py-10 px-8 font-semibold max-[480px]:hidden">
        <div className="flex gap-28 ">
          <div>What we believe</div>
          <div>Our features</div>
        </div>
        <div className="flex gap-28">
          <div>Our story</div>
          <div>The waitlist</div>
        </div>
      </div>

      {/* Header for small screens */}
      <div className="hidden max-[480px]:flex flex-col p-10">
        {/* Clickable icon to toggle the menu */}
        <div onClick={() => setShow(!show)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Conditionally rendered div based on the show state */}
        {show && (
          <div className="top-20  absolute ">
            <div className="mt-4">What we believe</div>
            <div className="mt-4">Our features</div>
            <div className="mt-4">Our story</div>
            <div className="mt-4">The waitlist</div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
