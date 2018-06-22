import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
  const {activeUser, users} = props;

  return (
    <div className='user-details-container'>
      {
        activeUser ? <div className='user-details-title'>{'User Information'}</div> : ''
      }
      {
        users.filter(user => { return user.guid === activeUser })
          .map(activeUser => {
            return (
              <span key={`${activeUser.name.first}-${activeUser.guid}`}>
                <span>{`Name: ${activeUser.name.first} ${activeUser.name.last}`}<br /></span>
                <span>{`Email: ${activeUser.email}`}<br /></span>
                <span>{`Phone: ${activeUser.phone}`}</span>
              </span>
            )
          }
        )
      }
    </div>
  );
};

export default User

// to populate
User.propTypes = {

};
