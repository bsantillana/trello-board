import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sidebar(props) {

    return (
        <>
        <div className="sidebarContainer">
            <div className="sidebarHeader">
                <h3>Menu
                    <button className="exitSidebar" onClick={props.setSidebarInvisibile}>X</button>
                </h3>
                <hr></hr>
            </div>
            <div className="sidebarContent">
                <ul>
                    <li>
                        <a href="/">
                            About this board
                            <br></br>
                            <span className="itemSubtext">
                                Add a description to your board
                            </span>
                        </a >
                    </li>
                    <li>
                        <a href="/">
                            Change Background
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Search Cards
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            Stickers
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            More
                        </a>
                    </li>
                    <hr></hr>
                    <li>
                        <a href="/"> Butler
                        </a>
                    </li>
                </ul>
                <hr></hr>
                <ul>
                    <li>
                        <a href="/">
                            Power-Ups
                            <br></br>
                            <span className="itemSubtext">
                                Google Drive and more...
                            </span>
                        </a >
                    </li>
                    <li>
                        <a  href="/">
                            Add Power Up...
                        </a>
                    </li>
                    <li>
                        <a className= "sidebarBoxContent" href="/">
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
                        </a>
                    </li>
                </ul>
                <hr></hr>
                <ul>
                    <li>
                        <a href="/">
                           Activity
                        </a >
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
}
        
export default Sidebar;

