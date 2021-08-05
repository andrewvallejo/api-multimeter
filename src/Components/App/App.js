import React, { useEffect, useReducer  } from 'react';
import { apiMainUrl } from '../../Utility/url'
import { ApiCard } from '../ApiCard/ApiCard'
import { fetchApi } from '../../Utility/apiCalls'
import './App.css'
import './App.css';

const initialState = {
  deck: []
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_DECK':
      return {...state, deck: action.deck}
    default:
      return state
  }
}

export const App = () => {
  // const [playingCards, setCards] = useState([])

  const [state, dispatch] = useReducer(reducer, initialState)


  useEffect(() => {
    (async () => {
      const {deck_id} = await fetchApi(apiMainUrl);
      const {cards} = await fetchApi(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=52`)
      const action = {type: 'ADD_DECK', deck: cards}
      dispatch(action)
    })();
  }, []);
      

    return (
       <main>
       {console.log(state.deck)}
          <ApiCard cards={state.deck} />
      </main> 
    )
}

