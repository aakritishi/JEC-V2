import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import video from '../media/images/jec.mp4';

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* Adjust height to cover the full viewport height */
  object-fit: cover;
  z-index: -1;
`;

const ContentWrapper = styled.div`
  position: relative;
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center; /* Center text inside the wrapper */
`;

export const IntroductionSection = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token); // If token exists, user is logged in
  }, []);

  return (
    <>
      <header>
        <VideoBackground autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </VideoBackground>
        <ContentWrapper>
          <div className="w-full md:w-3/4 lg:w-1/2 p-4">
            <h1 className="text-3xl md:text-4xl font-semibold" style={{ fontFamily: "'Merriweather', serif" }}>
              JANAKPUR ENGINEERING COLLEGE
            </h1>
            <p className="text-lg mt-4 mb-6">
              Janakpur Engineering is a leading research university pushing boundaries and frontiers to brighten the future of the students.
            </p>
            {isLoggedIn ? (
              <Link to='/onlineapply'>
                <button className="px-3 py-2 text-xl font-semibold hover:bg-blue-500 hover:text-white rounded-lg border border-black">
                  Apply Online
                </button>
              </Link>
            ) : (
              <Link to='/login'>
                <button className="px-3 py-2 text-xl font-semibold hover:bg-blue-500 hover:text-white rounded-lg border border-black">
                  Login
                </button>
              </Link>
            )}
          </div>
        </ContentWrapper>
      </header>
    </>
  );
};
