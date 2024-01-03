import EmailForm from "@/components/Form";
import Image from "next/image";

const page = () => {
  return (
    <section className="md:bg-charcoal_gray h-screen md:pt-20">
      <div className="md:w-[50rem] mx-auto md:px-10 md:py-3 md:flex justify-between gap-8 items-center bg-white rounded-xl">
        <div className="md:hidden mx-auto pb-10 flex justify-center">
          <Image
            src="/illustration-sign-up-mobile.svg"
            alt="Front End Mentor"
            width={400}
            height={284}
          />
        </div>
        <div className="hidden md:block  order-last">
          <Image
            src="/illustration-sign-up-desktop.svg"
            alt="Front End Mentor"
            width={400}
            height={400}
          />
        </div>

        <div className="text-charcoal_gray px-4 py-4">
          <h1 className="font-bold text-dark_slate_gray  text-5xl pb-4">
            Stay updated!
          </h1>
          <p className="font-normal textcharcoal_gray pb-4 ">
            Join 60,000+ product managers receiving monthly updates on:
          </p>

          <div className="flex gap-2 items-start pb-1">
            <Image
              src="/icon-list.svg"
              height={20}
              width={20}
              alt="list icon"
            />
            <p className="text-charcoal_gray">
              Product discovery and building what matters
            </p>
          </div>
          <div className="text-charcoal_gray flex gap-2 items-start pb-1">
            <Image
              src="/icon-list.svg"
              height={20}
              width={20}
              alt="list icon"
            />
            <p>Measuring to ensure updates are a success</p>
          </div>
          <div className="text-charcoal_gray flex gap-2 items-start pb-8">
            <Image
              src="/icon-list.svg"
              height={20}
              width={20}
              alt="list icon"
            />
            <p>And much more!</p>
          </div>

          <EmailForm />
        </div>
      </div>
    </section>
  );
};

export default page;
