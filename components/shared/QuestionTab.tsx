import { SearchParamsProps } from "@/types";
import React from "react";

interface Props extends SearchParamsProps {
  userId: string;
  clerkId?: string;
}

const QuestionTab = async ({ searchParams, userId, clerkId }: Props) => {
  return <div>QuestionTab</div>;
};

export default QuestionTab;
