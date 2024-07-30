import React from 'react';

const Faculty = () => {
  const facultyMembers = [
    {
      name: "John Doe",
      position: "Professor of Computer Science",
      qualifications: "Ph.D. in Computer Science",
      experience: "15 years",
      imgSrc: "/placeholder.svg",
    },
    {
      name: "Jane Smith",
      position: "Associate Professor of Biology",
      qualifications: "Ph.D. in Biology",
      experience: "10 years",
      imgSrc: "/placeholder.svg",
    },
    {
      name: "Michael Johnson",
      position: "Dean of Student Affairs",
      qualifications: "M.Ed. in Educational Leadership",
      experience: "8 years",
      imgSrc: "/placeholder.svg",
    },
    {
      name: "Sarah Lee",
      position: "Assistant Professor of English",
      qualifications: "Ph.D. in English Literature",
      experience: "5 years",
      imgSrc: "/placeholder.svg",
    },
    {
      name: "David Kim",
      position: "Registrar",
      qualifications: "M.A. in Higher Education Administration",
      experience: "12 years",
      imgSrc: "/placeholder.svg",
    },
    {
      name: "Emily Chen",
      position: "Director of Financial Aid",
      qualifications: "",
      experience: "",
      imgSrc: "/placeholder.svg",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyMembers.map((member, index) => (
          <div key={index} className="bg-card rounded-lg overflow-hidden shadow-md">
            <div className="h-48 bg-muted/20 flex items-center justify-center">
              <img
                src={member.imgSrc}
                alt="Faculty Member"
                width="120"
                height="120"
                className="rounded-full"
                style={{ aspectRatio: "120 / 120", objectFit: "cover" }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-muted-foreground">{member.position}</p>
              <div className="mt-4 space-y-2">
                {member.qualifications && (
                  <div>
                    <span className="font-medium">Qualifications:</span> {member.qualifications}
                  </div>
                )}
                {member.experience && (
                  <div>
                    <span className="font-medium">Experience:</span> {member.experience}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
