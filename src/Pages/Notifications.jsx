import React, {useState} from 'react'
import NotificationFilterTab from '../Components/NotificationFilterTab.jsx'
import NotificationCard from '../Components/NotificationCard.jsx'
import NotifData from '../assets/NotifData.js'

const Notifications = () => {

    const [filterQuery, setFilterQuery] = useState("All")

    const filteredData = filterQuery === "All" ? NotifData : NotifData.filter(item => item.category === filterQuery);

    const handleFilterChosen = (userquery) =>{
        setFilterQuery(userquery)
      }
    

    
    return(
        <div className='min-h-screen text-white py-8 gap-8 flex flex-col px-8 max-h-fit w-[calc(100%-330px)] bg-gradient-to-r from-[#0A0B10] to-black'>
            <NotificationFilterTab onChosenFilter={handleFilterChosen}/>
            <section className='flex flex-col gap-3 justify-center'>
                {filteredData.map((item, index) =>{
                    return (<NotificationCard id={index} userquery={filterQuery} category={item.category} title={item.title} text={item.text}/>)
                })}
            </section>
        </div>
    )
}

export default Notifications