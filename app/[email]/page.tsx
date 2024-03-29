import DismissButton from "@/components/DismissButton";

import Image from "next/image";

interface Emailprops {
  params: {
    email: string;
  };
}

const SuccessPage = ({ params }: Emailprops) => {
  const email = params.email.replace("%40", "@");

  return (
    <section className="md:bg-charcoal_gray h-screen md:pt-20 ">
      <div className="hidden md:block bg-white w-[25rem] p-16 rounded-3xl mx-auto">
        <div>
          <Image
            className="pb-8"
            src="/icon-list.svg"
            height={60}
            width={60}
            alt="list icon"
          />
          <h1 className="font-bold text-5xl text-dark_slate_gray pb-4">
            Thanks for subscribing!
          </h1>
          <p className="pb-6 text-charcoal_gray">
            A confirmation email has been sent to{" "}
            <span className="font-bold">{email}.</span>
            Please open it and click the button inside to confirm your
            subscription.
          </p>
          <DismissButton />
        </div>
      </div>
      <div className="md:hidden bg-white w-[90%] h-[90%] mx-auto flex flex-col justify-between mt-10">
        <div className="">
          <Image
            className="pb-8"
            src="/icon-list.svg"
            height={60}
            width={60}
            alt="list icon"
          />
          <h1 className="text-dark_slate_gray font-bold text-4xl pb-4">
            Thanks for subscribing!
          </h1>
          <p className="text-charcoal_gray">
            A confirmation email has been sent to{" "}
            <span className="font-bold">{email}.</span>
            Please open it and click the button inside to confirm your
            subscription.
          </p>
        </div>
        <DismissButton />
      </div>
    </section>
  );
};

export default SuccessPage;
