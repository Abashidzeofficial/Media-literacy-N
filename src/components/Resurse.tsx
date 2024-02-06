import React from 'react'

function Resurse() {
    return (
        <div className='resurse-container'>
            <div className='resurse'>
                <span className='resurse-txt'>მულტიმედია</span>
                <div className='th3'>
                    <button className='download-btn1'>
                        <div className='download-pdf1'>
                            <a className='dwn-download' href='propaganda.pdf' download="Icons.pdf">ჩამოტვირთვა</a>
                        </div>
                    </button>
                    <span className='propaganda-txt'>პროპაგანდა</span>
                </div>
                <div className='th3'>
                    <button className='download-btn2'>
                        <div className='download-pdf3'>
                            <a className='dwn3-download' href='fake.png' download="Icons.png">ჩამოტვირთვა</a>
                        </div>
                    </button>
                    <span className='fake-txt'>ყალბი ინფორმაცია</span>
                </div>
                <div className='th3'>
                    <button className='download-btn3'>
                        <div className='download-pdf2'>
                            <a className='dwn2-download' href='iuneskos5.pdf' download="Icons.pdf">ჩამოტვირთვა</a>
                        </div>
                    </button>
                    <span className='five-txt'>იუნესკოს 5 წესი</span>
                </div>

            </div>
        </div>
    )
}

export default Resurse