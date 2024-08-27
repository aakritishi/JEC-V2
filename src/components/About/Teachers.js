import React from 'react'
import teacher from '../images/jec-teachers.jpg';

export default function Teachers() {
    return (
        <div className='sm:mx-4 md:mx-12 lg:mx-24 xl:mx-32 mb-5 w-[90%] mx-auto' >
            <section className='mt-8 mb-12'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl text-red-600 font-semibold text-center transition-all duration-500 hover:text-red-800'>
                    JEC'S FACULTY
                </h1>
                <div className='mt-6 md:mt-10'>
                    <div className='flex flex-col md:flex-row items-center justify-between'>
                        <p className='text-base md:text-lg lg:text-xl font-serif text-gray-800 leading-relaxed'>
                            The teachers at Janakpur Engineering College are instrumental in shaping the future of engineering through their unwavering dedication and expertise. Their commitment to innovative teaching methods and personalized mentorship creates a dynamic learning environment that inspires and motivates students. By blending academic rigor with real-world applications, these educators not only impart valuable knowledge but also foster the holistic development of their students. Their contributions are pivotal in guiding students towards successful careers and making a lasting impact on the field of engineering.
                        </p>
                        <img src={teacher} className='mt-6 md:mt-0 md:ml-6 h-[300px] w-full md:w-1/2 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105' alt="Teachers" />
                    </div>
                </div>
            </section>

            <section className='my-16 '>
                <h1 className='text-3xl md:text-4xl lg:text-5xl text-red-600 font-semibold text-center transition-all duration-500 hover:text-red-800'>
                    BCE'S TEACHERS
                </h1>
                <div className='mt-12'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {Array(8).fill().map((_, index) => (
                            <div className='max-w-sm mx-auto' key={index}>
                                <div className="card rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105">
                                    <img src="https://via.placeholder.com/150" className="rounded-t-lg transition-transform duration-500 transform hover:scale-110" style={{ height: "200px", objectFit: "cover", width: '100%' }} alt="Teacher" />
                                    <div className="p-4">
                                        <h5 className="text-xl font-semibold text-blue-900 transition-all duration-300 hover:text-blue-700">
                                            TEACHER'S NAME
                                        </h5>
                                        <p className="text-sm font-medium text-gray-600">FACULTY:</p>
                                        <h1 className="text-sm font-medium">SUBJECT:</h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            
            <section className='my-16 '>
                <h1 className='text-3xl md:text-4xl lg:text-5xl text-red-600 font-semibold text-center transition-all duration-500 hover:text-red-800'>
                    BCT'S TEACHERS
                </h1>
                <div className='mt-12'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {Array(8).fill().map((_, index) => (
                            <div className='max-w-sm mx-auto' key={index}>
                                <div className="card rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105">
                                    <img src="https://via.placeholder.com/150" className="rounded-t-lg transition-transform duration-500 transform hover:scale-110" style={{ height: "200px", objectFit: "cover", width: '100%' }} alt="Teacher" />
                                    <div className="p-4">
                                        <h5 className="text-xl font-semibold text-blue-900 transition-all duration-300 hover:text-blue-700">
                                            TEACHER'S NAME
                                        </h5>
                                        <p className="text-sm font-medium text-gray-600">FACULTY:</p>
                                        <h1 className="text-sm font-medium">SUBJECT:</h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            
            <section className='my-16 '>
                <h1 className='text-3xl md:text-4xl lg:text-5xl text-red-600 font-semibold text-center transition-all duration-500 hover:text-red-800'>
                    BEI'S TEACHERS
                </h1>
                <div className='mt-12'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {Array(8).fill().map((_, index) => (
                            <div className='max-w-sm mx-auto' key={index}>
                                <div className="card rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105">
                                    <img src="https://via.placeholder.com/150" className="rounded-t-lg transition-transform duration-500 transform hover:scale-110" style={{ height: "200px", objectFit: "cover", width: '100%' }} alt="Teacher" />
                                    <div className="p-4">
                                        <h5 className="text-xl font-semibold text-blue-900 transition-all duration-300 hover:text-blue-700">
                                            TEACHER'S NAME
                                        </h5>
                                        <p className="text-sm font-medium text-gray-600">FACULTY:</p>
                                        <h1 className="text-sm font-medium">SUBJECT:</h1>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
