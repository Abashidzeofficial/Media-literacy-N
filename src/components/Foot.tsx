import React from 'react'
import tbilisi from './image/Tbilisi.jpg'
import valismin from './image/valismin.jpg'
import logos from './image/logos.png'

function Foot() {
    return (
        <div className='foot-container'>
            <div className='foot'>
                <span className='foot-txt'></span>
                {/* <img src={logos} alt='logo' className='tbilisi-img' /> */}
                <img src={tbilisi} alt='tbilisi' className='tbilisi-img' />
                <img src={valismin} alt='valismin' className='tbilisi-img' />

                <span className='ltxt'>
                    ვებგვერდი მომზადდა პროექტის „Media Literacy - Together Against
                    Russian Propaganda“ ფარგლებში, რომელიც განხორციელდა
                    ესტონეთის საგარეო საქმეთა სამინისტროს მხარდაჭერით და
                    ესტონეთის საელჩოს საქართველოში თანამშრომლობით.
                    ვებგვერდზე განთავსებულ მასალაზე პასუხისმგებელია ა(ა)იპ
                    „ინიციატივა სამოქალაქო საზოგადოებისათვის“. ის შესაძლოა, არ
                    გამოხატავდეს ესტონეთის საგარეო საქმეთა სამინისტროს და
                    ესტონეთის საელჩოს საქართველოში შეხედულებებს.
                </span>

            </div>
        </div>
    )
}

export default Foot