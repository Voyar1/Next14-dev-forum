import { getUserInfo } from "@/lib/actions/user.action";
import { URLProps } from "@/types";
import Image from "next/image";
import React from "react";

const Page = async ({ params, searchParams }: URLProps) => {
  const userInfo = await getUserInfo({ userId: params.id });

  return (
    <>
      <div className="flex flex-col-reverse items-start justify-between sm:flex-row">
        <div className="flex flex-col items-start gap-4 lg:flex-row">
          <Image
            src={userInfo?.user.picture}
            alt="profile picture"
            width={140}
            height={140}
            className="rounded-full object-cover"
          />
          <div className="mt-3">
            <h2>{userInfo.user.name}</h2>
            <p>@{userInfo.user.username}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
