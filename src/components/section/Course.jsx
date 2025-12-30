import React from "react";
import Button from "../subcomponent/Button";

const Course = (props) => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 mt-10 gap-12 w-full">
        <h1 className="text-center text-2xl font-semibold">Search Courses</h1>
        <div className="mt-10 flex lg:flex-row items-center justify-center gap-4">
          <input
            className="w-2/4 rounded-xl text-lg ml-5 px-4 py-2 bg-[var(--text)]"
            type="text"
            placeholder="Search courses"
          />
          <Button text="Search" />
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between">
          <div className="mt-10">
            <img
              className="w-64 rounded-2xl sm:w-80 lg:w-[500px]"
              src="./images/online.webp"
              alt="course-img"
            />
          </div>
          <div className="">
            <h1 className="text-xl font-semibold mt-2 mb-2 md:text-xl lg:text-3xl">
              <span className="text-[var(--accent-pink)]">Benefits</span> From
              Our Online Learning
            </h1>
            <h2 className="ml-8 text-xl font-semibold">Online Degrees</h2>
            <p className="ml-8 mb-2 text-[var(--text-body)]">Earn accredited degrees from the comfort of your home.</p>
            <h2 className="ml-8 text-xl font-semibold">Short Courses</h2>
            <p className="ml-8 mb-2 text-[var(--text-body)]">Learn new skills in a short amount of time.</p>
            <h2 className="ml-8 text-xl font-semibold">Training From Experts</h2>
            <p className="ml-8 mb-2 text-[var(--text-body)]">Learn from industry professionals and experts.</p>
            <h2 className="ml-8 text-xl font-semibold">1.5k+ Video Courses</h2>
            <p className="ml-8 mb-2 text-[var(--text-body)]">High-quality video lessons for better learning.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
