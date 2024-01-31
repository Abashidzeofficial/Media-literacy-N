import React from 'react'

function News() {
    return (
        <div className='news-container'>
            <div className='news'>
                <span className='news-title'>სიახლეები</span>
            </div>
            <div className='news-line'></div>
            <div className='week-line'>
                <div className='news-line1'>
                    <span className='week-day'>სიახლე</span>
                </div>
                <div className='news-line1'>
                    <span className='week-day'>სიახლე</span>
                </div>
                <div className='news-line1'>
                    <span className='week-day'>სიახლე</span>
                </div>
                <div className='news-line1'>
                    <span className='week-day'>სიახლე</span>
                </div>
            </div>

        </div>
    )
}

export default News;