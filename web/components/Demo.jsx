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
      'mid-century_modern_1.png',
      'mid-century_modern_2.png',
      'mid-century_modern_3.png',
      'mid-century_modern_4.png',
      'mid-century_modern_5.png',
      'mid-century_modern_6.png',
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

    // Find the selected design style based on the selectedStyle
    const selectedDesignStyle = designStyles.find((style) => style.title === selectedStyle);


  return (
    <div className="relative flex justify-center flex-row space-x-3"> {/* Add space-x-10 for gap */}

{/* List of Design Styles */}

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
  {/* Table with Interior Projects */}
  <div className="sm:border-[2px] rounded-lg overflow-hidden mb-10 border-green-700 -mt-2 ">
      <table className="w-full border-collapse rounded-l overflow-hidden sm:text-[12.23px] text-[4.9px] text-[#004F30]" style={{ background: 'white' }}>
        <tbody>
          {selectedDesignStyle &&
            [...Array(3)].map((_, rowIndex) => (
              <tr key={rowIndex}>
                {[0, 1].map((colIndex) => {
                  const photoIndex = rowIndex * 2 + colIndex;
                  const photo = selectedDesignStyle.photos[photoIndex];
                  return (
                    <td
                      key={colIndex}
                      className="border-[2px] border-green-700 p-4"
                      style={{ height: '150px', width: '200px' }}
                    >
                      {photo && (
                        <div className="text-center">
                          <Image src={`/${selectedStyle}/${photo}`} width={500} height={500} alt="Interior" />
                          <p>Interior Title $200</p>
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
        </tbody>
      </table>
    </div>

    </div>
  
        

  );
}
 