import React, { Component } from 'react';

class Welcome extends Component {
    render(){
        return (
            <div className="Welcome section">

                <h1 className="welcome-intro"><strong>Hi! </strong> My Name is <strong>Brian Rakhmat Aji</strong>
                <p>I'm Informatics Engineering Student at UIN Sunan Kalijagga Yogyakarta</p>
                <br/>
                <a href="https://linkedin.com/in/brianrakhmat" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square i-hov" aria-hidden="true"/></a> <a href="https://github.com/brianrakhmat" target="_blank" rel="noopener noreferrer"><i className="fa fa-github i-hov" aria-hidden="true"/></a>  <a href="mailto:brianetlab@gmail.com?Subject=Hello%20there!" target="_top"><i className="fa fa-envelope i-hov" aria-hidden="true"/></a>
                <br/>

                </h1>
                <img src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/23131600_2230394460319344_1637017038522797176_n.jpg?_nc_cat=0&oh=533f218abc782c3943341d5328ba1b3c&oe=5B98C91C" className="main-pic"/>
            </div>
        );
    }
}

export default Welcome;