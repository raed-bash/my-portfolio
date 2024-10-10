import React from "react";
import Link from "./link";
import { HomeIcon } from "@heroicons/react/24/outline";
import { BlogIcon, ContactIcon, ResumeIcon, WorkIcon } from "../assets/icons";

function Navbar() {
  return (
    <div className="lg:w-[526px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-dark-secondary">
      <nav className="hidden lg:block">
        <ul className="flex">
          <Link icon={<HomeIcon />}>Home</Link>
          <Link icon={<ResumeIcon />}>Resume</Link>
          <Link icon={<WorkIcon />}>Works</Link>
          <Link icon={<BlogIcon />}>Blogs</Link>
          <Link icon={<ContactIcon />}>Contact</Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
