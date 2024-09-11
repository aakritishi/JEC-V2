import React, { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import students from "../images/jec-students.jpg";
import about from "../images/jec-about.png";
import leader from "../images/student.png";
import principle from "../images/sagarP.png";
import Chairman from "../images/chairman.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/jec-logo.png";

export default function Introduction() {
  const [countersInView, setCountersInView] = useState({
    students: false,
    professors: false,
    startups: false,
    researchPapers: false,
    researchGrants: false,
    textbooks: false,
    awards: false,
  });

  const countersRef = {
    students: useRef(null),
    professors: useRef(null),
    startups: useRef(null),
    researchPapers: useRef(null),
    researchGrants: useRef(null),
    textbooks: useRef(null),
    awards: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = Object.keys(countersRef).find(
              (refKey) => countersRef[refKey].current === entry.target
            );
            if (key) {
              setCountersInView((prev) => ({ ...prev, [key]: true }));
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.5 } // Adjust as needed
    );

    Object.values(countersRef).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(countersRef).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <>
      <div
        className="container px-4 py-8 mx-auto"
        style={{ fontFamily: "'Merriweather', serif" }}
      >
        <div className="sm:mx-0 md:mx-6 lg:mx-16">
          <div className="my-3">
            <h1 className="text-xl font-semibold leading-relaxed text-justify text-blue-600 transition-transform transform md:text-2xl lg:text-3xl">
              We are a research institution focused on providing massive <br />
              opportunities through value education. University is one of the
              <br />
              world’s preeminent public universities.
            </h1>
          </div>
          <br />
          <div className="flex flex-col gap-6 md:flex-row md:gap-12">
            <div className="w-full text-justify md:w-7/12">
              <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                Our impact on individuals, our region, and the world is profound
                whether we are launching young people into a boundless future or
                confronting the grand challenges of our time through undaunted
                research and scholarship. We turn ideas into impact and
                transform lives and our world.
                <br />
                <br />
                In a sense, University’s greatest invention may be itself an
                unusual concentration of unusual talent, forever reinventing
                itself on a mission to make a better world. That invention is
                powered by individuals: a global community of educators,
                researchers, and learners with different perspectives but a
                shared commitment to serving humanity. Come, join us on the
                journey.
              </p>
            </div>
            <div className="w-full md:w-5/12">
              <img
                src={students}
                className="rounded-lg border-2 border-blue-500 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out h-auto w-full md:w-[400px] lg:w-[500px] transform hover:scale-105"
                alt="Students"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-24 mb-8">
        <div
          className="w-full max-w-[1100px] h-[380px] rounded-lg relative overflow-hidden"
          style={{
            backgroundImage: `url(${about})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      <div className="container mb-12">
        <div className="flex flex-col items-center justify-center text-center md:flex-row">
          <div
            className="p-4 transition-transform transform md:w-1/3 hover:scale-105"
            ref={countersRef.students}
          >
            <h1 className="text-4xl font-bold text-blue-600">
              {countersInView.students ? (
                <CountUp end={1000} duration={2} />
              ) : (
                "0"
              )}
            </h1>
            <p className="mt-2 text-lg text-gray-700">STUDENTS</p>
          </div>
          <div
            className="p-4 transition-transform transform md:w-1/3 hover:scale-105"
            ref={countersRef.professors}
          >
            <h1 className="text-4xl font-bold text-blue-600">
              {countersInView.professors ? (
                <CountUp end={30} duration={2} />
              ) : (
                "0"
              )}
            </h1>
            <p className="mt-2 text-lg text-gray-700">PROFESSORS</p>
          </div>
          {/* <div className='p-4 transition-transform transform md:w-1/3 hover:scale-105' ref={countersRef.startups}>
            <h1 className="text-4xl font-bold text-blue-600">
              {countersInView.startups ? <CountUp end={50} duration={2} /> : '0'}
            </h1>
            <p className="mt-2 text-lg text-gray-700">STARTUPS</p>
          </div> */}
        </div>
      </div>

      <div className="container p-4 mx-auto">
        
        {/* Chairperson Section */}
        <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center">
          {/* Image Section */}
          <div className="p-4 lg:w-1/2">
            <img
              src={Chairman}
              className="w-full h-full  transition-transform transform rounded-lg shadow-2xl hover:scale-105 hover:shadow-xl md:h-[600px] md:w-[600px]"
              alt="President"
            />
          </div>

          {/* Text Section */}
          <div className="p-4 lg:w-1/2">
            <h1 className="mb-4 text-3xl font-bold text-blue-600 transition-transform transform hover:scale-105">
              Message from Our Chairperson
            </h1>
            <p className="mb-6 text-justify text-gray-950">
            Dear Students, Faculty, and Esteemed Visitors,

It gives me great pleasure to welcome you to Janakpur Engineering Campus (JEC), an esteemed institution affiliated with Tribhuvan University (TU). At JEC, we are committed to delivering high-quality education in engineering, empowering our students to excel in their fields and contribute to the nation's development. We offer undergraduate programs in Bachelor of Civil Engineering (BCE), Bachelor of Computer Engineering (BCT), and Bachelor of Electronics, Communication, and Information Engineering (BEX).
<br/>
With a focus on academic rigor, innovation, and holistic growth, we strive to cultivate an environment where students can thrive and achieve their full potential.
<br/>
Best regards,<br/>
Dr. Arjun Sing<br/>
Chairperson, Janakpur Engineering Campus
</p>
          </div>
        </div>
        {/* Principle Section */}
        <div className="flex flex-col gap-12 mb-12 lg:flex-row lg:items-center">
          {/* Text Section */}
          <div className="p-4 lg:w-1/2">
            <h1 className="mb-4 text-3xl font-bold text-blue-600 transition-transform transform hover:scale-105">
              Message From Our Principal
            </h1>
            <p className="mb-6 text-justify text-gray-950">
            Dear Students, Faculty, and Visitors,

Welcome to Janakpur Engineering Campus (JEC), a prestigious institution affiliated with Tribhuvan University (TU). We are dedicated to providing quality education in engineering, fostering innovation, and nurturing future leaders. At JEC, we offer diverse courses in Bachelor of Civil Engineering (BCE), Bachelor of Computer Engineering (BCT), and Bachelor of Electronics, Communication, and Information Engineering (BEX).
<br/>
Our commitment to excellence extends beyond academics, with a focus on research, practical skills, and overall student development. Together, let’s build a brighter future.
<br/>
Best regards,<br/>
Er. Sagar Shrestha<br/>
Principal, Janakpur Engineering Campus
</p>
          </div>
          
          {/* Image Section */}
          <div className="p-4 lg:w-1/2">
            <img
              src={principle}
              className="w-full h-auto transform rounded-lg shadow-2xl md trawnsition-transform md:h-[500px] md:w-[600px] hover:scale-105 hover:shadow-xl"
              alt="President"
            />
          </div>
        </div>

      </div>



      {/* <div className='container mt-12 mb-12'>
        <h1 className='mb-6 text-3xl font-semibold text-blue-600'>FACULTY</h1>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <div className="card mx-auto transition-transform transform h-[380px] w-[330px] hover:scale-105">
            <img src="..." className="object-cover h-64 card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="text-2xl font-semibold text-blue-600 card-title">Card title</h5>
              <p className="text-gray-700">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="px-4 py-2 mt-4 text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700">LEARN MORE</button>
            </div>
          </div>
          <div className="card mx-auto transition-transform transform h-[380px] w-[330px] hover:scale-105">
            <img src="..." className="object-cover h-64 card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="text-2xl font-semibold text-blue-600 card-title">Card title</h5>
              <p className="text-gray-700">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="px-4 py-2 mt-4 text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700">LEARN MORE</button>
            </div>
          </div>
          <div className="card mx-auto transition-transform transform h-[380px] w-[330px] hover:scale-105">
            <img src="..." className="object-cover h-64 card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="text-2xl font-semibold text-blue-600 card-title">Card title</h5>
              <p className="text-gray-700">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="px-4 py-2 mt-4 text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700">LEARN MORE</button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
