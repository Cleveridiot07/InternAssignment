import React from 'react';

const AcademicCurriculum = () => {
  return (
    <div className="text-foreground">
      <header className=" py-8 px-4 md:px-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Academic Curriculum</h1>
          <p className="text-lg mt-2">Comprehensive overview</p>
        </div>
      </header>
      <main className="py-12 px-4 md:px-6">
        <div className="container mx-auto grid gap-12">
          {/* Primary Level */}
          <section>
            <h2 className="text-2xl font-bold">Primary Level</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {[
                { title: 'Mathematics', description: 'Comprehensive curriculum covering arithmetic, algebra, geometry, and problem-solving skills.' },
                { title: 'English', description: 'Focuses on developing proficiency in reading, writing, speaking, and listening.' },
                { title: 'Science', description: 'Explores the fundamental concepts of physics, chemistry, and biology through hands-on experiments.' },
                { title: 'Social Studies', description: 'Covers history, geography, civics, and economics to develop an understanding of the world.' },
                { title: 'Arts and Crafts', description: 'Encourages creativity and self-expression through various art forms and hands-on projects.' },
                { title: 'Physical Education', description: 'Promotes physical fitness, teamwork, and healthy lifestyle habits through sports and activities.' },
              ].map((course, index) => (
                <div key={index} className="rounded-sm border bg-card text-card-foreground shadow-md" data-v0-t="card">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="whitespace-nowrap text-primary text-2xl font-semibold leading-none tracking-tight">{course.title}</h3>
                  </div>
                  <div className="p-6 text-muted-dark">
                    <p>{course.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Secondary Level */}
          <section>
            <h2 className="text-2xl font-bold">Secondary Level</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {[
                { title: 'Mathematics', description: 'Covers advanced topics in algebra, geometry, and calculus.' },
                { title: 'English', description: 'Focuses on literary analysis, academic writing, and communication skills.' },
                { title: 'Science', description: 'Explores physics, chemistry, biology, and environmental science in-depth.' },
                { title: 'Social Studies', description: 'Covers world history, geography, economics, and political science.' },
                { title: 'Computer Science', description: 'Introduces programming, software development, and digital literacy.' },
                { title: 'Arts and Humanities', description: 'Offers courses in visual arts, music, drama, and cultural studies.' },
              ].map((course, index) => (
                <div key={index} className="rounded-sm border bg-card text-card-foreground shadow-md" data-v0-t="card">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="whitespace-nowrap text-primary text-2xl font-semibold leading-none tracking-tight">{course.title}</h3>
                  </div>
                  <div className="p-6 text-muted-dark">
                    <p>{course.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Senior Secondary Level */}
          <section>
            <h2 className="text-2xl font-bold">Senior Secondary Level</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {[
                { title: 'Mathematics', description: 'Advanced topics in calculus, linear algebra, and probability/statistics.' },
                { title: 'Physics', description: 'Covers mechanics, electromagnetism, thermodynamics, and modern physics.' },
                { title: 'Chemistry', description: 'Explores organic, inorganic, and physical chemistry.' },
                { title: 'Biology', description: 'Covers cell biology, genetics, ecology, and human physiology.' },
                { title: 'Economics', description: 'Examines microeconomics, macroeconomics, and international trade.' },
                { title: 'Computer Science', description: 'Covers advanced programming, algorithms, and data structures.' },
              ].map((course, index) => (
                <div key={index} className="rounded-sm border bg-card text-card-foreground shadow-md" data-v0-t="card">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="whitespace-nowrap text-primary text-2xl font-semibold leading-none tracking-tight">{course.title}</h3>
                  </div>
                  <div className="p-6 text-muted-dark">
                    <p>{course.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* Educational Resources */}
          <section>
            <h2 className="text-2xl font-bold">Educational Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {[
                { title: 'Digital Classrooms', description: 'Interactive and engaging learning environments.' },
                { title: 'Online Learning Platforms', description: 'Access to educational videos, virtual simulations, and interactive learning modules.' },
                { title: 'Library and Research Facilities', description: 'Extensive collection of books, journals, and online resources for research and study.' },
                { title: 'Extracurricular Activities', description: 'Opportunities for sports, clubs, community service, and personal development.' },
                { title: 'Career Counseling', description: 'Guidance on academic and career choices, college applications, and job opportunities.' },
                { title: 'Student Support Services', description: 'Counseling, mentoring, and assistance for students with special needs or academic challenges.' },
              ].map((resource, index) => (
                <div key={index} className="rounded-sm border bg-card text-card-foreground shadow-md" data-v0-t="card">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="whitespace-nowrap text-primary text-2xl font-semibold leading-none tracking-tight">{resource.title}</h3>
                  </div>
                  <div className="p-6 text-muted-dark">
                    <p>{resource.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AcademicCurriculum;
