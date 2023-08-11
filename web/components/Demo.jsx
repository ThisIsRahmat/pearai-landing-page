'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import PhoneFrame  from '/components/PhoneFrame'

const designStyles = [
  {
    title: 'Contemporary',
    photos: [
      'contemporary_1.png',
      'contemporary_2.png',
      'contemporary_3.png',
      'contemporary_4.png',
      'contemporary_5.png',
      'contemporary_6.png',
    ],
    video: 'contemporary_demo.mp4',
  },
  {
    title: 'Scandinavian',
    photos: [
      'scandinavian_1.png',
      'scandinavian_2.png',
      'scandinavian_3.png',
      'scandinavian_4.png',
      'scandinavian_5.png',
      'scandinavian_6.png',
    ],
    video: 'scandinavian_demo.mp4',
  },
  {
    title: 'Mid-century modern',
    photos: [
      'midcentury_1.png',
      'midcentury_2.png',
      'midcentury_3.png',
      'midcentury_4.png',
      'midcentury_5.png',
      'midcentury_6.png',
    ],
    video: 'midcentury_demo.mp4',
  },
  {
    title: 'Coastal',
    photos: [
      'coastal_1.png',
      'coastal_2.png',
      'coastal_3.png',
      'coastal_4.png',
      'coastal_5.png',
      'coastal_6.png',
    ],
    video: 'coastal_demo.mp4',
  },
];

export default function Demo() {

  const [selectedStyle, setSelectedStyle] = useState(null);

  const handleStyleClick = (style) => {
    setSelectedStyle(style === selectedStyle ? null : style);
  };

  return (
    <div className="relative flex justify-center flex-row space-x-3"> {/* Add space-x-10 for gap */}

{/* List of Design Styles */}
{/* <div className="sm:space-y-2 w-1/3 sm:text-right text-left text-[13.13px] sm:text-[19.04px]">
        <div className="rounded-xl p-1 sm:-mt-1">
   
            <button className="uppercase sm:text-[19.04px] text-[#D4BBF8] rounded-xl  p-1 sm:-mt-1 bg-[#004F30] font-semibold">Contemporary</button>

        </div>
        <div className=" text-[#004F30] font-semibold uppercase">
          <button  className="uppercase sm:text-[19.04px] text-[#004F30] rounded-xl  p-1 sm:-mt-1  font-semibold">Scandinavian</button>
        </div>
        <div className=" text-[#004F30] font-semibold uppercase">
          <button className="uppercase sm:text-[19.04px] text-[#004F30] rounded-xl p-1 sm:-mt-1 -ml-10 font-semibold" style={{ whiteSpace: 'nowrap' }}>
            Mid-century modern
          </button>
        </div>
        <div className=" text-[#004F30] font-semibold uppercase">
          <button  className="uppercase sm:text-[19.04px] text-[#004F30]rounded-xl  p-1 sm:-mt-1  font-semibold">Coastal</button>
        </div>

      </div> */}

{/* {designStyles.map((title, design_pics, design_videos)) => (

  <table className="w-full border-collapse rounded-l overflow-hidden sm:text-[12.23px] text-[4.9px] text-[#004F30]" style={{  background: 'white' }}>
  <tbody>
    <tr>
      <td className="border-[2px] border-green-700 p-4" style={{ height: '150px', width: '200px' }}>
        </table>
        </tbody>
        </tr>
        </td>
)

} */}

  {/* List of Design Styles */}
  {/* <div className="sm:space-y-2 w-1/3 text-right text-[13.13px] sm:text-[19.04px]">
  {designStyles.map((style) => (
    <div key={style.title}>
      <button
        className={`uppercase sm:text-[19.04px] p-1 sm:-mt-1 -ml-10  ${
          selectedStyle === style.title
            ? 'text-[#D4BBF8] font-semibold bg-[#004F30] rounded-xl p-1 sm:pl-2 pr-2'
            : 'text-[#004F30] font-semibold p-1 sm:pl-2 pr-2'
        }`}
        style={{ whiteSpace: 'nowrap' }}
        onClick={() => handleStyleClick(style.title)}
      >
        {style.title}
      </button>
    </div>
  ))}
</div> */}

<div className="sm:space-y-2 w-1/3 text-right text-[13.13px] sm:text-[19.04px]">
  {designStyles.map((style) => (
    <div key={style.title} className="mb-1">
      <button
        className={`uppercase sm:text-[19.04px] p-1 sm:-mt-1 -ml-10 ${
          selectedStyle === style.title
            ? 'text-[#D4BBF8] font-semibold bg-[#004F30] rounded-md p-1 sm:pl-3 pr-3'
            : 'text-[#004F30] font-semibold p-1 sm:pl-3 pr-3'
        }`}
        style={{ whiteSpace: 'nowrap' }}
        onClick={() => handleStyleClick(style.title)}
      >
        {style.title}
      </button>
    </div>
  ))}
</div>


  {/* Video Mockup */}
  
  {/* <div className="relative sm:w-[250px] sm:h-[500px]"> */}
  <div className=" w-1/3 mt-4 flex justify-center absolute sm:inset-x-1 sm:left-2" style={{ transform: 'rotate(30deg)', transformOrigin: 'left bottom' }}>
  <PhoneFrame className="" priority> 
        <div className="absolute bottom-0 right-0 w-full h-full">
          <video className="w-full h-full object-contain" autoPlay muted loop>
            <source src="/video_demos/interior_demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
          </PhoneFrame>
        
      </div>



      {/* <div className="sm:w-1/3 border-[2px] rounded-lg overflow-hidden border-green-700 mt-4">
        <table className="w-full border-collapse rounded-l overflow-hidden sm:text-[12.23px] text-[4.9px] text-[#004F30]" style={{ height: 'calc(100vh - 150px)', background: 'white' }}>
          <tbody> */}
      {/* Table with Interior Projects */}
      <div class="sm:border-[2px] rounded-lg overflow-hidden mb-10 border-green-700 -mt-2 ">
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
 