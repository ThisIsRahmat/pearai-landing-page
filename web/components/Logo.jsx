import Link from 'next/link';
import Image from "next/image"
export default function Logo() {


  return (
    <div>
     
      <header className="absolute inset-x-4 top-4 z-50 mb-2">
        <nav className=" sm:fixed flex items-center justify-between p-4 sm:p-6 lg:px-8 pt-1 top-4px" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="#" className="-m-0.5 p-0.5">
              <span className="sr-only">Pear</span>
              <img
                className="h-6 w-auto "
                src="pear_logo.svg"
                alt="Pear logo"
              />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}