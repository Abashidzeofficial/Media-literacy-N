import React from 'react'
import tbilisi from './image/Tbilisi.jpg'
import valismin from './image/valismin.jpg'
import logos from './image/logos.png'

function Foot() {
    return (
        <div className='foot-container'>
            <div className='foot'>
                <span className='foot-txt'></span>
                <img src={logos} alt='logo' className='tbilisi-img' />
                <img src={tbilisi} alt='tbilisi' className='tbilisi-img' />
                <img src={valismin} alt='valismin' className='tbilisi-img' />
            </div>
        </div>
    )
}

export default Foot