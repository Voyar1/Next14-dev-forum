"use client";
import React from "react";

interface Params {
  clerkId: string;
  user: string;
}

const Profile = ({ clerkId, user }: Params) => {
  const parsedUser = JSON.parse(user);
  return <div>Profile</div>;
};

export default Profile;
