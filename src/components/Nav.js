import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Nav extends Component {
  state = {
    navInfo: [],
    // navInfo: [
    //   {
    //     url: '/c/womens_feature/newarrivals',
    //     label: 'for Women',
    //   },
    //   {
    //     url: '/c/mens_feature/newarrivals',
    //     label: 'for Men',
    //   },
    //   {
    //     url: '/c/girls_feature/newarrivals',
    //     label: 'for Girls',
    //   },
    //   {
    //     url: '/c/boys_feature/newarrivals',
    //     label: 'for Boys',
    //   },
    // ],
  };

  componentDidMount() {
    axios
      .get('https://www.jcrew.com/data/v1/US/navigation')
      .then(response => {
        console.log(response);
        this.setState({ navInfo: response.data.nav[0].navGroups[0].navItems });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="nav">
        <div className="nav-list">
          {this.state.navInfo.map(item => (
            <Link to={item.url} key={item.label}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
