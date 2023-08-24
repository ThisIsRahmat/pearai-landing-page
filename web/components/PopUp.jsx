import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Facebook, Twitter, Mail, X } from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';
import Container from 'components/Container';

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <Link href={href} className={clsx(className, 'flex items-center justify-center w-[3rem] h-[1.5rem] rounded-full bg-[#00663E] mx-1 transition')}>
      <Icon className="h-7 w-4 text-[#D4BBF8] transition" />
      <span className="sr-only">{children}</span>
    </Link>
  );


}

function copyToClipboard(referralLink) {
  // Get the clipboard object
  const clipboard = navigator.clipboard;

  // Try to copy the referral link to the clipboard
  try {
    clipboard.writeText(referralLink);

    // Show a visual response to indicate that the link has been copied
    const copyContainer = document.querySelector('.copy-container');
    copyContainer.classList.add('active');

    // After 2 seconds, remove the active class from the copy container
    setTimeout(() => {
      copyContainer.classList.remove('active');
    }, 2000);
  } catch (error) {
    // Handle the error
    console.error(error);
  }
}

function SendEmail(){
  return
}

export default function PopUp({ waitlistData, referralLink, onClose }) {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);
  const copyLink = () => {
    inputRef.current.select();
    document.execCommand('copy');
  };

  const inputRef = useRef(null);


  return (
    // <Container>
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

          <div className="relative z-50 overflow-hidden rounded-xl text-center sm:w-[675px] sm:h-[300px] w-11/12 h-1/3">
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
            <div className="flex flex-row">
            {/* Left side of the page */}
            <div>

           
            </div>
<div className="bg-[#00663E] sm:p-10 w-1/2 text-[#D4BBF8]  ">
<Dialog.Title className="sm:text-[18.91px]  font-semibold sm:leading-6">
                  You are the #{waitlistData.priority} person that joined the Pear waitlist
                </Dialog.Title>
  <div className="items-center justify-center">
  <h1 className="sm:text-[113.28px] text-[88.28px] font-bold text-center">
    #{waitlistData.priority}
  </h1>
  </div>
</div>
              {/* Right side of the page */}
              <div className=" w-1/2 bg-[#D4BBF8] p-8 text-[#004F30]">
             
                <div className="sm:py-2 py-2">
                  <h1 className="sm:text-[30.9px] uppercase sm:leading-[39.05px] font-bold"> Invite your friends and move up in line</h1>
                </div>
                <div className="sm:py-1 py-1">
                  <p className="sm:text-[11.75px] text-[14.75px]">Share with friends</p>
                </div>
                
                <div className="flex flex-col sm:space-y-4 items-center">
                  <ul role="list" className="flex">
                    <SocialLink href={`https://www.facebook.com/sharer/sharer.php?u=Sign up to the Pear AI waitlist using my unique referral link: \n
    You can get personalized recommendations by simply uploading your pins or pics.\n ${referralLink}`} icon={Facebook} />

                   <SocialLink href={`https://twitter.com/intent/tweet?text=Sign%20up%20to%20the%20waitlist%20for%20Pear%20AI,%20an%20AI%20decorator%20that%20understands%20your%20style%20and%20budget%20using%20my%20referral%20link&url=${referralLink}`}icon={Twitter}/>
                    <SocialLink
  href={`mailto:?subject=Join Pear AI&body=
    Hey,\n
    
    I wanted to let you know about Pear AI, an AI decorator that understands your style and budget.\n
    You can get personalized recommendations by simply uploading your pins or pics.\n
    Join the waitlist and sign up using my unique referral link:\n
    
  ${referralLink} \n
  \n
  \n
    Cheers!
  `}
  icon={Mail}
/>
                  </ul>
                </div>
                <div className="sm:py-3 py-2"><p className="sm:text-[11.75px] text-[10.75px]">Or copy your unique referral link</p></div>
                <div className=" text-[15px]">
             

<div className="relative mt-2 flex items-center">
<input
              className=" block w-full  ring-1 ring-inset ring-[#E5D3FF] rounded-xl bg-[#E5D3FF] text-[#004F30] text-[12px] py-1 px-2 mb-2"
              value={referralLink}
              readOnly
              ref={inputRef}
            />
            {/* <div className="absolute inset-y-0 right-1">
              <button onClick={copyToClipboard} className="inline-flex">copy</button>
            </div> */}
   
      </div>
          </div>

          <div>

    </div>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
     
    </Transition.Root>
    // </Container>
  );
}
