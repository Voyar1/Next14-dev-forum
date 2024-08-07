import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "../RenderTag";
import { getHotQuestions } from "@/lib/actions/question.action";
import { getTopPopularTags } from "@/lib/actions/tag.actions";

const RightSidebar = async () => {
  const hotQuestions = await getHotQuestions();

  const popularTags = await getTopPopularTags();

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px]  flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300  max-xl:hidden dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {
            // @ts-ignore
            hotQuestions.map((item) => (
              <Link
                href={`/question/${item._id}`}
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
            ))
          }
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
                totalQuestions={tag.numberOfQuestions}
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
