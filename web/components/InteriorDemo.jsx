import Image from 'next/image';
import Link from 'next/link'

export default function InteriorDemo() {
    return (
      <div className="relative flex justify-center">

  {/* List of Design Styles */}
  <div className="space-y-2 text-right "> {/* Change space-y-4 to space-y-2 */}
       {/* Align the text to the right */}
       {/* <button className="block text-green-700 font-semibold mb-1">Mid-Century Modern</button>
        <button className="block text-green-700 font-semibold mb-1">Scandinavian</button>
        <button className="block text-green-700 font-semibold mb-1">Contemporary</button>
        <button className="block text-green-700 font-semibold mb-2">Coastal</button>
         */}

<div className=" text-[19.04px] text-[#004F30] font-semibold "><button className="text-transform: uppercase"> Mid-Century Modern</button></div>
  <div className=" text-[19.04px] text-[#004F30] font-semibold"><button className="text-transform: uppercase"> Scandinavian< /button></div>
  <div className=" text-[19.04px] text-[#004F30] font-semibold"> <button className="text-transform: uppercase"> Contemporary</button></div>
  <div className=" text-[19.04px] text-[#004F30] font-semibold"><button className="text-transform: uppercase"> Coastal</button></div>


        
        {/* Add more design styles as needed */}
      </div>

         {/* iPhone Mockup Image */}
      {/* Video Mockup */}
      {/* <div className=" flex justify-center absolute top-10 left-0" style={{ transform: 'rotate(20deg)', transformOrigin: 'left top' }}>
    <video width={300} height={704} controls autoPlay muted>
      <source src="/mock_up_video_3.mov" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div> */}



  

      </div>
    );
  }
  