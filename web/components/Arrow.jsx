
import Image from "next/image"
export default function Logo() {


  return (
    <div className="flex justify-center h-full ">
      {/* To-do: replace placeholder logo with pear logo */}
     
      
      <div className="absolute  right-14  -translate-x-1/2">

                        <span className="sr-only">Arrow design</span>
              <img
                className="w-auto inset-x-0 bottom-0  h-6 sm:h-10 "
                style={{}}
                src="arrow.svg"
                alt="Arrow"
              />
  
          </div>
     

    </div>
  );
}