import React from 'react';
import trelloLogo from '../trello-logo-blue.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';



class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSidebarVisible: false
        };
        // this.addList = this.addList.bind(this);
        // this.removeList = this.removeList.bind(this);
        // this.showListForm = this.showListForm.bind(this);
        this.setSidebarInvisibile = this.setSidebarInvisibile.bind(this);
    }

    setSidebarInvisibile() {
        this.setState({
            isSidebarVisible: false
        }
        );
    }

    render() {
        return (
        <>
        <div className="header">
            <div className="col-4 headerColLeft">
                <button className="headerButton">Board</button>
                <button className="headerButton">Board Name</button>
                <button className="headerButton">Boards</button>
                <button className="headerButton">Jump To</button>

            </div>
            <div className="col-4">
                <a href="/"><img src={trelloLogo}></img></a>
            </div>
            <div className="col-4 headerColRight">
                <button className="headerButton">+</button>
                <button className="headerButton">info</button>
                <button className="headerButton">bell</button>
                <button className="headerButton profile">BS</button>
            </div>
        </div>
        <div className="subHeader">
            <div className="col-4 headerColLeft">
                <button className="headerButton">Board</button>
                <button className="headerButton">Board Name</button>
                <button className="headerButton">Star</button>
                <span>|</span>
                <button className="headerButton">Prairie Health</button>
                <button className="headerButton">Team Visible</button>
                <button className="headerButton profile">BS</button>
                <button className="headerButton">Invite</button>



            </div>
            <div className="col-4">
                {/* <a href="/"><img src={trelloLogo}></img></a> */}
            </div>
            <div className="col-4 headerColRight">
                <button className="headerButton">Butler</button>
                <button className="headerButton" onClick={() => this.setState({isSidebarVisible: true})}>*** Show Menu</button>
                {this.state.isSidebarVisible ? <Sidebar setSidebarInvisibile={this.setSidebarInvisibile}/> : null }
            </div>
        </div>
        </>

    );
        }
}

export default Header;
