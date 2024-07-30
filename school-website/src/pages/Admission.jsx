import React from 'react';

const Admissions = () => {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 md:py-16 lg:py-20 px-4 md:px-6">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Admissions</h1>
          <p className="mt-2 text-muted-foreground">Learn about our admission process and important deadlines.</p>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold">Admission Process</h2>
            <p className="mt-2 text-muted-foreground">Follow these steps to apply for admission:</p>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-accent rounded-full w-8 h-8 flex items-center justify-center text-primary font-medium">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Download Application Form</h3>
                  <p className="text-muted-foreground">
                    Download the admission form from our website and fill it out completely.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-accent rounded-full w-8 h-8 flex items-center justify-center text-primary font-medium">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Submit Required Documents</h3>
                  <p className="text-muted-foreground">
                    Gather and submit all the required documents along with the completed application form.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-accent rounded-full w-8 h-8 flex items-center justify-center text-primary font-medium">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Wait for Admission Decision</h3>
                  <p className="text-muted-foreground">
                    Your application will be reviewed, and you will be notified of the admission decision.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Admission Criteria</h2>
            <p className="mt-2 text-muted-foreground">Admission is based on the following criteria:</p>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-accent rounded-full w-8 h-8 flex items-center justify-center text-primary font-medium">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Merit-based</h3>
                  <p className="text-muted-foreground">
                    Admission is granted based on the applicant's academic performance and merit.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-accent rounded-full w-8 h-8 flex items-center justify-center text-primary font-medium">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Availability of Seats</h3>
                  <p className="text-muted-foreground">
                    Admission is subject to the availability of seats in the desired grade or program.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-accent rounded-full w-8 h-8 flex items-center justify-center text-primary font-medium">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Entrance Test</h3>
                  <p className="text-muted-foreground">
                    For certain grades, an entrance test may be conducted to assess the applicant's skills and
                    knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Important Dates</h2>
            <p className="mt-2 text-muted-foreground">Keep track of the following important dates:</p>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-accent rounded-full w-8 h-8 flex items-center justify-center text-primary font-medium">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Form Availability</h3>
                  <p className="text-muted-foreground">Admission forms will be available from June 1st to July 31st.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-accent rounded-full w-8 h-8 flex items-center justify-center text-primary font-medium">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Form Submission Deadline</h3>
                  <p className="text-muted-foreground">The completed application form must be submitted by August 15th.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-accent rounded-full w-8 h-8 flex items-center justify-center text-primary font-medium">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Entrance Test</h3>
                  <p className="text-muted-foreground">The entrance test will be conducted on September 1st.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-accent rounded-full w-8 h-8 flex items-center justify-center text-primary font-medium">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Admission Results</h3>
                  <p className="text-muted-foreground">The admission results will be announced on September 15th.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admissions;
