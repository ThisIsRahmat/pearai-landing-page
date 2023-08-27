'use client'
import { useEffect, useState } from 'react';

export default function VideoDemo({ splineUrl }) {
  const [key, setKey] = useState(0);

  // Remount the VideoDemo component when splineUrl changes
  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [splineUrl]);

  return (
    <div key={key}>
    <iframe src={ splineUrl }  frameborder='0'
          width='100%'
          height='100%'
          className=" sm:top-120 sm:-left-40   absolute "
          // style={{ position: 'absolute', top: 120, left: -40, transform: 'scale(0.9)' }}
          
          >

          </iframe>
    </div>
  );
}

