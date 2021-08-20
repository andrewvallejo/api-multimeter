import React, { useState,  useEffect  } from 'react';
import { apiMainUrl } from '../../Utility/url'
import { ApiCard } from '../ApiCard/ApiCard'
import { fetchApi } from '../../Utility/apiCalls'
import './App.css'

import './App.css';

export const App = () => {
  const [playingCards, setCards] = useState([])

  useEffect(() => {
    (async () => {
      let {data: {deck_id}} = await fetchApi(apiMainUrl);
      console.log(deck_id)
      let { data: { cards: allCards } } = await fetchApi(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=52`)
      setCards(allCards)
    })();
  }, []);
      

    return (
       <main>
          <ApiCard cards={playingCards} />
      </main> 
    )
}

