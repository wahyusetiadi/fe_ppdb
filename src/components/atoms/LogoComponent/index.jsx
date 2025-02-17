import React, { useState, useEffect } from 'react';

const LogoComponent = ({ logoSrc, textLogoSrc, altText }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 560);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 560);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='flex w-auto items-center py-4 gap-2'>
            <img src={logoSrc} alt={altText || "logo"} className="size-[40px]" />
            {!isMobile && <img src={textLogoSrc} alt='' className="w-[88px] h-auto" />}
        </div>
    );
};

export default LogoComponent;
