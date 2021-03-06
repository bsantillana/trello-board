import React from 'react';
import { Draggable } from 'react-beautiful-dnd'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid'


class List extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            cardList: [],
            showCardForm: false,
            showAddCard: true,
        };
        this.addCard = this.addCard.bind(this);
        this.removeCard = this.removeCard.bind(this);
        this.showCardForm = this.showCardForm.bind(this);
    }

    onEnterPress = (e) => {
        if (e.keyCode == 13 && e.shiftKey == false) {
          e.preventDefault();
          return false;
        }
    }

    addCard() {
        this.setState(state => ({
            cardList: state.cardList.concat({ 
                cardID: uuidv4(), 
                cardTitle: state.cardTitle
            }),
            cardTitle: '', // to reset the input field
            showCardForm: false,
            showAddCard: true
        }))
    }

    showCardForm = () => {
        this.setState({ showCardForm: true });
        this.setState({ showAddCard: false });
    }

    handleCardChange = (e) => {
        this.setState({cardTitle: e.target.value});
    }

    handleListTitleChange = (e) => {
        return e.target.value;
    }

    removeCard(cardID) {
        // pass in ID, remove card from cardList
        this.setState(state => {
            const cardList = state.cardList.filter(card => card.cardID !== cardID);
            return {
                cardList
            };
        });
    }

    render() {
        return (
            <div className="list"> 
                <div className="listContainer"> 
                    <div className="listHeader">
                        <span className="listId">{this.props.listID}</span>
                        <input className="listTitle" type="text" onKeyDown={this.onEnterPress} defaultValue={this.props.listTitle} onChange={this.handleListTitleChange}></input>
                        <button className="deleteList" onClick={() => this.props.removeList(this.props.listID)}>
                            <span className="icon"><FontAwesomeIcon icon={faTimes}/></span>
                        </button>
                    </div>
                    {
                        this.state.cardList.map(card => (
                            <Card key={card.cardID} cardID={card.cardID} cardTitle={card.cardTitle} removeCard={this.removeCard} />
                        ))
                    }
                    <div className="listFooter">
                        {this.state.showAddCard ? 
                        <button className="addCard" onClick={this.showCardForm}>
                            <span className="icon"><FontAwesomeIcon icon={faPlus}/></span>
                            <span className="buttonText">{'\u00A0'} Add another card</span>
                        </button>
                        : null}
                        {this.state.showCardForm ? 
                        <div className="cardInputContainer"> 
                            <input id="inputCardTitle" type="text" value={this.state.cardTitle} onChange={this.handleCardChange} placeholder="Enter a title for this card..."></input>
                            <button onClick={this.addCard}>Add Card</button>
                        </div>
                        : null}
                    </div>

                </div>
            </div>
        );
    }
}

export default List;