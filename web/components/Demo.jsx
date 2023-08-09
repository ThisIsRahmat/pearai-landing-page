'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// const designStyles = [
//   { title: 'Contemporary', color: 'text-purple-500', bgColor: 'bg-green-700' },
//   { title: 'Scandinavian', color: '', bgColor: '' },
//   { title: 'Mid-century modern', color: '', bgColor: '' },
//   { title: 'Coastal', color: '', bgColor: '' },
//   // Add more design styles as needed
// ];


export default function Demo() {

  const [selectedStyle, setSelectedStyle] = useState(null);

  const handleStyleClick = (style) => {
    setSelectedStyle(style === selectedStyle ? null : style);
  };

  return (
    <div className="relative flex justify-center flex-row space-x-3"> {/* Add space-x-10 for gap */}

{/* List of Design Styles */}
<div className="sm:space-y-2 w-1/3 sm:text-right text-left text-[13.13px] sm:text-[19.04px]">
        <div className="rounded-xl p-1 sm:-mt-1">
   
            <button className="uppercase sm:text-[19.04px] text-[#D4BBF8] rounded-xl  p-1 sm:-mt-1 bg-[#004F30] font-semibold">Contemporary</button>

        </div>
        <div className=" text-[#004F30] font-semibold uppercase">
          <button  className="uppercase sm:text-[19.04px] text-[#004F30] rounded-xl  p-1 sm:-mt-1  font-semibold">Scandinavian</button>
        </div>
        <div className="text-[#004F30] font-semibold uppercase">
          <button  className="uppercase sm:text-[19.04px] text-[#004F30] rounded-xl  p-1 sm:-mt-1  font-semibold">Mid-century modern</button>
        </div>
        <div className=" text-[#004F30] font-semibold uppercase">
          <button  className="uppercase sm:text-[19.04px] text-[#004F30]rounded-xl  p-1 sm:-mt-1  font-semibold">Coastal</button>
        </div>

      </div>


    {/* Video Mockup */}
    <div className=" w-1/3 mt-4 flex justify-center absolute sm:bottom-12 sm:left-10" style={{ transform: 'rotate(20deg)', transformOrigin: 'left top' }}>
        <div className="relative sm:w-[250px] sm:h-[350px]">
          <Image
            src="/iphone_vector/iphone_vector.jpg"
            alt="iPhone Vector"
            layout="fill"
            objectFit="contain"
          />
          <video className="absolute inset-0" width="100%" height="100%" autoPlay muted>
            <source src="/video_demos/interior_demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* <div className="sm:w-1/3 border-[2px] rounded-lg overflow-hidden border-green-700 mt-4">
        <table className="w-full border-collapse rounded-l overflow-hidden sm:text-[12.23px] text-[4.9px] text-[#004F30]" style={{ height: 'calc(100vh - 150px)', background: 'white' }}>
          <tbody> */}
      {/* Table with Interior Projects */}
      <div class="sm:border-[2px] rounded-lg overflow-hidden border-green-700 -mt-2 ">
        <table className="w-full border-collapse rounded-l overflow-hidden sm:text-[12.23px] text-[4.9px] text-[#004F30]" style={{  background: 'white' }}>
          <tbody>
            <tr>
              <td className="border-[2px] border-green-700 p-4" style={{ height: '150px', width: '200px' }}>
                {/* Add border class and padding */}
                <div className="text-center">
                  <Image
                    src="/contemporary/contemporary_1.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                  />
               <p>Interior Title $200</p>
                </div>
              </td>
              <td className="border-[2px] border-green-700 p-4" style={{ height: '150px', width: '200px' }}>
                {/* Add border class and padding */}
                <div className="text-center">
                  <Image
                    src="/contemporary/contemporary_2.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                  />
                  <p>Interior Title $200</p>
          
                </div>
              </td>
            </tr>

            <tr>
              <td className="border-[2px] border-green-700 p-4"  style={{ height: '150px', width: '200px' }}>
                {/* Add border class and padding */}
                <div className="text-center">
                  <Image
                    src="/contemporary/contemporary_3.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                  />
                 <p>Interior Title $200</p>
                </div>
              </td>
              <td className="border-[2px] border-green-700 p-4">
                {/* Add border class and padding */}
                <div className="text-center">
                  <Image
                    src="/contemporary/contemporary_4.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                  />
                 <p>Interior Title $200</p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-[2px] border-green-700 p-4"  style={{ height: '100px', width: '200px' }}>
                {/* Add border class and padding */}
                <div className="text-center align-text-bottom">
                  <Image
                    src="/contemporary/contemporary_5.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                  />
                 <p>Interior Title $200</p>
                </div>
              </td>
              <td className="border-[2px] border-green-700 p-4">
                {/* Add border class and padding */}
                <div className="text-center">
                  <Image
                    src="/contemporary/contemporary_6.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                  />
                <p>Interior Title $200</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  
        

  );
}
 