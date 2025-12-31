import React from "react";
import Button from "../subcomponent/Button";
import courseImg from "../../assets/online.webp";
import degicon from "../../assets/degree.png";
import courseicon from "../../assets/course.png";
import stuicon from "../../assets/student.png";
import videoicon from "../../assets/video.png";

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
              src={courseImg}
              alt="course-img"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold mt-2 mb-2 md:text-xl lg:text-3xl">
              <span className="text-[var(--accent-pink)]">Benefits</span> From
              Our Online Learning
            </h1>
            <div className="flex items-center gap-1/2">
              <img className="w-11" src={degicon} alt="icons" />
              <div>
                <h2 className="ml-8 text-xl font-semibold">Online Degrees</h2>
                <p className="ml-8 mb-2 text-[var(--text-body)]">
                  Earn accredited degrees from the comfort of your home.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1/2">
              <img className="w-11" src={courseicon} alt="icons" />
              <div>
                <h2 className="ml-8 text-xl font-semibold">Short Courses</h2>
                <p className="ml-8 mb-2 text-[var(--text-body)]">
                  Learn new skills in a short amount of time.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1/2">
              <img className="w-12" src={stuicon} alt="icons" />
              <div>
                <h2 className="ml-8 text-xl font-semibold">
                  Training From Experts
                </h2>
                <p className="ml-8 mb-2 text-[var(--text-body)]">
                  Learn from industry professionals and experts.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1/2">
              <img className="w-12" src={videoicon} alt="icons" />
              <div>
                <h2 className="ml-8 text-xl font-semibold">
                  1.5k+ Video Courses
                </h2>
                <p className="ml-8 mb-2 text-[var(--text-body)]">
                  High-quality video lessons for better learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
