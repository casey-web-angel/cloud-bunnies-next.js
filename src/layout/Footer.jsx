import React from 'react'
import Icon from '../components/Icon'

function Footer() {
    return (
        <div className='flex flex-col items-center relative  justify-center pt-4 pb-6 md:py-12'>
            <div className='flex flex-col items-center mb-12 relative justify-center'>
                <h1 className='font-irish text-[26px] md:text-[32px] text-center leading-[70px] text-white mb-3'>Join us</h1>
                <div className='mx-auto flex items-center  justify-between'>
                    <Icon note icon="/img/iconsT.png" />
                    <Icon note icon="/img/icong.png" />
                    <Icon note icon="/img/iconD.png" />

                </div>
            </div>
            <div className='bg-[#889FDC] flex items-center justify-center w-screen py-3 absolute bottom-0'>
                <span className="text-white text-center font-irish md:text-base text-sm  ">© Copyright 2022 • Droplets • All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer