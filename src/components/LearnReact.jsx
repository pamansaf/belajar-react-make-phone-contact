import React from "react";
import Navbar from "./Navbar";
import EventHandlers from "./belajarReact/EventHandlers";
import Integer from "./belajarReact/UseState/Integer";
import Object from "./belajarReact/UseState/Object";

const LearnReact = () => {
  return (
    <div className="w-1/2 min-h-screen mx-auto">
      <Navbar />
      <h1 className="font-bold py-5 text-indigo-500">
        {" "}
        Halaman Belajar React Pemula
      </h1>
      <div>
        <EventHandlers />
        <Integer />
        <Object />
      </div>
    </div>
  );
};

export default LearnReact;
