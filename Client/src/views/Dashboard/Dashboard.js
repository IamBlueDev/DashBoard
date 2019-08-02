import React,{Component} from 'react';
import './Dashboard.scss'
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
      }
    render(){
        return (
            <div className="DashBoard">
                <div className="userBar">'>?</div>
                <div className="sideNav">
                    <div className="Logo">DashyBoard</div>
                        <div className="buttons">
                            <ul>
                                <li>Dash</li>


                                <p>Favourite</p>
                                {/*  have a list of favs ?<li>Dash</li>  */}
                               <hr></hr>
                                <li>Dash</li>
                                <p>Site Management</p>
                                <hr></hr>
                                <li>Analitics</li>
                                <p>Portfolio</p>
                                <hr></hr>
                                <li>Projects</li>
                                <hr></hr>

                            </ul>
                        </div>
                            <div className="footer">
                                hello
                            </div>
                    Dash,Analitics,Projects</div>
                <div className="content">Draw Dash Here</div>
            </div>
        )
        }
}

export default Dashboard;