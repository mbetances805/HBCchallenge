import React from 'react';
import PropTypes from 'prop-types';

const UserPair = (props) => {
  const {pairing} = props;
  const {gifter, giftee} = pairing;

  return (
    <div className='user-pair-container'>
      <h4 id={gifter.guid}>{`${gifter.name.first} ${gifter.name.last}`}</h4>
      <h5 id={giftee.guid}>{`${giftee.name.first} ${giftee.name.last}`}</h5>
    </div>
  );
};

export default UserPair

UserPair.propTypes = {
  pairing: PropTypes.object
};
