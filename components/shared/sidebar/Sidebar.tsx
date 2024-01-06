"use client";

import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constans";
import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="background-light900_dark200 light-border sticky left-0 top-0 flex h-screen w-fit flex-col overflow-y-auto p-6 pt-36 shadow-light-300 max-sm:hidden  lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-4 ">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900 bg-transparent"
              } text-dark200_light900 flex items-center justify-start gap-4 bg-transparent p-4 `}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p
                className={`${
                  isActive ? "text-light-900" : "text-dark300_light900"
                } base-medium max-lg:hidden`}
              >
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>

      <SignedOut>
        <div className="flex flex-col gap-3 ">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 font-bold shadow-none">
              <span className="primary-text-gradient">Log in</span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 font-bold shadow-none">
              Sign Up
            </Button>
          </Link>
        </div>
      </SignedOut>
    </aside>
  );
};

export default Sidebar;
