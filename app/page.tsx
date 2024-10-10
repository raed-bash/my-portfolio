"use client";
import React from "react";
import { Content, Header } from "./components";

export default function Home() {
  return (
    <div className="bg-white-900 dark:bg-dark-main h-full">
      <Header />
      <Content />
    </div>
  );
}
