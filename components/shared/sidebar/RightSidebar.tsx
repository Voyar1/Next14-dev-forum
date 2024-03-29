import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "../RenderTag";

const RightSidebar = () => {
  const hotQuestions = [
    { _id: "1", title: "How do I use express as a custom server in NextJS?" },
    { _id: "2", title: "How do I use express as a custom server in NextJS?" },
    { _id: "3", title: "How do I use express as a custom server in NextJS?" },
    { _id: "4", title: "How do I use express as a custom server in NextJS?" },
    { _id: "5", title: "How do I use express as a custom server in NextJS?" },
  ];

  const popularTags = [
    { _id: "1", name: "javascript", totalQuestions: 5 },
    { _id: "2", name: "javascript", totalQuestions: 5 },
    { _id: "3", name: "javascript", totalQuestions: 5 },
    { _id: "4", name: "javascript", totalQuestions: 5 },
    { _id: "5", name: "javascript", totalQuestions: 5 },
  ];

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px]  flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300  max-xl:hidden dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((item) => {
            return (
              <Link
                href={item.title}
                key={item._id}
                className="flex items-center justify-between gap-7"
              >
                <p className="body-medium text-dark500_light700">
                  {item.title}
                </p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="chevron right"
                  width={16}
                  height={16}
                  className="invert-colors"
                ></Image>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => {
            return (
              <RenderTag
                key={tag._id}
                _id={tag._id}
                name={tag.name}
                totalQuestions={tag.totalQuestions}
                showCount
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
