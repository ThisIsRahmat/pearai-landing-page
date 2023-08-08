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


export default function InteriorDemo() {

  const [selectedStyle, setSelectedStyle] = useState(null);

  const handleStyleClick = (style) => {
    setSelectedStyle(style === selectedStyle ? null : style);
  };

  return (
    <div className="relative flex justify-center space-x-3"> {/* Add space-x-10 for gap */}

{/* List of Design Styles */}
<div className="space-y-2 text-right">
        <div className="bg-[#004F30] rounded-xl p-1 -mt-1">
          <div className="text-[19.04px] text-[#D4BBF8] font-semibold ">
            <button className="uppercase">Contemporary</button>
          </div>
        </div>
        <div className="text-[19.04px] text-[#004F30] font-semibold uppercase">
          <button className="uppercase">Scandinavian</button>
        </div>
        <div className="text-[19.04px] text-[#004F30] font-semibold uppercase">
          <button className="uppercase">Mid-century modern</button>
        </div>
        <div className="text-[19.04px] text-[#004F30] font-semibold uppercase">
          <button className="uppercase">Coastal</button>
        </div>

      </div>


      {/* Video Mockup */}
      <div className="flex justify-center absolute bottom-8 left-20" style={{ transform: 'rotate(20deg)', transformOrigin: 'left top' }}>
        <video width={250} height={300} controls autoPlay muted>
          <source src="video_demos/mock_up_video_3.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Table with Interior Projects */}
      <div class="border-[2px] rounded-lg overflow-hidden border-green-700">
        <table className="w-full border-collapse rounded-l overflow-hidden text-[12.23px] text-[#004F30]" style={{ height: '188px', background: 'white' }}>
          <tbody>
            <tr>
              <td className="border-[2px] border-green-700 p-4" style={{ height: '200px', width: '200px' }}>
                {/* Add border class and padding */}
                <div className="text-center">
                  <p>West Elm</p>
                  <p>$300</p>
                </div>
              </td>
              <td className="border-[2px] border-green-700 p-4" style={{ height: '220px', width: '215px' }}>
                {/* Add border class and padding */}
                <div className="text-center">
                  <p>Project Title 2</p>
                  <p>$200</p>
                </div>
              </td>
            </tr>

            <tr>
              <td className="border-[2px] border-green-700 p-4" style={{ height: '220px' }}>
                {/* Add border class and padding */}
                <div className="text-center">
                  <p>Project Title 3</p>
                  <p>$150</p>
                </div>
              </td>
              <td className="border-[2px] border-green-700 p-4">
                {/* Add border class and padding */}
                <div className="text-center">
                  <p>Project Title 4</p>
                  <p>$250</p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-[2px] border-green-700 p-4" style={{ height: '220px' }}>
                {/* Add border class and padding */}
                <div className="text-center align-text-bottom">
                  <p>Project Title 3</p>
                  <p>$150</p>
                </div>
              </td>
              <td className="border-[2px] border-green-700 p-4">
                {/* Add border class and padding */}
                <div className="text-center">
                  <p>Project Title 4</p>
                  <p>$250</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
