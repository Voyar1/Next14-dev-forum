import Question from "@/components/forms/Question";
import React from "react";

const Page = () => {
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Edit Question</h1>
      <div className="mt-9">
        <Question type="edit" mongoUserId="" questionDetails="" />
      </div>
    </>
  );
};

export default Page;
