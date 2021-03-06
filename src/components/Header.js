import React from 'react';
import trelloLogo from '../trello-logo-blue.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import trelloIcon from '../trello-icon.svg'
import phLogo from '../ph_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faInfoCircle, faBell, faTh, faHome, faSearch, faChevronDown, faStar, faUserFriends, faConciergeBell, faEllipsisH } from '@fortawesome/free-solid-svg-icons'


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSidebarVisible: false,
            butlerMargin: '4px'
        };
        this.setSidebarInvisibile = this.setSidebarInvisibile.bind(this);
    }

    setSidebarInvisibile() {
        this.setState({
            isSidebarVisible: false,
            butlerMargin: '4px'
        }
        );
    }
    toggleButlerMargin () {

    }

    render() {
        return (
        <>
        <div className="header">
            <div className="col-md-6 col-lg-5 col-xl-5 headerColLeft">
                <button className="headerButton">
                    <span className="icon"><FontAwesomeIcon icon={faTh}/></span>
                </button>
                <button className="headerButton homeButton">
                    <span className="icon"><FontAwesomeIcon icon={faHome}/></span>
                </button>
                <button className=" headerButton headerButtonSearch">
                    <img src={trelloIcon} height="20px"></img>
                    <span className="buttonText">{'\u00A0'}Boards</span>
                </button>
                <button className="headerButton headerButtonSearch">
                    <span className="searchButtonText">Jump to...{'\u00A0'}</span>
                    <span className="icon"><FontAwesomeIcon icon={faSearch}/></span>
                </button>

            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 logoDiv">
                <a href="/"><img src={trelloLogo}></img></a>
            </div>
            <div className="col-md-4 col-lg-5 col-xl-5 headerColRight">
                <button className="headerButton">
                    <span className="icon"><FontAwesomeIcon icon={faPlus}/></span>
                </button>
                <button className="headerButton infoButton">
                    <span className="icon"><FontAwesomeIcon icon={faInfoCircle}/></span>
                </button>
                <button className="headerButton">
                    <span className="icon"><FontAwesomeIcon icon={faBell}/></span>
                </button>
                <button className="headerButton profile">
                    <img src={phLogo} height="20px"></img> 
                </button>
            </div>
        </div>
        <div className="subHeader">
            <div className="col-5 col-md-8 headerColLeft subheaderLeft">
                <button className=" headerButton headerButtonSearch">
                    <span className="buttonText">Boards {'\u00A0'}</span>
                    <span className="icon"><FontAwesomeIcon icon={faChevronDown}/></span>
                </button>
                <button className="headerButton boardName">Board Name</button>
                <button className="headerButton">
                <span className="icon">
                    <FontAwesomeIcon icon={faStar}/>
                </span>
                </button>
                <span className="verticalLine"></span>
                <button className="headerButton">Prairie Health</button>
                <span className="verticalLine"></span>
                <button className=" headerButton headerButtonSearch">
                    <span className="icon"><FontAwesomeIcon icon={faUserFriends}/></span>
                    <span className="buttonText">{'\u00A0'} Team Visible</span>
                </button>
                <span className="verticalLine"></span>
                <button className="headerButton profile">
                <img src={phLogo} height="20px"></img> 
                </button>
                <button className="headerButton">Invite</button>

            </div>
            <div className="col-7 col-md-4 headerColRight">
                <button className=" headerButton headerButtonSearch" style={{marginRight: this.state.butlerMargin}}>
                    <span className="icon"><FontAwesomeIcon icon={faConciergeBell}/></span>
                    <span className="buttonText butlerText"> {'\u00A0'} Butler</span>
                </button>
                <button className="headerButton headerButtonSearch" onClick={() => this.setState({isSidebarVisible: true, butlerMargin: '14rem'})}>
                    <span className="icon"><FontAwesomeIcon icon={faEllipsisH}/></span>
                    <span className="buttonText menuText">{'\u00A0'} Show Menu</span>
                </button>
                {this.state.isSidebarVisible ? <Sidebar setSidebarInvisibile={this.setSidebarInvisibile}/> : null }
            </div>
        </div>
        </>

    );
        }
}

export default Header;
