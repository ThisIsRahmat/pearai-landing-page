export default function Waitlist() {
  return (
    <div className="bg-[#004F30] rounded-2xl w-503 h-349 -ml-6">
      <div className="p-4"> {/* Add padding to the container */}
        {/* Paragraph content */}
        <div className="pb-2 text-[#E5D3FF] text-[18.12px]">
          Finally, an AI decorator understands your style  <br/>and budget. Get personalized recs by simply <br/> uploading your pins or pics.
          <div className="mt-2"> {/* Add margin-top for increased spacing */}
            Be the first to try!
          </div>
        </div>
      </div>
       
      {/* the p-4 controls the padding between he input and the edge of the div */}
      <div className="p-4 -mt-6"> {/* Add padding to the container */}
        <form className="flex flex-col">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your Email"
            className="flex rounded-xl py-1 px-4 mb-2 bg-[#E5D3FF] text-[#004F30] text-[21.05px]  placeholder-custom" 
          />

          <button
            type="submit"
            className="flex rounded-xl justify-center py-1 px-4 shadow-sm bg-[#C6FD9D] text-[21.05px] text-[#004F30]"
          >
            Get Early Access
          </button>
        </form>
      </div>
    </div>
  );
}
