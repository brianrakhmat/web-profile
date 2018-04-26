import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
      <div> </div>
        <div className="footer-1">
          <img src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/23131600_2230394460319344_1637017038522797176_n.jpg?_nc_cat=0&oh=533f218abc782c3943341d5328ba1b3c&oe=5B98C91C" />
        </div>
        <div className="footer-2">
          <h3>Contact</h3>
          <p><a href="mailto:brianetlab@gmail.com?Subject=Hello%20there!" target="_top"><i className="fa fa-envelope i-hov" aria-hidden="true"/> brianetlab@gmail.com</a></p>
          <p><a href="https://linkedin.com/in/brianrakhmat" target="_blank" rel="noopener noreferrer" className="footer-link"><i className="fa fa-linkedin-square i-hov" aria-hidden="true"/> Linkedin</a></p>
          <p><a href="https://github.com/brianrakhmat" target="_blank" rel="noopener noreferrer"><i className="fa fa-github i-hov" aria-hidden="true"/> Github</a></p>
          <h3>This Site</h3>
          <p>Made with ❤️ by <b>Brian</b> with <b>ReactJS</b> </p></div>
      </div>
    );
  }
}

export default Footer;