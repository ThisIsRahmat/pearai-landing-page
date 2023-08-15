'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Phone  from '../assets/rectangle.svg';
// import PhoneFrame  from '/components/PhoneFrame'


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
    photo_titles: [
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
    photo_titles: [
      'contemporary_1.png',
      'contemporary_2.png',
      'contemporary_3.png',
      'contemporary_4.png',
      'contemporary_5.png',
      'contemporary_6.png',
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
    photo_titles: [
      'contemporary_1.png',
      'contemporary_2.png',
      'contemporary_3.png',
      'contemporary_4.png',
      'contemporary_5.png',
      'contemporary_6.png',
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
    photo_titles: [
      'contemporary_1.png',
      'contemporary_2.png',
      'contemporary_3.png',
      'contemporary_4.png',
      'contemporary_5.png',
      'contemporary_6.png',
    ],
    video: 'coastal_demo.mp4',
  },
];

export default function Demo() {

  const [selectedStyle, setSelectedStyle] = useState('Contemporary');

  const handleStyleClick = (style) => {
    setSelectedStyle((prevStyle) => (prevStyle === style ? prevStyle : style));
  };

    // Find the selected design style based on the selectedStyle
    const selectedDesignStyle = designStyles.find((style) => style.title === selectedStyle);


  return (

<div className="relative flex justify-center flex-row space-x-3"> 
{/* <div className="flex flex-row justify-between items-center md:items-start"> */} 


{/* List of Design Styles */}

 <div className="sm:space-y-2 w-1/3 text-right text-[13.13px] sm:text-[19.04px]"> 
 <div className="flex-col">
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

  
    {/* Video Mockup */}
  <div className="-ml-9 mt-9 mr-4 grow">
  <div className="scale-[.25] w-0 h-0"
      style={{position: "relative"}} >
 {/* <PhoneFrame videoSrc="/video_demos/interior_demo.mp4">
        <video
          width={100}
          height={100}
          playsInline
          muted
          loop
          src="/video_demos/interior_demo.mp4"
        ></video>
        <Image
          className="w-full h-auto -rotate-45 scale-75"
          src="/phone-frame.svg"
          alt="Phone Frame"
          objectFit="contain"
          layout="fill"
        />
      </PhoneFrame> */}


  {/* Phone SVG */}
  <Phone className="skew-x-3 -skew-y-1" />

  {/* Video overlay */}
    <video
      className="w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/video_demos/interior_demo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>




</div>
</div>
 
  </div>
</div>




{/* Table with Interior Projects */}
<div className="md:border-[2px] rounded-lg overflow-hidden mb-10 border-green-700 -mt-2 w-[427.77px] h-[731px]">

{/* <div className="sm:border-[2px] rounded-lg overflow-hidden mb-10 border-green-700 -mt-2 " style={{ width: '427.77px', height: '731px' }}> */}
  <table className="w-full border-collapse rounded-l overflow-hidden sm:text-[12.23px] text-[4.9px] text-[#004F30]" style={{ background: 'white' }}>
    <tbody>
      {selectedDesignStyle &&
        [...Array(Math.ceil(selectedDesignStyle.photos.length / 2))].map((_, rowIndex) => (
          <tr key={rowIndex} style={{ height: `${731 / Math.ceil(selectedDesignStyle.photos.length / 2)}px` }}>
            {[0, 1].map((colIndex) => {
              const photoIndex = rowIndex * 2 + colIndex;
              const photo = selectedDesignStyle.photos[photoIndex];
              const photo_title = selectedDesignStyle.photo_titles[photoIndex];
              return (
                <td
                  key={colIndex}
                  className="border-[2px] border-green-700 p-4"
                  style={{ width: '50%', position: 'relative' }}
                >
                  <div
                    className="h-full flex items-center justify-center"
                    style={{ width: '100%', paddingTop: '98%', position: 'relative' }}
                  >
                    {photo && (
                      <Image
                        src={`/${selectedStyle}/${photo}`}
                        layout="fill"
                        objectFit="contain"
                        alt="Interior"
                      />
                    )}
                  </div>

           
                  <div className="text-center mt-2">
  {photo_title && (
     <p
     className="text-[12.23px] text-center text-transform: capitalize mb-2"
     style={{ fontFamily: 'Sofiapro, sans-serif' }}
   >
      {photo_title}
    </p>
  )}
</div>


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
 