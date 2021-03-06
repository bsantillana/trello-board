import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


function Cards(props) {
    return (
    <div className="card">
        <div className="cardsContainer">
            <div className="cardDetails">
                <span className="cardTitle" dir="auto">
                    <span className="cardId">{props.cardID}</span>{props.cardTitle}
                    <button className="deleteCard" onClick={() => props.removeCard(props.cardID)}>
                        <span className="icon"><FontAwesomeIcon icon={faTimes}/></span>
                    </button>
                </span>
            </div>
        </div>
    </div>

    );
}

export default Cards;
