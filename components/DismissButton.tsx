"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const DismissButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <Button
      onClick={handleClick}
      className="w-full p-6 bg-dark_slate_gray hover:bg-tomato"
    >
      Dismiss Message
    </Button>
  );
};

export default DismissButton;
