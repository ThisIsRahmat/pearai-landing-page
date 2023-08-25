'use client'
import Spline from '@splinetool/react-spline';
import { useEffect, useState } from 'react';

export default function VideoDemo({ splineUrl }) {
  const [key, setKey] = useState(0);

  // Remount the VideoDemo component when splineUrl changes
  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [splineUrl]);

  return (
    <div key={key}>
      <Spline scene={splineUrl} fetchpriority="high" />
    </div>
  );
}
