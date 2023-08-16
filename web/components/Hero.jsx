export default function Hero() {
  return (
    <>
      <div className="font-semibold text-[#004F30] sm:mt-0 mt-4 ml-8 -mb-10 text-700">
        <h1 className="mx-auto tracking-widest font-semibold sm:text-[102.76px] leading-[88.58px]">
          <span className="block text-left sm:mb-2" style={{ marginLeft: '1rem' }}>DECOR</span>
          <span className="block text-right mb-2" style={{ marginRight: '1rem' }}>MAGIC</span>
          <span className="flex text-right mb-2" style={{ marginLeft: '3rem' }}>
            <span style={{ marginRight: '4rem' }}>AT</span>
            <span>&nbsp;YOUR&nbsp;</span>
          </span>
          <span className="block items-stretch mb-2" style={{ marginLeft: '-1rem' }}>FINGERTIPS</span>
        </h1>
      </div>
    </>
  );
}
