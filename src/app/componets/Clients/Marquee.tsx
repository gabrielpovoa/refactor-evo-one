import Image, { StaticImageData } from 'next/image';
import React from 'react';

type MarqueePartnerProps = {
    img: StaticImageData | string;
};

const MarqueePartner: React.FC<MarqueePartnerProps> = ({ img }) => (
    <div className="partner-item mt-8">
        <Image
            src={img}
            alt='Partnet Logo - marquee'
            className="object-cover max-w-5xl"
        />
    </div>
);

export default MarqueePartner;
