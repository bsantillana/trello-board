import React from 'react';
import { Draggable } from 'react-beautiful-dnd'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card'

class List extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            cardList: [],
            showCardForm: false,
            showAddCard: true 
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
                cardID: state.cardList.length + 1, 
                cardTitle: state.cardTitle})
        }))
        this.setState({
            cardTitle: '' // to reset the input field
        });
    }

    showCardForm = () => {
        this.setState({ showCardForm: true });
        this.setState({ showAddCard: false });
    }

    handleCardChange = (e) => {
        this.setState({cardTitle: e.target.value});
    }

    removeCard(cardID) {
        // pass in ID, remove card from cardList
        this.setState(state => {
            const cardList = state.cardList.filter(card => card.cardID !== cardID);
            // loop through card list, reset cardID to iterator index
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
                        <textarea className="listTitle" onKeyDown={this.onEnterPress}>{this.props.listTitle}</textarea>
                        <button className="deleteList" onClick={() => this.props.removeList(this.props.listID)}>X</button>
                    </div>
                    {/* <Card cardID="ID" cardTitle="To Do" />
                    <Card cardID="ID" cardTitle="To Do" /> */}
                    {
                        this.state.cardList.map(card => (
                            <Card key={card.cardID} cardID={card.cardID} cardTitle={card.cardTitle} removeCard={this.removeCard} />
                        ))
                    }
                    <div className="listFooter">
                        {this.state.showAddCard ? 
                        <button className="addCard" onClick={this.showCardForm}>Add another card</button>
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