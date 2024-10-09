"use client";
import React from "react";
import { Header, Navbar } from "./components";

export default function Home() {
  return (
    <div className="bg-white-900 dark:bg-[#121212] h-screen">
      <Header />
      <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
        <Navbar />
      </div>
    </div>
  );
}
