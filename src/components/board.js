import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './List';
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid';



class Board extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            listArray: [],
            showListForm: false,
            showAddList: true,
            isSidebarVisible: false
        };
        this.addList = this.addList.bind(this);
        this.removeList = this.removeList.bind(this);
        this.showListForm = this.showListForm.bind(this);
    }

    addList() {
        this.setState(state => ({
            listArray: state.listArray.concat({ 
                listID: uuidv4(), 
                listTitle: state.listTitle
            }),
            listTitle: '', // to reset the input field
            showListForm: false,
            showAddList: true
        }));
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
            console.log(`listArray: ${JSON.stringify(listArray)}`);
            return {
                listArray
            };
        });
    }

    render() {
        return (
        <div className="board"> 
            <Header />
            <div className="contentContainer">
            {
                this.state.listArray.map(list => (
                    <List key={list.listID} listID={list.listID} listTitle={list.listTitle} removeList={this.removeList} />
                ))
            }
            <div className="addListContainer">
                {this.state.showAddList ? 
                <button className="addList" onClick={this.showListForm}>
                    <span className="icon"><FontAwesomeIcon icon={faPlus}/></span>
                    <span className="buttonText">{'\u00A0'} Add another list</span></button>
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
