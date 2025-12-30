import React from "react";

const Card = (props) => {
  return (
    <section className="w-80 h-100 bg-[var(--text)] p-2 rounded-md mt-8">
      <div>
        <img className="rounded-md mb-2" src={props.img} alt="course-img" />
      </div>
      <div>
        <div className="flex items-center justify-between text-sm">
          <p className="bg-[var(--accent-lavender)] px-4 py-1 rounded-sm">
            <i class="text-[var(--gradient-start)] mr-1 text-sm ri-circle-fill"></i>{props.name}
          </p>
          <p className="bg-[var(--primary-purple-dark)] px-2 py-1 rounded-sm">
            <i class="text-yellow-400 ri-star-fill"></i>{props.rating}
          </p>
        </div>
        <h2 className="text-3xl font-semibold mt-4 mb-4">{props.heading}</h2>
        <div className="flex items-center gap-10 text-sm mb-2">
          <p><i class="text-[var(--gradient-start)] mr-2 ri-book-open-line"></i>{props.classes}</p>
          <p><i class="text-[var(--gradient-start)] mr-2 ri-user-line"></i>{props.students}</p>
        </div>
        <hr className="text-[var(--text-muted)]" />
      </div>
      <div>
        <h2 className="text-xl font-semibold mt-4 mb-4">{props.fee}</h2>
      </div>
    </section>
  );
};

export default Card;
