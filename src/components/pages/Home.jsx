import React from 'react';
import { ArrowRight } from 'lucide-react';
import img1 from '../img/profile1.png';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-gray-800 to-black min-h-screen flex items-center p-8">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section - Introduction without Card */}
          <div className="space-y-8 text-white">
            <h1 className="text-6xl font-extrabold">Hi, I'm Pravesh</h1>
        <h2 className="text-4xl font-semibold text-blue-500 mb-4">
          <TypeAnimation
            sequence={[
              'Frontend Developer',
              1500,
              'Backend Developer',
              1500,
              'MERN Stack Developer',
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h2>
            <p className="text-gray-400 leading-relaxed text-3xl mb-3">
              Passionate about creating innovative and efficient web applications.
              My expertise lies in building responsive, scalable solutions using modern technologies.
            </p>
            <p className='mt-10 text-green-500 font-bold '>Available For Freelancing / job</p>

            <a href="https://drive.google.com/file/d/1xIgSrXq-xSo_7tK2F-T6s5Qc6ankps14/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg mt-6 hover:bg-blue-700 transition-transform transform hover:scale-110 flex items-center group shadow-lg">
                <span className="font-semibold">Download CV</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
              </button>
            </a>
          </div>

          {/* Right Section - Profile Image */}
          <div className="flex justify-center relative">
            {/* Gradient and Image with Background Removal Effect */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-500 absolute -inset-2 rounded-full opacity-50 blur-3xl w-[38rem] h-[38rem]"></div>
            <div className="relative z-10 w-[34rem] h-[34rem] overflow-hidden rounded-full shadow-2xl">
              <img
                src={img1}
                alt="Professional Profile"
                className="w-full h-full object-cover scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
