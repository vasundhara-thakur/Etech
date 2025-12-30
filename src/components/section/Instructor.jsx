import React from 'react'
import Button from '../subcomponent/Button'
import instImg from "../../assets/instructor.webp";

const Instructor = () => {
  return (
    <section>
      <div className="max-w-7xl pb-10 mx-auto flex flex-col lg:flex-row items-center justify-between mt-10 gap-12 w-full">
        {/* Text Section */}
        <div className="flex flex-col items-start justify-center gap-6 p-5 text-center lg:text-left">
          <h1 className="max-w-xl text-xl lg:text-4xl font-semibold">
            If You Are A Certified Teacher Then <span className="text-[var(--accent-pink)]">Become An Instructor</span>
          </h1>

          <div className="max-w-xl text-[12px] text-[var(--text-muted)] lg:text-xl mx-auto lg:mx-0">
            <p>
              Unlock the opportunity to inspire and educate by joining our team of instructors. If you're a certified teacher, elevate your impact and share your expertise with learners worldwide.
            </p>
          </div>

            <h2 className="max-w-xl text-xl lg:text-4xl font-semibold">Enjoy Many Perks</h2>
            <div className='flex gap-2.5 whitespace-nowrap'>
              <div className='text-left text-[12px] lg:text-lg'>
                <p><i class="text-[var(--gradient-start)] mr-1 ri-circle-fill"></i>Global Exposure</p>
                <p><i class="text-[var(--gradient-start)] mr-1 ri-circle-fill"></i>Flexible Schedule</p>
                <p><i class="text-[var(--gradient-start)] mr-1 ri-circle-fill"></i>Innovative Teaching Tools</p>
              </div>

              <div className='text-left text-[12px] lg:text-lg'>
                <p><i class="text-[var(--gradient-start)] mr-1 ri-circle-fill"></i>Competitive Earnings</p>
                <p><i class="text-[var(--gradient-start)] mr-1 ri-circle-fill"></i>Professional Development</p>
                <p><i class="text-[var(--gradient-start)] mr-1 ri-circle-fill"></i>Networking Opportunities</p>
              </div>
            </div>
           <Button text="Become An Instructor" />
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-auto flex justify-center">
          <img
            className="w-64 rounded-md sm:w-80 lg:w-[500px]"
            src={instImg}
            alt="instructor-img"
          />
        </div>
      </div>

    </section>
  )
}

export default Instructor
