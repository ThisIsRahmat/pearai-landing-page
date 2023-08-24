import React from 'react';
import Image from 'next/image';
import Logo from 'components/Logo';
import Hero from 'components/Hero';
import Waitlist from 'components/Waitlist';
import Demo from 'components/Demo';
import Arrow from 'components/Arrow';
import VideoDemo from 'components/VideoDemo';

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between bg-[#D4BBF8] p-4 py-8 md:p-20 space-y-2">
      <Logo />
      <div className="  flex-wrap flex flex-col md:flex-row justify-center md:justify-between md:items-start">
        <div className="flex md:content-center flex-col justify-start items-center md:items-start md:ml-4 md:w-[40%] space-y-10">
          <Hero />
          <Waitlist className="mt-8 md:mt-20 xl: md:jusitfy-center" />
        </div>
        <div className="mt-5 sm:mt-2">
          <Demo className="sm:mt-16" />
        </div>
      </div>
    </main>
  );
}
