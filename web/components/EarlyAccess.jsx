export default function EarlyAccess() {
  return (
    <div className="bg-[#004F30] rounded-xl w-503 h-349"> 

<div>
      <p className=" text-[#E5D3FF] outline-[#004F30] text-[21.09px]">
        Finally, an AI decorator understands your <br/>style and budget. Get personalized recs by <br/>simply uploding your pins or pics.
        {/* <p className="text-[#E5D3FF] outline-[#004F30] text-[21.09px]"> */}
        <br/>
        <br/>
       Be the first to try!
      </p>
<br/>
     
      {/* </p> */}
            </div>

      <form className="flex flex-col"> {/* Use flex flex-col to stack the elements vertically */}
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your Email"
          className="flex rounded mb-4 text-green-700::placeholder { color: darkgreen; }" // Add ::placeholder style
        />

        <button
          type="submit"
          // onClick={handleSubmit}
          className="flex rounded justify-center py-1 shadow-sm bg-[#C6FD9D] text-[25.03px] text-[#004F30]"
        >
          Get Early Access
        </button>
      </form>
    </div>
  );
}
