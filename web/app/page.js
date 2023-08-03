import Image from 'next/image';
import Logo from 'components/Logo';
import Heading from 'components/Heading';
import SubHeading from 'components/SubHeading';
import EarlyAccess from 'components/EarlyAccess';
import InteriorDemo from 'components/InteriorDemo';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-28 bg-[#D4BBF8]">
      <Logo />
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <Heading />
          <SubHeading />
          <EarlyAccess />
        </div>
        <InteriorDemo />
      </div>
    </main>
  );
}
