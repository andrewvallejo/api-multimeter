import React, { useState,  useEffect  } from 'react';
import { apiMainUrl } from '../../Utility/url'
import { ApiCard } from '../ApiCard/ApiCard'
import { fetchApi } from '../../Utility/apiCalls'
import './App.css'

// import { fetchAPI } from '../../Utility/apiCalls';
import './App.css';

export const App = () => {
  const [playingCards, setCards] = useState([])

  useEffect(() => {
    (async () => {
      let {deck_id} = await fetchApi(apiMainUrl);
      let allCards = await fetchApi(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=52`)
      setCards(allCards.cards)
    })();
  }, []);
      

    return (
       <main>
          <ApiCard cards={playingCards} />
      </main> 
    )
}

