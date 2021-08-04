import React from 'react'
import './ApiCard.css'
import { nanoid } from 'nanoid'

export const ApiCard = ({ cards }) => {
   return cards.map((soloCard) => {
      const id = nanoid(10)
      const { code, image, suit, value } = soloCard
      return (
        <div className="card" key={id}>
         <img alt="card" src={image} id={code} key={id} value={value} className={suit}  />
        </div>
       )
   })
}