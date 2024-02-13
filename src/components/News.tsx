import React from 'react'
import news from './image/news.jpg'
import { forwardRef } from 'react';

function News() {
    return (
        <div className='news-container'>
            <div className='news'>
                <span className='news-title'>სიახლეები</span>
            </div>
            <div className='news-line'></div>
            <div className='week-line'>
                <div className='news-line1'>
                    <img src={news} alt='news' className='news-image' />
                </div>
                <div className='news-line1'>
                    <span className='news-txt'>24 იანვარს, გვქონდა პატივი თბილი მიღებისა ესტონეთის საელჩოში. სხვადასხვა
                        რელიგიური გაერთიანების წარმომადგენელი ახალგაზრდები შეხვდნენ ესტონეთის
                        რესპუბლიკის საგანგებო და სრულუფლებიან ელჩს საქართველოში ქალბატონ რიინა
                        კალიურანდას, ბატონ პეეტერ პალს და ქალბატონ ქეთი აბაზაშვილს.
                        შეხვედრა წარმოადგენდა პროექტის „Media Literacy - Together Against Russian
                        Propaganda“ დამატებით აქტიურობას.
                        ქალბატონი ელჩი ახალგაზრდებს ესაუბრა იმ გამოწვევებზე რასაც რუსული
                        პროპაგანდა და დეზინფორმაცია ქმნის საქართველოში და მის ნეგატიურ
                        გავლენებზე. მან ხაზი გაუსვა იმ ფაქტს, რომ ტექნოლოგიურ განვითარებასთან
                        ერთად მნიშვნელოვანია სწორად მივიღოთ,გავიაზროთ და შექმნათ ჩვენი
                        საინფორმაციო დღის წესრიგი. განსაკუთრებული ყურადღება გამახვილდა იმ
                        ისტორიულ შესაძლებლობაზე რაც ქვეყანას ეძლევა დასავლეთთან ინტეგრაციის
                        თანამედროვე ეტაპზე და ამ გზაზე არსებულ გამოწვევების გადალახვის
                        შესაძლებლობებზე ესტონეთის გამოცდილების გაზიარებით.
                        გაიმართა საინტერესო დიალოგი ახალგაზრდების ჩართულობით.</span>
                </div>

            </div>

        </div>
    )
}

export default forwardRef(News);