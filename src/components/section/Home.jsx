import React from "react";
import Button from "../subcomponent/Button";
import heroImg from "../../assets/hero.webp";
import Ribbon from "../subcomponent/Ribbon";

const Home = (props) => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between mt-10 gap-12 w-full">
        {/* Text Section */}
        <div className="flex flex-col justify-center gap-6 text-center lg:text-left">
          <h1 className="max-w-xl text-3xl sm:text-4xl lg:text-6xl font-semibold">
            Develop your skills in a new and unique way
          </h1>

          <div className="max-w-xl text-base sm:text-lg lg:text-2xl mx-auto lg:mx-0">
            <p>
              Explore a transformative approach to skill development on our
              online learning platform. Uncover a new realm of learning
              experiences and elevate your expertise.
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6">
            <Button text="Enroll Now" />
            <h2 className="underline cursor-pointer">Watch Demo</h2>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-auto flex justify-center">
          <img
            className="w-64 sm:w-80 lg:w-[500px]"
            src={heroImg}
            alt="hero-img"
          />
        </div>
      </div>

      <Ribbon />
    </section>
  );
};

export default Home;
