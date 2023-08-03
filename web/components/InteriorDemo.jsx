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



  
        {/* Table with Interior Projects */}
        <div className="p-6 ml-3" style={{ marginTop: '-80px' }}>
          <table className="w-full border-collapse rounded-lg" style={{ background: 'white' }}>
            <tbody>
              <tr>
                <td className="border border-green-700 rounded-lg p-4" style={{ height: '280px', background: 'white' }}>
                  {/* <img
                    src="/path/to/project-image-1.jpg"
                    alt="Project 1"
                    className="w-full h-40 object-cover rounded-lg mb-2"
                  /> */}
                  <div className="text-center">
                    <p>West Elm</p>
                    <p>$300</p>
                  </div>
                </td>
                <td className="border border-green-700 rounded-lg p-4" style={{ height: '280px', background: 'white' }}>
                  {/* Add more grid cells with project images and details */}
                  {/* <img src="/path/to/project-image-2.jpg" alt="Project 2" className="..." /> */}
                  <div className="text-center">
                    <p>Project Title 2</p>
                    <p>$200</p>
                  </div>
                </td>
              </tr>
              {/* Add more rows of projects */}
              <tr>
                <td className="border border-green-700 rounded-lg p-4" style={{ height: '180px'}}>
                  {/* <img src="/path/to/project-image-3.jpg" alt="Project 3" className="..." /> */}
                  <div className="text-center">
                    <p>Project Title 3</p>
                    <p>$150</p>
                  </div>
                </td>
                <td className="border border-green-700 rounded-lg p-4" style={{ height: '180px' }}>
                  {/* <img src="/path/to/project-image-4.jpg" alt="Project 4" className="..." /> */}
                  <div className="text-center">
                    <p>Project Title 4</p>
                    <p>$250</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-green-700 rounded-lg p-4" style={{ height: '180px' }}>
                 {/* <img src="/path/to/project-image-3.jpg" alt="Project 3" className="..." />  */}
                  <div className="text-center">
                    <p>Project Title 3</p>
                    <p>$150</p>
                  </div>
                </td>
                <td className="border border-green-700 rounded-lg p-4" style={{ height: '180px' }}>
                  {/* <img src="/path/to/project-image-4.jpg" alt="Project 4" className="..." /> */}
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
  