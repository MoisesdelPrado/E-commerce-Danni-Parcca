import React from 'react';
import Image from 'next/image';

const FeatureBoard = () => {
  return (
    <div className="mx-auto h-min-500 w-full pt-32 pb-10 flex-grow-2">
        <div className="container mx-auto border-2">
        FeatureBoard
        <Image src="/Pics/Logo.jpg" height={500} width="600" />
        </div>
    </div>
  )
};

export default FeatureBoard;