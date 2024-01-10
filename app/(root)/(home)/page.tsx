import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import LocalSearch from "@/components/shared/LocalSearch";
import NoResult from "@/components/shared/NoResult";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constans/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1", // Change to string
    title:
      "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
    tags: [
      { _id: "1", name: "javascript" }, // Change _id to string
      { _id: "2", name: "python" }, // Change _id to string
    ],
    author: {
      _id: "3", // Change to string
      name: "John Doe",
      picture: "url/to/picture", // Add a placeholder picture URL
    },
    upvotes: 10,
    views: 100,
    answers: [], // Change to an empty array of objects or specify the type of answers
    createdAt: new Date("2021-09-01T12:00:00.000Z"), // Use the Date object
  },
  {
    _id: "2", // Change to string
    title: "How to center a div",
    tags: [
      { _id: "3", name: "javascript" }, // Change _id to string
      { _id: "4", name: "python" }, // Change _id to string
    ],
    author: {
      _id: "5", // Change to string
      name: "John Doe",
      picture: "url/to/picture", // Add a placeholder picture URL
    },
    upvotes: 10,
    views: 100,
    answers: [], // Change to an empty array of objects or specify the type of answers
    createdAt: new Date("2024-01-10T20:36:00.000Z"), // Use the Date object
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row">
        <h1 className="h1-bold text-dark100_light900 sm:items-center">
          All questions
        </h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing others learn from. Get
          involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
