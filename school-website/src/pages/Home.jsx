import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Carousel from '../components/Carousel';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-screen p-3 flex items-center justify-center">
      <main className="flex-1">
        <section className="bg-muted py-12 md:py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Welcome to Springdale Public School</h2>
                <p className="text-muted-light">
                  Springdale Public School is a leading educational institution that provides a well-rounded learning
                  experience for students from preschool to 12th grade. Our dedicated faculty and state-of-the-art
                  facilities ensure that each student reaches their full potential.
                </p>
              </div>
              <div>
                <Carousel />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-3 md:py-5 flex items-center justify-center">
        <Link to="/gallery" className="mt-4 inline-block bg-accent text-white font-semibold py-2 px-4 rounded transition-colors hover:bg-primary-dark">
                  Visit Gallery
        </Link>
        </section>
        
        <section className="py-12 md:py-20">
          <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <a className="bg-card p-6 rounded-lg hover:bg-card/90 transition-colors" href="#" rel="ugc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 mb-4 text-primary"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              <h3 className="text-lg font-medium mb-2 text-primary">Upcoming Events</h3>
              <p className="text-muted-dark">Check out our upcoming events and activities.</p>
            </a>
            <a className="bg-card p-6 rounded-lg hover:bg-card/90 transition-colors" href="#" rel="ugc">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8 mb-4 text-primary"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
              </svg>
              <h3 className="text-lg font-medium mb-2 text-primary">Academic Programs</h3>
              <p className="text-muted-dark">Explore our wide range of academic programs.</p>
            </a>
            <a className="bg-card p-6 rounded-lg hover:bg-card/90 transition-colors" href="#" rel="ugc">
              <svg className="h-10 w-10 p-1 text-gray-100" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
              </svg>
              <h3 className="text-lg font-medium mb-2 text-primary">Admissions</h3>
              <p className="text-muted-dark">Join our school community. Learn about our admission process.</p>
            </a>
            <a className="bg-card p-6 rounded-lg hover:bg-card/90 transition-colors" href="#" rel="ugc">
              <svg className="h-10 w-10 p-1 text-gray-100" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                <line x1="15" y1="9" x2="20" y2="4" />
                <polyline points="15 5 15 9 19 9" />
              </svg>
              <h3 className="text-lg font-medium mb-2 text-primary">Contact Us</h3>
              <p className="text-muted-dark">Get in touch with us for more information.</p>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
