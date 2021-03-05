import * as React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './List';
import trelloLogo from '../trello-logo-blue.svg'
import data from '../static-data/data.json'


class Board extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            listArray: [],
            showListForm: false,
            showAddList: true 
        };
        this.addList = this.addList.bind(this);
        this.removeList = this.removeList.bind(this);
        this.showListForm = this.showListForm.bind(this);
    }

    addList() {
        this.setState(state => ({
            listArray: state.listArray.concat({ 
                listID: state.listArray.length + 1, 
                listTitle: state.listTitle})
        }))
        this.setState({
            listTitle: '' // to reset the input field
        });
    }

    showListForm = () => {
        this.setState({ showListForm: true });
        this.setState({ showAddList: false });
    }

    handleListChange = (e) => {
        this.setState({listTitle: e.target.value});
    }

    removeList(listID) {
        // pass in ID, remove list from listArray
        this.setState(state => {
            const listArray = state.listArray.filter(list => list.listID !== listID);
            // loop through array of lists, reset listID to iterator index
            return {
                listArray
            };
        });
    }

    render() {
        
        return (
        <div className="board"> 
        <div className="header">
            <a href="/"><img src={trelloLogo}></img></a>
            
        </div>
        <div className="contentContainer">
            {/* <List listId="toDo" listTitle="To Do" />
            <List listId="inProg" listTitle="In Progress" />
            <List listId="done" listTitle="Done" /> */}
            {
                this.state.listArray.map(list => (
                    <List key={list.listID} listID={list.listID} listTitle={list.listTitle} removeList={this.removeList} />
                ))
            }
            <div className="addListContainer">
            {this.state.showAddList ? 
                <button className="addList" onClick={this.showListForm}>Add another list</button>
                :null}
                {this.state.showListForm ? 
                    <div className="cardInputContainer"> 
                        <input id="inputCardTitle" type="text" value={this.state.listTitle} onChange={this.handleListChange} placeholder="Enter list title..."></input>
                        <button onClick={this.addList}>Add List</button>
                    </div>
                : null}
            </div>

        </div>
        </div>
        );
    }
}
    
export default Board;
