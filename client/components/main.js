import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {UserPair, User} from './index';

class Main extends Component {
  constructor (props) {
    super(props);
    this.state = {
      pairs: [],
      showUserDetails: false,
      activeUser: ''
    };
    this.generatePairing = this.generatePairing.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.toggleUserDetails = this.toggleUserDetails.bind(this);
  }

  generatePairing = () => {
    const {users} = this.props.userList;
    this.setState({ pairs: [] });
    let partnerList = this.shuffle(users.slice(0));
    let userPairs = [];
    for (let i = 0; i < partnerList.length; i++) {
      let partnerIndex = (i + 1) % partnerList.length;
      userPairs.push({'gifter': partnerList[i], 'giftee': partnerList[partnerIndex]});
    }
    this.setState({ pairs: [...this.state.pairs, ...userPairs], isPaired: true });
  };

  shuffle = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      let index = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[index]] = [arr[index], arr[i]];
    }
    return arr;
  };

  toggleUserDetails = (evt) => {
    this.setState({ activeUser: evt.target.id });
    this.setState({ showUserDetails: true });
  };

  render () {
    let key = 1;
    return (
      <div>
        <h1>{'Secret Santa Application'}</h1>
        <p>{'Click the button  for a list of secret santa pairings.'}</p>
        <hr />
        {
          this.state.isPaired ?
          <button
            className='generate-pairing-button'
            onClick={this.generatePairing}
            disabled
          >
            {'Generate Pairings'}
          </button> :
          <button
            className='generate-pairing-button'
            onClick={this.generatePairing}
          >
            {'Generate Pairings'}
          </button>
        }
        <div className='main-container'>
          <div className='user-list-legend'>
            <span>{'Legend: '}</span>
            <span>{'Gifter '}</span>
            <span className='giftee-legend'>{'Giftee'}</span>
          </div>
          <span className='user-list-container'>
            {
              this.state.pairs.map(pair => {return (
                <Link
                  to='/'
                  key={key++}
                  onClick={this.toggleUserDetails}
                  >
                    <UserPair pairing={pair} />
                  </Link>
              )})
            }
          </span>
          {
              this.state.showUserDetails ?
                <User users={this.props.userList.users} activeUser={this.state.activeUser} /> :
                <div></div>
          }
        </div>
      </div>
    );
  }
};

export default Main

Main.propTypes = {
  children: PropTypes.object
};
