import React from "react";
import Card from "../subcomponent/Card";
import webdesign from "../../assets/webdesign.webp";
import coding from "../../assets/coding.webp";
import proto from "../../assets/proto.webp";


const Popcourse = (props) => {
  return (
    <section className=" mx-auto px-4 mt-10 pb-10 gap-12 w-full bg-gradient-to-br from-[var(--gradient-start)] via-[var(--gradient-middle)] to-[var(--accent-pink)]">
      <div className="flex flex-col items-center justify-center text-[var(--text)]">
        <h1 className="text-3xl py-5">Our Popular Courses</h1>
        <p className="text-center max-w-full lg:max-w-3xl mx-auto">
          Technical coding bootcamp course descriptions cater to a specific
          audience: individuals seeking rapid, intensive training to transition
          into tech careers.{" "}
        </p>
      </div>
      <div className="flex items-center flex-col justify-around lg:flex-row md:flex-row">
        <Card
        img={webdesign}
         heading="Web Design & Development"
         name="Web Design"
         rating="4.8"
         classes="25 classes"
         students="1.2k students"
         fee="$560"
         />
        <Card
        img={proto}
         heading="Wireframing & Prototyping"
         name="UI/UX Design"
         rating="4.6"
         classes="8 classes"
         students="980+ students"
         fee="$160"
         />
        <Card
        img={coding}
         heading="Python For Data Science"
         name="Data Science"
         rating="4.8"
         classes="18 classes"
         students="160 students"
         fee="$432"
         />
      </div>
    </section>
  );
};

export default Popcourse;
