import React, { useState, useEffect } from 'react';
import axios from 'axios';
import teacherImagePlaceholder from '../images/jec-teachers.jpg';

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await axios.get('https://jec.edu.np/api/teachers/', {
            headers: { Authorization: `Token ${token}` },
          });
        setTeachers(response.data);
      } catch (error) {
        console.error("Error fetching the teachers data", error);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div className='sm:mx-4 md:mx-12 lg:mx-24 xl:mx-32 mb-5 w-[90%] mx-auto'>
      <section className='mt-8 mb-12'>
        <h1 className='text-3xl font-semibold text-center text-red-600 transition-all duration-500 md:text-4xl lg:text-5xl hover:text-red-800'>
          JEC'S FACULTY
        </h1>
        <div className='mt-6 md:mt-10'>
          <div className='flex flex-col items-center justify-between md:flex-row'>
            <p className='font-serif text-base leading-relaxed text-gray-800 md:text-lg lg:text-xl'>
              The teachers at Janakpur Engineering College are instrumental in shaping the future of engineering...
            </p>
            <img src={teacherImagePlaceholder} className='mt-6 md:mt-0 md:ml-6 h-[300px] w-full md:w-1/2 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105' alt="Teachers" />
          </div>
        </div>
      </section>

      <section className='my-16'>
        <h1 className='text-3xl font-semibold text-center text-red-600 transition-all duration-500 md:text-4xl lg:text-5xl hover:text-red-800'>
          Our Teachers
        </h1>
        <div className='mt-12'>
          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {teachers.length > 0 ? (
              teachers.map((teacher, index) => (
                <div className='flex justify-center' key={index}>
                  <div className="w-64 transition-all duration-500 bg-white rounded-lg shadow-lg card hover:shadow-2xl hover:scale-105 h-80">
                    <img 
                      src={teacher.photo || "https://via.placeholder.com/150"} 
                      className="object-cover w-full h-48 rounded-t-lg" 
                      alt="Teacher" 
                    />
                    <div className="p-4">
                      <h5 className="text-xl font-semibold text-blue-900 transition-all duration-300 hover:text-blue-700">
                        {teacher.name}
                      </h5>
                      <p className="text-sm font-medium text-gray-600">FACULTY: {teacher.faculty}</p>
                      <h1 className="text-sm font-medium">SUBJECT: {teacher.subject}</h1>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No teachers available.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
