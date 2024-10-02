import React from "react";

function Header() {
  return (
    <div className="flex justify-between py-10 px-8 font-semibold">
      <div className="flex gap-28 ">
        <div>What we believe</div>
        <div>Our features</div>
      </div>
      <div className="flex gap-28">
        <div>Our story</div>
        <div>The waitlist</div>
      </div>
    </div>
  );
}

export default Header;
