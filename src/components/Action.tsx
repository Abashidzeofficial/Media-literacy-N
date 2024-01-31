import React from 'react'
import meeting from "./image/meeting.jpg"
import training from "./image/training.jpg"

function action() {
    return (
        <div className='action-container'>
            <div className='action-inside'>

                <div className='action-two'>
                    <img src={meeting} className='meeting-img' />
                    <span className='meeting-txt'>
                        საინფორმაციო შეხვედრა გავმართეთ რელიგიური/ეთნიკური
                        უმცირესობის წარმომადგენელ ახალგაზრდებთან პროექტის „Media
                        Literacy - Together Against Russian Propaganda“ ფარგლებში.
                        ახალგაზრდებს მიეწოდათ ინფორმაცია პროექტის
                        მიზნების,ამოცანების და დაგეგმილი აქტივობების შესახებ.
                        პროექტის განხორციელების საჭიროება განაპირობა იმ გარემოებამ,
                        რომ თანამედროვე ტექნოლოგიების განვითარებამ შესაძლებლობა
                        მოგვცა დიდი მოცულობის სხვადასხვა სახის ინფორმაციაზე მარტივი
                        წვდომისა. ამ გარემოებამ კი გაადვილა დეზინფორმაციის გავრცელება
                        მათ შორის რუსეთის პროპაგანდის მუშაობა.
                        შესაბამისად მედიაწიგნიერება და მასთან დაკავშირებული
                        საკითხები კიდევ უფრო აქტუალური გახდა თანამედროვე ეტაპზე.
                        საინფორმაციო შეხვედრაზე ყურადღება გამახვილდა იმ არხებსა და
                        საშუალებებზე რომლესაც რუსეთი იყენებს პროპაგანდისთვის და
                        რომელიც მიმართულია ქართულ საზოგადეობაში დასავლური
                        ვექტორის დისკრეტიზაციისაკენ.
                        ვისაუბრეთ ერთი მხრივ, ინფორმაციის უზარმაზარ ნაკადში
                        ორიენტირების, ინფორმაციის გაფილტვრისა და მეორეს მხრივ ახალი
                        ინფორმაციის/ცოდნის მიღებისა და გაზიარების ინსტრუმენტების
                        შესახებ.
                    </span>

                </div>
                <div className='action-three'>
                    <img src={training} className='training-img' />
                    <span className='meeting-txt'>
                        დაბა ბაკურიანში ორგანიზებული იყო ტრეინინგ კურსი რელიგიური/ეთნიკური
                        ჯგუფის წარმომადგენელი ახალგაზრდებისთვის.
                        ტრენინგის პროგრამამ გააერთიანა ისეთ საკითხები როგორიცაა: მედიაწიგნიერება,
                        სოციალურ ქსელებში ინფორმაციის გადამოწმება, ყალბი ამბები,რუსული
                        პროპაგანდა და დეზინფორმაცია.
                        ჯგუფური მუშაობისა და სხვადასხვა აქტივობების საშუალებით განვიხილეთ და
                        გავაფართოვეთ ხედვა რელიგიური/ეთნიკური ჯგუფების წინაშე არსებული
                        გამოწვევებისა და პრობლემების შესახებ.
                        განვიხილეთ ის სავარაუდო აქტიურობები, რომლის განხორციელებაც
                        მნიშვნელოვანი ადვოკაცია იქნება ამ მიმართულებით.

                    </span>
                </div>
            </div>
        </div>
    )
}

export default action