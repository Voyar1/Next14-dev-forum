import { sidebarLinks } from "@/constans";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const Sidebar = () => {
  return (
    <aside className="background-light900_dark200 light-border sticky left-0 top-0 flex h-screen w-fit flex-col overflow-y-auto p-6 pt-36 shadow-light-300 lg:w-[266px]">
      <div className="flex flex-1 flex-col items-start gap-6">
        {sidebarLinks.map((link) => (
          <Link
            href={link.route}
            key={link.route}
            className="flex-center gap-4"
          >
            <Image
              src={link.imgURL}
              alt={link.label}
              width={24}
              height={24}
              className="invert-colors"
            />
            <p className="text-dark200_light900 text-lg">{link.label}</p>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
