import PropTypes from 'prop-types';

const ClientFullName = ({firstName, lastName}) => {
  return `${firstName}  ${lastName}`;
}

ClientFullName.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default ClientFullName;