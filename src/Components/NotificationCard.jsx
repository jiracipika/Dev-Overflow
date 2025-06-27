import React, { useState } from 'react'
import { useEffect } from 'react'
import NotifData from '../assets/NotifData.js'

const NotificationCard = ({title, text, category, friendRequest, id, imgSrc, userQuery }) => {
    const classOnTheBasisOfCategory = {
        Messages: "text-white",
        Requests: " text-yellow-500",
        Schedule: "text-orange-500"
    }

    const [classForNotification, setClassForNotification] = useState()
    const [cards, setCards] = useState(NotifData)

    useEffect(() => {
        setClassForNotification(classOnTheBasisOfCategory[category])
    }, [category])

    const removeCard = (id) => {
        const newCards = cards.filter(
            (card) => card.id !== id
        )
        setCards(newCards);
    }

    return(
        <div id={id} className='bg-card-gradient flex flex-col gap-3 p-10 rounded-lg'>
        <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
                <img className='w-6 h-6 rounded-full' src={imgSrc || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpuYdLEzBvwemix8pwsncUkLLOQqnByncadg&s"} alt="" />
                <p>{title || "user"}</p>
                <p className={classForNotification}>{text ||"Text Here"} </p>
            </div>
            <div className='flex gap-4'>
                <button onClick={() => removeCard()} className={`${category == "Requests" ? "block" : "hidden"} bg-custom-gradient p-4 rounded-lg` }>Accept</button>
                <button className={`${category == "Requests" ? "block" : "hidden"} bg-custom-gradient p-4 rounded-lg` }>Decline</button>
            </div>
        </div>
    </div>
    )
}
export default NotificationCard