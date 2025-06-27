import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Searchbar from './TopSection';

const Layout = () => {
  const location = useLocation();
  const hideFooterOnPaths = []; // Add paths where you want to hide the footer
  const shouldHideFooter = hideFooterOnPaths.includes(location.pathname);

  return (
    <section className='flex'>
      <header className='w-[266px]'>
        <Navbar />
      </header>
      <section className='relative w-[calc(100%-266px)]'>
        <Searchbar placeholderText={"Search anything globally"}/>
        <div className="relative flex top-[100px]">
          <Outlet />
          {!shouldHideFooter && (
            <footer className='w-[330px]'>
              <Footer />
            </footer>
          )}
        </div>
      </section>
    </section>
  )
}

export default Layout