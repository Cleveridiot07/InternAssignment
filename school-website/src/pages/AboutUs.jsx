import React from 'react';

const AboutUs = () => {
  return (
    <main className="w-full max-w-5xl mx-auto py-12 px-4 md:px-6">
      <div className="grid gap-8">
        <section>
          <h1 className="text-4xl font-bold">About Springdale Public School</h1>
          <p className="mt-4 text-muted-foreground">
            Springdale Public School is a renowned educational institution that has been serving the community for over
            50 years. Nestled in the heart of the city, the school provides a nurturing and enriching environment for
            students from diverse backgrounds, empowering them to reach their full potential.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Our Mission and Values</h2>
          <div className="mt-4 grid gap-4">
            <article className="flex items-start gap-4">
              <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center text-primary-foreground">
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
                  className="w-5 h-5 text-primary"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Empowering Minds, Shaping Futures</h3>
                <p className="text-muted-foreground">
                  Our mission is to provide a transformative educational experience that empowers students to become
                  confident, critical thinkers and responsible global citizens.
                </p>
              </div>
            </article>
            <article className="flex items-start gap-4">
              <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center text-primary-foreground">
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
                  className="w-5 h-5 text-primary"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Commitment to Excellence</h3>
                <p className="text-muted-foreground">
                  We are dedicated to upholding the highest standards of academic excellence, fostering a culture of
                  continuous improvement and innovation.
                </p>
              </div>
            </article>
            <article className="flex items-start gap-4">
              <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center text-primary-foreground">
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
                  className="w-5 h-5 text-primary"
                  aria-hidden="true"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Nurturing Compassion</h3>
                <p className="text-muted-foreground">
                  We believe in cultivating a caring and inclusive environment that fosters empathy, respect, and a deep
                  appreciation for diversity.
                </p>
              </div>
            </article>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Our Curriculum and Programs</h2>
          <div className="mt-4 grid gap-4">
            <article className="flex items-start gap-4">
              <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center text-primary-foreground">
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
                  className="w-5 h-5 text-primary"
                  aria-hidden="true"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Comprehensive Curriculum</h3>
                <p className="text-muted-foreground">
                  Our curriculum is designed to provide a well-rounded education, covering core academic subjects as
                  well as specialized programs in the arts, sciences, and technology.
                </p>
              </div>
            </article>
            <article className="flex items-start gap-4">
              <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center text-primary-foreground">
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
                  className="w-5 h-5 text-primary"
                  aria-hidden="true"
                >
                  <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.997c.618 0 1.234.236 1.705.707l1.568 1.568c.23.23.555.338.877.289.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02ZM10 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-4 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Extracurricular Activities</h3>
                <p className="text-muted-foreground">
                  We offer a wide range of extracurricular activities, including sports, music, drama, and clubs, to
                  encourage students to explore their interests and develop new skills.
                </p>
              </div>
            </article>
            <article className="flex items-start gap-4">
              <div className="bg-accent rounded-full w-12 h-12 flex items-center justify-center text-primary-foreground">
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
                  className="w-5 h-5 text-primary"
                  aria-hidden="true"
                >
                  <path d="M12 2 3 9h3v11h6v-5h4v5h6V9h3Z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Supportive Learning Environment</h3>
                <p className="text-muted-foreground">
                  Our supportive learning environment includes comprehensive counseling services, learning support, and
                  a range of resources to ensure all students can succeed.
                </p>
              </div>
            </article>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Join Our Community</h2>
          <p className="mt-4 text-muted-foreground">
            Springdale Public School invites you to become a part of our vibrant community. Together, we can help your
            child achieve their dreams and make a positive impact on the world.
          </p>
        </section>
      </div>
    </main>
  );
};

export default AboutUs;
