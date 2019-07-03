import React, { Component } from 'react';

import './Home.css'


class Home extends Component {
    render() {
        return (
            <div className="home">
                    <div className="container">
                        <div className="h2_container">
                            <h2 className="h2-1">Comedian</h2>
                            <h2 className="h2-2">Writer</h2>
                            <h2 className="h2-3">Actor</h2>
                        </div>
                    </div>
                    <div className="foot">
                        <p>© Benton Ray</p>
                    </div>
            </div>


        );
    }
}

export default Home;