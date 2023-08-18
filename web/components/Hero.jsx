export default function Hero() {
  return (
    <>
      <div className="font-semibold text-[#004F30] sm:mt-0 sm:mt-4 sm:ml-8 sm:-mb-10 text-700 flex items-center p-x-2 p-y-4">
      {/* <div className="font-semibold text-[#004F30] sm:mt-0 mt-4 ml-8 -mb-10 text-700 w-[350.74px] h-[196px]"> */}
        <h1 className="sm:mx-auto  font-semibold sm:text-[102.76px] sm:leading-[88.58px] text-5xl leading-[38.58px]">
          <span className="block text-left sm:mb-2 sm:ml-[4px] ml-[2px]" >DECOR</span>
          <span className="block text-right mb-2 sm:mr-[4px]" >MAGIC</span>
          <span className="flex text-right mb-2 sm:ml-[48px]"  >
            <span className="mr-16">AT</span>
            <span>&nbsp;YOUR&nbsp;</span>
          </span>
          <span className="block items-stretch mb-2 sm:ml-4 -ml-16" style={{ marginLeft: '-1rem'}}>FINGERTIPS</span>
        </h1>
      </div>
    </>
  );
}

