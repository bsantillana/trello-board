import React from 'react';
import { Draggable } from 'react-beautiful-dnd'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns'
import ModalDialog from 'react-bootstrap/ModalDialog'
import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'


function Cards(props) {
    // const [show, setShow] = useState(false);

    return (

    <div className="card">
        {/* <a className="cardButton"> */}
        <div className="cardsContainer">
            <div className="cardDetails">
                <span className="cardTitle" dir="auto">
                    <span className="cardId">{props.cardID}</span>{props.cardTitle}
                    <button className="deleteCard" onClick={() => props.removeCard(props.cardID)}>Delete</button>
                </span>
            </div>
        </div>
        {/* </a> */}
    </div>


    );
}

export default Cards;
