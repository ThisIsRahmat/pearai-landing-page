export default function Hero() {
  return (
    <>
      <div className="font-bold sm:tracking-tight text-[#004F30] sm:text-5xl text-3xl sm:mt-0 mt-4 ml-8 -mb-10">
        <h1 className="mx-auto tracking-widest sm:text-[79.95px] text-[50px]">
          <span className="block text-right mb-2" style={{ marginRight: '1rem' }}>DECOR</span>
          <span className="block text-left mb-2" style={{ marginLeft: '-1rem' }}>MAGIC</span>
          <span className="flex text-right mb-2" style={{ marginLeft: '1rem' }}>
            <span style={{ marginRight: '3rem' }}>AT</span>
            <span>&nbsp;YOUR&nbsp;</span>
          </span>
          <span className="block items-stretch mb-2" style={{ marginLeft: '-1rem' }}>FINGERTIPS</span>
        </h1>
      </div>
    </>
  );
}
