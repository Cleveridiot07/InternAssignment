import React from 'react';

const ContactUs = () => {
  return (
    <div className="">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="mt-4 text-muted-foreground">
              Get in touch with Springdale Public School for any inquiries or concerns.
            </p>
            <div className="mt-8 space-y-4">
              <div>
                <h3 className="text-lg font-medium">Address</h3>
                <p className="text-muted-foreground">123 Main Street, Springdale, CA 12345</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="text-muted-foreground">(123) 456-7890</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-muted-foreground">info@springdale.edu</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Send Us a Message</h2>
            <form className="mt-6 space-y-4">
              <div>
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="name"
                  placeholder="Enter your name"
                  type="text"
                />
              </div>
              <div>
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                />
              </div>
              <div>
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent text-primary hover:bg-primary/90 h-10 px-4 py-2"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12">
  <h2 className="text-2xl font-bold">Find Us on the Map</h2>
  <div className="mt-6 aspect-video rounded-lg overflow-hidden">
    <iframe
      title="Google Map"
      className="w-full h-full"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.318188903464!2d-122.42112698468164!3d37.77492927975973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808cd200b3c5%3A0xd0e1cdb663c9db69!2sDummy%20Address!5e0!3m2!1sen!2sus!4v1630422060293!5m2!1sen!2sus"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
    ></iframe>
  </div>
</div>

      </main>
    </div>
  );
};

export default ContactUs;
