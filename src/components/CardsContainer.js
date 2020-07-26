import React from 'react';
import '../App.css';
import SimpleCard from './SimpleCard';


export default function CardsContainer({ cards, deleteCallback }) {

    return (
        <div className='cardsContainer'>
            {cards.map(item => <SimpleCard deleteCallback={deleteCallback} id={item.id} key={item.articleInput} {...item} />)}
        </div>
    )
}
