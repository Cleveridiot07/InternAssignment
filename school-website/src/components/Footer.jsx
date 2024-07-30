import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="bg-secondary text-secondary-foreground py-6 px-6 md:px-10">
        <div className="container">
          <div className="flex justify-between items-center">
            <p className="text-sm">© 2023 Springdale Public School. All rights reserved.</p>
            <nav className="flex items-center gap-6">
              <a className="hover:underline" href="#" rel="ugc">
                Privacy Policy
              </a>
              <a className="hover:underline" href="#" rel="ugc">
                Terms of Service
              </a>
              <a className="hover:underline" href="#" rel="ugc">
                Sitemap
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
