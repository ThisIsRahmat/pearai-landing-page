
'use client'
import { useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import PopUp from './PopUp'

export default function Waitlist() {
  const [waitlistData, setWaitlistData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);


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

    setLoading(true);

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
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }



  return (
    <div className="bg-[#004F30] rounded-2xl sm:w-4/5 sm:h-[280px] h-[299px] w-[432px] sm:ml-4 mb-4">

<div className="p-2"> 
      <div className="p-4 mb-4">
        {/* Paragraph content */}
        <div className="sm:pb-2 text-[#E5D3FF] sm:text-[18.12px] text-[15px]">
          Finally, an AI decorator that understands your style
          <br className="hidden "/> and budget. Get personalized recs by simply <br className="hidden"/> uploading your pins or pics.
          <div className="mt-1">Be the first to try!</div>
        </div>
      </div>

      <div className="p-2 sm:-mt-6">
      {!waitlistData ? (
        <form className="flex flex-col" method="POST">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your Email"
            className="flex rounded-xl py-2 px-4 mb-3 bg-[#E5D3FF] text-[#004F30] sm:text-[21.05px] text-[15px] placeholder-custom"
            autoComplete="email"
            onChange={(e) => e.stopPropagation()}
            required
          />

          <button
            type="submit"
            className="flex rounded-xl justify-center py-2 px-4 shadow-sm bg-[#C6FD9D] sm:text-[21.05px] text-[#004F30] text-[15px]"
            disabled={loading}
            onClick={() => {
              submitWaitlist({
                email: document.getElementById("email").value
              });
            }}
          >
            
            {loading ? (
                <ClipLoader size={25} color={"#ffffff"} loading={true} />
              ) : (
                "Get Early Access"
              )}
          </button>
          {error && (
              <div className="text-center mt-2 text-xs text-red-500 px-6">
                {error}
              </div>
            )}
        </form> 
          ) : (
            <PopUp className="z-50" waitlistData={waitlistData} onClose={() => setWaitlistData(null)} />
           
          )}
      </div>
      </div>
    </div>
  );
}
