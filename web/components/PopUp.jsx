import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Facebook, Twitter, Mail, X } from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

function SocialLink({ className, href, children, icon: Icon }) {
    return (
      <Link href={href} className={clsx(className, 'flex items-center justify-center w-[3rem] h-[1.5rem] rounded-full bg-[#00663E] mx-1 transition')}>
        <Icon className="h-7 w-4 text-[#D4BBF8] transition" />
        <span className="sr-only">{children}</span>
      </Link>
    );
  }

export default function PopUp({ waitlistData, onClose }) {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <div className="fixed inset-0 flex justify-center items-center">
        <Dialog
          as="div"
          className="fixed inset-0 flex justify-center items-center"
          initialFocus={cancelButtonRef}
          onClose={() => {
            setOpen(false);
            onClose();
          }}
          static
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="relative z-50 overflow-hidden rounded-xl text-center w-[675px] h-[300px]">
            <div className="absolute top-0 right-0 p-4 sm:block">
              <button
                type="button"
                className="rounded-md text-[#004F30]"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="flex">
            {/* Left side of the page */}
<div className="bg-[#00663E] p-10 text-[#D4BBF8] flex items-center justify-center">
  <h1 className="text-[113.28px] font-bold text-center">
    #{waitlistData.priority}
  </h1>
</div>
              {/* Right side of the page */}
              <div className=" bg-[#D4BBF8] p-8 text-[#004F30]">
                <Dialog.Title className="text-[18.91px] font-semibold leading-6">
                  You are the {waitlistData.priority} person that joined the waitlist
                </Dialog.Title>
                <div className="py-4">
                  <h1 className="text-[41.9px] uppercase leading-[39.05px] font-bold">Climbing up the waitlist</h1>
                </div>
                <div className="py-4">
                  <p className="text-[11.75px]">Share with friends</p>
                </div>
                
                <div className="flex flex-col space-y-4 items-center">
                  <ul role="list" className="flex">
                    <SocialLink href="www.facebook.com" icon={Facebook} />
                    <SocialLink href="www.twitter.com" icon={Twitter} />
                    <SocialLink href="mailto:spencer@planetaria.tech" icon={Mail} />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </Transition.Root>
  );
}
