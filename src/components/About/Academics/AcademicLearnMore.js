import React from 'react';
import { Link } from 'react-router-dom';

import people from '../../images/people.png';
import clock from '../../images/clock.png';
import report from '../../images/report.png';

export default function AcademicLearnMore() {
  return (
    <>
      <div className='flex items-center justify-center mt-5 text-center'>
        <div className='w-[380px] h-auto flex text-center items-center justify-center rounded'>
          <h1 className='text-[50px] font-bold text-center'>COURSE <span className='text-red-500'>NAME</span></h1>
        </div>
      </div>

      <div className='ms-9 mt-9'>
        <h1 className='text-[40px] font-bold'>COURSE <span className='text-red-500'>DESCRIPTION</span></h1>
      </div>
      <div className='h-[400px] flex items-center justify-center'>
        <h1>Course description</h1>
      </div>

      <h1 className='text-[40px] font-bold text-center my-4'>COURSE <span className='text-red-500'>FEATURES</span></h1>

      <div className='container font-bold text-[20px]'>
        <div className='row'>
          <div className='flex flex-col items-center justify-center col-12 col-md-4 col-sm-12 col-xs-12'>
            <img className="card-img-top rounded-2xl w-[120px]" src={people} alt="people"/>
            <h1 className='text-[30px] font-bold text-center'>AVAILABLE <span className='text-red-500'>SEATS</span></h1>
            <h1 className='text-[30px] mt-3'>0</h1>
          </div>

          <div className='flex flex-col items-center justify-center col-12 col-md-4 col-sm-12 col-xs-12'>
            <img className="card-img-top rounded-2xl w-[100px]" src={clock} alt="clock"/>
            <h1 className='text-[30px] font-bold text-center mt-3 text-red-500'>DURATION</h1>
            <h1 className='text-[20px] mt-3'>4 YEAR</h1>
          </div>

          <div className='flex flex-col items-center justify-center col-12 col-md-4 col-sm-12 col-xs-12'>
            <img className="card-img-top rounded-2xl w-[100px]" src={report} alt="report"/>
            <h1 className='text-[30px] font-bold text-center mt-3'>MIN <span className='text-red-500'>QUALIFICATION</span></h1>
            <h1 className='text-[20px] mt-3 text-center'>Intermediate Level/40% <br/>in IOE Entrance.</h1>
          </div>
        </div>
      </div>

      <div className='mt-20 ms-9'>
        <h1 className="text-[40px] font-bold">INTROD<span className="text-red-500">UCTION</span></h1>
      </div>
      <div className='h-[400px] flex items-center justify-center'>
        <h1>Course introduction</h1>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-[40px] font-bold text-center mb-6'>COURSE <span className='text-red-500'>BENEFITS</span></h1>
        <ul className='text-[25px] font-bold text-green-500 ms-3'>
          <li>Variety of Career Opportunities and challenging work.</li>
          <li>Benefit Society.</li>
          <li>Professional Environment.</li>
        </ul>
      </div>

      <div className='mt-20 mb-6 text-center ms-9'>
        <h1 className='text-[40px] font-bold'>COURSE <span className='text-red-500'>STRUCTURE</span></h1>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 col-sm-12 col-xs-12'>
            <div className='h-[60px] bg-blue-500 flex items-center justify-center mb-4'>
              <h1 className='text-[30px] font-bold text-center text-white'>FIRST YEAR</h1>
            </div>
            <div className='row'>
              <div className='col-12 col-md-6 col-sm-12 col-xs-12'>
                <h1 className='text-center text-[30px] mb-2'>Semester I<span className='text-[20px] text-center'>-18 credit hours</span></h1>
                <ul className='text-[20px]'>
                  <li><span className='font-bold me-2'>I/I </span>Engineering Mathematics</li>
                  <li><span className='font-bold me-2'>I/I </span>Engineering Drawing</li>
                  <li><span className='font-bold me-2'>I/I </span>Engineering Physics</li>
                  <li><span className='font-bold me-2'>I/I </span>Applied Mechanics</li>
                  <li><span className='font-bold me-2'>I/I </span>Computer Programming</li>
                  <li><span className='font-bold me-2'>I/I </span>Basic Electrical Engineering</li>
                </ul>
              </div>

              <div className='col-12 col-md-6 col-sm-12 col-xs-12'>
                <h1 className='text-center text-[30px] mb-2'>Semester II<span className='text-[20px] text-center'>-18 credit hours</span></h1>
                <ul className='text-[20px]'>
                  <li><span className='font-bold me-2'>I/II </span>Engineering Chemistry</li>
                  <li><span className='font-bold me-2'>I/II </span>Engineering Mathematics</li>
                  <li><span className='font-bold me-2'>I/II </span>Workshop Technology</li>
                  <li><span className='font-bold me-2'>I/II </span>Basic Electronics Engineering</li>
                  <li><span className='font-bold me-2'>I/II </span>Engineering Drawing</li>
                  <li><span className='font-bold me-2'>I/II </span>Fundamentals of Thermodynamics and Heat Transfer</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='col-12 col-md-6 col-sm-12 col-xs-12'>
            <div className='h-[60px] bg-blue-500 flex items-center justify-center mb-4'>
              <h1 className='text-[30px] font-bold text-center text-white'>SECOND YEAR</h1>
            </div>
            <div className='row'>
              <div className='col-12 col-md-6 col-sm-12 col-xs-12'>
                <h1 className='text-center text-[30px] mb-2'>Semester I<span className='text-[20px] text-center'>-18 credit hours</span></h1>
                <ul className='text-[20px]'>
                  <li><span className='font-bold me-2'>II/I </span>Engineering Mathematics</li>
                  <li><span className='font-bold me-2'>II/I </span>Engineering Drawing</li>
                  <li><span className='font-bold me-2'>II/I </span>Engineering Physics</li>
                  <li><span className='font-bold me-2'>II/I </span>Applied Mechanics</li>
                  <li><span className='font-bold me-2'>II/I </span>Computer Programming</li>
                  <li><span className='font-bold me-2'>II/I </span>Basic Electrical Engineering</li>
                </ul>
              </div>

              <div className='col-12 col-md-6 col-sm-12 col-xs-12'>
                <h1 className='text-center text-[30px] mb-2'>Semester II<span className='text-[20px] text-center'>-18 credit hours</span></h1>
                <ul className='text-[20px]'>
                  <li><span className='font-bold me-2'>II/II </span>Engineering Chemistry</li>
                  <li><span className='font-bold me-2'>II/II </span>Engineering Mathematics</li>
                  <li><span className='font-bold me-2'>II/II </span>Workshop Technology</li>
                  <li><span className='font-bold me-2'>II/III </span>Basic Electronics Engineering</li>
                  <li><span className='font-bold me-2'>II/II </span>Engineering Drawing</li>
                  <li><span className='font-bold me-2'>II/II </span>Fundamentals of Thermodynamics and Heat Transfer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container mt-5'>
    <div className='row '>
      <div className='col-12 col-md-6 col-sm-12 col-xs-12'>
        <div className='h-[60px] bg-blue-500 flex items-center justify-center mb-4'>
          <h1 className='text-[30px] font-bold text-center text-white '> THIRD YEAR
            </h1>
        </div>
        <div className='row'>
              <div className='col-12 col-md-6 col-sm-12 col-xs-12' >
                <h1 className='text-center text-[30px] mb-2'>Semester I<span className='text-[20px] text-center'>-18 credit hours</span></h1>
              
              <ul className='text-[20px] '>
                <li><span className='font-bold me-2'>III/I </span>  Engineering Mathematics</li>
                <li><span className='font-bold me-2'>III/I </span>   Engineering Drawing</li>
                <li><span className='font-bold me-2'>III/I </span>   Engineering Physics</li>
                <li><span className='font-bold me-2'>III/I </span> Applied Mechanics</li>
                <li><span className='font-bold me-2'>III/I </span>   Computer Programming</li>
                <li><span className='font-bold me-2'>III/I </span>  Basic Electrical Engineering</li>
              </ul>
              </div>

              <div className='col-12 col-md-6 col-sm-12 col-xs-12' >
                <h1 className='text-center text-[30px] mb-2 '>Semester II<span className='text-[20px] text-center'>-18 credit hours</span></h1>
              
              <ul className='text-[20px] '>
                <li> <span className='font-bold me-2'>III/II </span>Engineering Chemistry</li>
                <li><span className='font-bold me-2'>III/II </span>   Engineering Mathematics</li>
                <li><span className='font-bold me-2'>III/II </span>   Workshop Technology</li>
                <li><span className='font-bold me-2'>III/II </span>  Basic Electronics Engineering</li>
                <li><span className='font-bold me-2'>III/II </span>  Engineering Drawing</li>
                <li><span className='font-bold me-2'>III/II </span>    Fundamentals of Thermodynamics and Heat Transfer</li>
              </ul>
              </div>

              

              
        </div>     
       </div>
       
       <div className='col-12 col-md-6 col-sm-12 col-xs-12'>
        <div className='h-[60px] bg-blue-500 flex items-center justify-center mb-4'>
          <h1 className='text-[30px] font-bold text-center text-white '> FOURTH YEAR
            </h1>
        </div>
        <div className='row'>
              <div className='col-12 col-md-6 col-sm-12 col-xs-12' >
                <h1 className='text-center text-[30px] mb-2'>Semester I<span className='text-[20px] text-center'>-18 credit hours</span></h1>
              
              <ul className='text-[20px] '>
                <li><span className='font-bold me-2'>VI/I </span>  Engineering Mathematics</li>
                <li><span className='font-bold me-2'>VI/I </span>   Engineering Drawing</li>
                <li><span className='font-bold me-2'>VI/I </span>   Engineering Physics</li>
                <li><span className='font-bold me-2'>VI/I </span> Applied Mechanics</li>
                <li><span className='font-bold me-2'>VI/I </span>   Computer Programming</li>
                <li><span className='font-bold me-2'>VI/I </span>  Basic Electrical Engineering</li>
              </ul>
              </div>

              <div className='col-12 col-md-6 col-sm-12 col-xs-12' >
                <h1 className='text-center text-[30px] mb-2 '>Semester II<span className='text-[20px] text-center'>-18 credit hours</span></h1>
              
              <ul className='text-[20px] '>
                <li> <span className='font-bold me-2'>VI/II </span>Engineering Chemistry</li>
                <li><span className='font-bold me-2'>VI/II </span>   Engineering Mathematics</li>
                <li><span className='font-bold me-2'>VI/II </span>   Workshop Technology</li>
                <li><span className='font-bold me-2'>VI/II </span>  Basic Electronics Engineering</li>
                <li><span className='font-bold me-2'>VI/II </span>  Engineering Drawing</li>
                <li><span className='font-bold me-2'>VI/II </span>    Fundamentals of Thermodynamics and Heat Transfer</li>
              </ul>
              </div>

              

              
        </div>     
       </div>

    </div>
   </div>

      <div className='flex items-center justify-center mt-4 mb-4'>
        <Link to="/onlineApply" className="px-4 py-2 text-[30px] text-white bg-blue-500 hover:bg-blue-700 rounded">Apply Now</Link>
      </div>
    </>
  );
}
