import React from "react";
import { InfiniteMovingCards } from "./ui/infinitMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20 text-white " id="projects">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied Clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10 ">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="w-full flex flex-wrap gap-4 items-center justify-center md:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex flex-col md:max-w-80 max-w-32 gap-4">
              <img src={img} alt={name} className="md:w-24 w-16" />
              <p className="text-2xl text-center ">{nameImg}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
