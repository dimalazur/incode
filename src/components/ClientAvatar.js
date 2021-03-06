import React from 'react'
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';

const ClientAvatar = ({src, size}) => {
	return (
	  	<div className="avatar-holder">
	  		<Image src={src} size={size} alt="avatar" className="client-avatar" />
	  	</div>
  	);
}

ClientAvatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default ClientAvatar;