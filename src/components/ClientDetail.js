import React from 'react';
import PropTypes from 'prop-types';
import ClientAvatar from './ClientAvatar';
import ClientFullName from './ClientFullName';
import { Grid, Header, Icon } from 'semantic-ui-react';


const ClientDetail = ({ client }) => {

	return (
	    <React.Fragment>
			<Grid columns={2} >
				<Grid.Row>
					<Grid.Column computer={4} tablet={6} mobile={16}>
						<ClientAvatar src={client.general.avatar} size="small" />
					</Grid.Column>

					<Grid.Column computer={12} tablet={10} mobile={16} >

						<div className="client-card-info">
						<Header as="h3">
				        	<ClientFullName 
					        	firstName={client.general.firstName} 
				        		lastName={client.general.lastName} 
				        	/>
					    </Header>
					    <div className="">
					    	<div className="info-holder info-job">
					    		<div className="job">{client.job.company}</div>
					            <div className="job">{client.job.title}</div>
					    	</div>
					    	<div className="info-holder info-contact">
					    		<div className="contact"><Icon name="mail outline" /> {client.contact.email}</div>
					            <div className="contact"><Icon name="phone"/> {client.contact.phone}</div>
					    	</div>
					    	<div className="info-holder info-address">
					            <div className="address"><Icon name="address card outline" />
						            {client.address.country} {client.address.city} {client.address.street}
					            </div>
					            <div className="address"><Icon name="address card outline" />{client.address.zipCode}</div>
					    	</div>
					        
					    </div>
							</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>
	     
	    </React.Fragment>
	);
    
}

ClientDetail.propTypes = {

	client: PropTypes.shape({
				    	address: PropTypes.shape({
				      	street: PropTypes.string,
				      	city: PropTypes.string,
				      	zipCode: PropTypes.string,
				      	country: PropTypes.string
				    }),
				    	contact: PropTypes.shape({
				      	email: PropTypes.string,
				      	phone: PropTypes.string
				    }),
				    	general: PropTypes.shape({
				      	avatar: PropTypes.string,
				      	firstName: PropTypes.string,
				      	lastName: PropTypes.string
				    }),
				    	job: PropTypes.shape({
				      	company: PropTypes.string,
				      	title: PropTypes.string
				    }),
				    id: PropTypes.string

  }).isRequired
};

export default ClientDetail;




