import Link from 'next/link';
import Image from 'next/image'
export default function Logo() {


  return (
    <div>
      {/* To-do: replace placeholder logo with pear logo */}
      <header className="absolute inset-x-4 top-4 z-50">
        <nav className="flex items-center justify-between p-4 sm:p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="#" className="-m-0.5 p-0.5">
              <span className="sr-only">Pear</span>
              <img
                className="h-6 sm:h-6 w-auto"
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