import React from 'react';

const Gallery = () => {
  const galleryItems = [
    {
      title: "School Graduation",
      description: "Celebrating the achievements of students",
      imgSrc: "/placeholder.svg",
      alt: "School Graduation",
    },
    {
      title: "Science Fair Highlights",
      description: "Showcasing the innovative projects of students",
      imgSrc: "/placeholder.svg",
      alt: "Science Fair Highlights",
    },
    {
      title: "Sports Day",
      description: "A day of friendly competition and fun",
      imgSrc: "/placeholder.svg",
      alt: "Sports Day",
    },
    {
      title: "School Auditorium",
      description: "Our state-of-the-art performance space",
      imgSrc: "/placeholder.svg",
      alt: "School Auditorium",
    },
    {
      title: "School Band Concert",
      description: "Enjoy the melodious tunes of our talented students",
      imgSrc: "/placeholder.svg",
      alt: "School Band Concert",
    },
    {
      title: "School Library",
      description: "A cozy and inviting space for students",
      imgSrc: "/placeholder.svg",
      alt: "School Library",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
      <div className="mb-8 flex justify-between">
        <h1 className="text-3xl font-bold">School Gallery</h1>
        <div className="flex items-center gap-4"></div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {galleryItems.map((item, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={item.imgSrc}
              alt={item.alt}
              width="400"
              height="300"
              className="w-full h-60 object-cover"
              style={{ aspectRatio: "400 / 300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
