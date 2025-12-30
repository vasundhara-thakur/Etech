import React from "react";

const Ribbon = () => {
  return (
    <section className="w-full mb-10 py-4 bg-gradient-to-br from-[var(--gradient-start)] via-[var(--gradient-middle)] to-[var(--accent-pink)]">
      <div
        className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-10 text-sm sm:text-base lg:text-2xl text-[var(--accent-lavender)]">
        <h2>duolingo</h2>

        <h2 className="flex items-center gap-2">
          <i className="ri-robot-2-fill"></i> magic leap
        </h2>

        <h2 className="flex items-center gap-2">
          <i className="ri-microsoft-fill"></i> Microsoft
        </h2>

        <h2 className="flex items-center gap-2">
          <i className="ri-umbrella-fill"></i> Codecov
        </h2>

        <h2 className="flex items-center gap-2">
          <i className="ri-message-3-fill"></i> User Testing
        </h2>
      </div>
    </section>
  );
};

export default Ribbon;
