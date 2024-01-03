"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Emailprops {
  params: {
    email: string;
  };
}

const SuccessPage = ({ params }: Emailprops) => {
  const email = params.email.replace("%40", "@");
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <section className="w-[90%] mx-auto mt-10">
      <div className="mb-44">
        <Image
          className="pb-8"
          src="/icon-list.svg"
          height={60}
          width={60}
          alt="list icon"
        />
        <h1 className="font-bold text-4xl pb-4">Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to{" "}
          <span className="font-bold">{email}.</span>
          Please open it and click the button inside to confirm your
          subscription.
        </p>
      </div>

      <Button onClick={handleClick} className="w-full">
        Dismiss Message
      </Button>
    </section>
  );
};

export default SuccessPage;
