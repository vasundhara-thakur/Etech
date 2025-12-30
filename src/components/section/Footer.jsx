import React from "react";

const Footer = () => {
  return (
    <section className=" mx-auto px-4 mt-10 p-10 gap-12 w-full text-[var(--text)] bg-gradient-to-br from-[var(--gradient-start)] via-[var(--gradient-middle)] to-[var(--accent-pink)]">
      <div  className="flex flex-col lg:flex-row items-start px-5 justify-between">
        <div className="mb-4">
        <h1 className="text-2xl font-semibold">Etech.</h1>
        <p className="max-w-sm">
          Empowering learners worldwide with high-quality online courses, expert
          instructors, and flexible learning opportunities to build skills for
          the future.
        </p>
      </div>
        <div className="mb-4">
        <h2 className="text-2xl font-semibold">Company</h2>
        <p>About Us</p>
        <p>Sevice</p>
        <p>Community</p>
        <p>Testimonials</p>
      </div>
       <div className="mb-4">
        <h2 className="text-2xl font-semibold">Support</h2>
        <p>Help Center</p>
        <p>Tweet Us</p>
        <p>Webinar</p>
        <p>Feedback</p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p>+1(555)123-4567</p>
        <p>etechinfo@gmail.com</p>
        <div className="flex items-center gap-4 text-lg">
          <h3>
            <i class="ri-facebook-circle-fill"></i>
          </h3>
          <h3>
            <i class="ri-twitter-line"></i>
          </h3>
          <h3>
            <i class="ri-instagram-line"></i>
          </h3>
        </div>
      </div>
      </div>
      <hr className="w-full" />
      <div className="text-[12px] my-4 text-center">
        <p>Copyright 2026 Etech. All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;
