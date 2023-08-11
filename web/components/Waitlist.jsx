
'use client'
import { useState } from 'react';

export default function Waitlist() {

  const [waitlistData, setWaitlistData] = useState();
  const [error, setError] = useState();

 // Function to validate the email on the FE.
 function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}

// Function to submit Waitlist data
function submitWaitlist(data) {
  if (!data.email) {
    setError("Please enter your email");
    return;
  }
  if (validateEmail(data.email) === false) {
    setError("Please enter a valid email");
    return;
  }

  data.waitlist_id = 9808;
  data.referral_link = document.URL;

  fetch("https://api.getwaitlist.com/api/v1/waiter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((data) => {
      setWaitlistData(data);
    })
    .catch((error) => {
console.log("Testing whether emails are being submitted")
    });
}


  return (
    <div className="bg-[#004F30] rounded-2xl sm:w-4/5 sm:h-[280px] h-[213px] w-[358px] sm:ml-4 mb-4">
      <div className="p-4">
        {/* Paragraph content */}
        <div className="sm:pb-2 text-[#E5D3FF] sm:text-[18.12px] text-[15px]">
          Finally, an AI decorator that understands your style
          <br className="hidden "/> and budget. Get personalized recs by simply <br className="hidden"/> uploading your pins or pics.
          <div className="mt-1">Be the first to try!</div>
        </div>
      </div>

      <div className="p-2 sm:-mt-6">
        <form className="flex flex-col" method="POST">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your Email"
            className="flex rounded-xl py-1 px-4 mb-2 bg-[#E5D3FF] text-[#004F30] sm:text-[21.05px] text-[15px] placeholder-custom"
            onClick={() => {
              submitWaitlist({
                email: document.getElementById("email").value
              });
            }}
          />

          <button
            type="submit"
            className="flex rounded-xl justify-center py-1 px-4 shadow-sm bg-[#C6FD9D] sm:text-[21.05px] text-[#004F30] text-[15px]"
          >
            Get Early Access
          </button>
        </form>

      </div>
    </div>
  );
}
