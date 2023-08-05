import Image from 'next/image';
import Logo from 'components/Logo';
import Heading from 'components/Heading';
import Waitlist from 'components/Waitlist';
import InteriorDemo from 'components/InteriorDemo';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-28 bg-[#D4BBF8]">
      <Logo />
      <div className="flex justify-between items-start">
        <div className="flex flex-col justify-start items-start ml-4 w-[40%]"> {/* Adjust ml-4 and width */}
          <Heading />
  
          <br/>
          <br/>
          <Waitlist />
        </div>
        <InteriorDemo />
      </div>
    </main>
  );
}
