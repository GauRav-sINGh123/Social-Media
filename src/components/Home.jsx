import React from "react";
import Sidebar from "./Sidebar";
import Middle from "./Middle";
import Right from "./Right";

function Home({ userData }) {
  console.log(userData);
  return (
    <div className="flex h-full">
      {/* Left Component */}
      <div className="hidden  md:block md:w-1/5  p-4">
        <Sidebar userData={userData} />
      </div>
      {/* Middle Component */}
      <div className="w-full md:w-3/5 p-4">
        <Middle userData={userData} />
      </div>
      {/* Right Component */}
      <div className="hidden md:block w-1/5 p-4">
        <Right />
      </div>
    </div>
  );
}

export default Home;
