import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();

  return (
    <div className="flex justify-center items-center p-5 text-4xl text-black bg-orange-50 h-[200px] w-[200px]">
      <h1>User: {userid}</h1>
    </div>
  );
}

export default User;
