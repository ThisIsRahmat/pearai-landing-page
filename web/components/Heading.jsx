export default function Heading() {
    return (
      <>
        <div className=" font-bold tracking-tight text-[#004F30] sm:text-6xl ">
          <h1
            className="mx-auto tracking-widest  text-[79.95px]"
            aria-label="Decor magic at your fingertips"
             // Double the text size (2 * 2.25rem)
            
          >
            <span className="block text-right" style={{ marginRight: '3.5rem' }}>DECOR</span> {/* Adjust the value here */}
            <span className="block text-left" style={{ marginLeft: '-1.5rem' }}>MAGIC</span>
            <span className="flex text-right" style={{ marginLeft: '4rem' }}>
              <span style={{ marginRight: '6rem' }}>AT</span> {/* Adjust the value here */}
              <span>&nbsp;YOUR&nbsp;</span>
            </span>
            <span className="block items-stretch" style={{ marginLeft: '-1.5rem' }}>FINGERTIPS</span>
          </h1>
        </div>
      </>
    );
  }
  