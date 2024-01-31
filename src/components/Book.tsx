import React from 'react'
import logo from './image/logo.png'

function book() {
    return (
        <div className='book-container'>
            <div className='book-inside'>
                <img src={logo} alt="book" className='book-img' />
            </div>
            <p className='media-txt'>Media Literacy</p>
        </div>
    )
}

export default book