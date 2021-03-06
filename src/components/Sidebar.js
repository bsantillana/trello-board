import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import trelloIcon from '../trello-icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faSearch, faStickyNote,faEllipsisH, faRobot, faRocket, faLock, faListUl, faPlusSquare, faTimes } from '@fortawesome/free-solid-svg-icons'

function Sidebar(props) {

    return (
        <>
        <div className="sidebarContainer">
            <div className="sidebarHeader">
                <h3>Menu
                    <button className="exitSidebar" onClick={props.setSidebarInvisibile}>
                        <span><FontAwesomeIcon icon={faTimes}/></span>
                    </button>
                </h3>
                <hr></hr>
            </div>
            <div className="sidebarContent">
                <ul>
                    <li>
                    <a href="/">
                    <span className="sidebarIcon"><img src={trelloIcon} height="20px"></img></span>
                        {'\u00A0'} About this board
                        <br></br>
                        <div className="itemSubtext">
                            {'\u00A0'} Add a description to your board
                        </div>
                    </a>
                    </li>
                    <li>
                        <a href="/">
                            <span className="sidebarIcon square"><FontAwesomeIcon icon={faSquare}/></span>
                            {'\u00A0'} Change Background
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span className="sidebarIcon iconsColor"><FontAwesomeIcon icon={faSearch}/></span>
                            {'\u00A0'} Search Cards
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span className="sidebarIcon iconsColor"><FontAwesomeIcon icon={faStickyNote}/></span>
                            {'\u00A0'} Stickers
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <span className="sidebarIcon iconsColor"><FontAwesomeIcon icon={faEllipsisH}/></span>
                            {'\u00A0'}  More
                        </a>
                    </li>
                    <hr></hr>
                    <li>
                        <a href="/"> 
                        <span className="sidebarIcon iconsColor"><FontAwesomeIcon icon={faRobot}/></span>
                            {'\u00A0'} Butler
                        </a>
                    </li>
                </ul>
                <hr></hr>
                <ul>
                    <li>
                        <a href="/">
                            <span className="sidebarIcon"><FontAwesomeIcon icon={faRocket}/></span>
                            {'\u00A0'}  Power-Ups
                            <br></br>
                            <div className="itemSubtext">
                            {'\u00A0'} Google Drive and more...
                            </div>
                        </a>
                    </li>
                    <li>
                        <a  href="/">
                            <span className="sidebarIcon iconsColor"><FontAwesomeIcon icon={faPlusSquare}/></span>
                            {'\u00A0'} Add Power-Up...
                        </a>
                    </li>
                    <li>
                    <a href="/">
                        <span className="sidebarIcon"><FontAwesomeIcon icon={faLock}/></span>
                        <div className= "sidebarBoxContent" href="/">
                            Get Unlimited Power-Ups
                            <br></br>
                            <br></br>
                            <span className="itemSubtext">
                            Need more than one Power-Up per board? Go unlimited with Business Class!
                            </span>
                            <br></br>
                            <br></br>
                            <span className="itemSubtext">
                            <u>Try for 14 days</u>
                            </span>
                        </div>
                        </a>
                    </li>
                </ul>
                <hr></hr>
                <ul>
                    <li>
                        <a href="/">
                           <span className="sidebarIcon iconsColor"><FontAwesomeIcon icon={faListUl}/></span>
                            {'\u00A0'} Activity
                        </a >
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}
        
export default Sidebar;

