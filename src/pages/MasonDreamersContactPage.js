import React from 'react';

import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';

import MasonDreamersFrame from '../components/MasonDreamersFrame';
import EnhancedTextField from '../components/EnhancedTextField';

import SwipeableViews from 'react-swipeable-views';

import Recaptcha from 'react-recaptcha';


//recaptcha hooks
const captchaLoadCallback = () => {};
const verifyCaptchaCallback = (response) => {
	window.atVAl(true);
};

class MasonDreamersContactPage extends React.Component
{

	constructor(props) {
		super(props);
		this.state = {
			firstNameField : '',
			lastNameField : '',
			emailField : '',
			mailBodyField : '',
			errorDialogOpen : false,
			errorDialogText : '',
			currentView : 0,
			humanVerified : false,
		}
		this.validatingInputs = [];
	} 

	componentWillMount() {
		window.atVAl = (verified) => {
			this.setState({humanVerified : verified});
		}
	}

	handleSubmitTap = () => {
		if(this.formIsValid()) {
			this.sendValidMail();
		} else {
			this.setState({
				errorDialogOpen: true,
				errorDialogText: 'Please fix the errors on the form.',
			});
		}
	}

	handleSendAnotherTap = () => {
		this.resetForm();
		this.setState({
			currentView: 0
		});
	}

	resetForm() {
		this.setState({
			firstNameField : '',
			lastNameField : '',
			emailField : '',
			mailBodyField : '',
			humanVerified: false
		});
	}


	sendValidMail() {
		let toAddress = "gmumasondreamers@gmail.com";

		let subject = "Contact From " + this.state.firstNameField + ' ' + this.state.lastNameField; 

		let body = 'Begin message from ' + this.state.emailField + ':\n\n' + this.state.mailBodyField; 

		let host = window.location.protocol + "//" +
					window.location.hostname +
					(window.location.port ? ":" + window.location.port : "");

		let action = "/SendMasonDreamersMail";

		let parameters = "?from=" + encodeURI(this.state.emailField) + 
						"&to=" + encodeURI(toAddress) + 
						"&subject=" + encodeURI(subject) + 
						"&mailBody=" + encodeURI(body);

		let fullRequest = host + action + parameters;
		var that = this;

		fetch(fullRequest, {
			method : "GET",
		}).then(function(res) {
			if (res.ok) {
				res.text().then(function(text) {
					that.setState({
						currentView: 1
					});
				}); 
			} else if (res.status === 401) {
				this.setState({
					errorDialogOpen: true,
					errorDialogText: 'Oops! You are not authorized.',
				});
			}
		}, function(e) {
			this.setState({
				errorDialogOpen: true,
				errorDialogText: "Error submitting form: " + e,
			});
		});
	}

	handleTextFieldChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
	}

	registerValidatingInput = (inputField) => {
    	this.validatingInputs.indexOf(inputField) < 0 && this.validatingInputs.push(inputField);
	}

	formIsValid() {
		var validForm = true;
		this.validatingInputs.forEach(function(input) {
			if(!input.fieldIsValid()){
				validForm = false;
			}
		});
		return validForm;
	}


	handleToggleErrorDialog = () => {
		this.setState(prevState => ({errorDialogOpen: !prevState.errorDialogOpen}));
	};

	render() {
		return(
      		<MasonDreamersFrame>

				<SwipeableViews index={this.state.currentView}>
					<div style={{overflow:"hidden"}}>
					    <EnhancedTextField name="firstNameField" 
					    	value={this.state.firstNameField}
					    	hintText="First Name" 
					    	floatingLabelText="First Name" 
					    	isRequired={true}
							fullWidth={true} 
					    	requiredErrorText="Your name is required"
					    	onChange={this.handleTextFieldChange} 
					    	onFormRegister={this.registerValidatingInput}/>

					    <EnhancedTextField name="lastNameField" 
					    	value={this.state.lastNameField}
					    	hintText="Last Name" 
					    	floatingLabelText="Last Name" 
					    	isRequired={true}
							fullWidth={true} 
					    	requiredErrorText="Your last name is required"
					    	onChange={this.handleTextFieldChange}
					    	onFormRegister={this.registerValidatingInput}/>

					    <EnhancedTextField name="emailField" 
					    	value={this.state.emailField}
					    	hintText="Email" 
					    	floatingLabelText="Email" 
							fullWidth={true} 
					    	isRequired={true}
					    	validationType="email"
					    	formatErrorText="Please enter a valid email address"
					    	requiredErrorText="Your contact email is required"
							onChange={this.handleTextFieldChange}
					    	onFormRegister={this.registerValidatingInput}/>

					    <EnhancedTextField name="mailBodyField" 
					    	value={this.state.mailBodyField}
					    	hintText="Comment"  
					    	floatingLabelText="Comment"
							multiLine={true}
							rows={4}
					    	isRequired={true}
					    	requiredErrorText="A comment is required"
							fullWidth={true}
							onChange={this.handleTextFieldChange}
					    	onFormRegister={this.registerValidatingInput}/>

					    {this.state.humanVerified ? 
							<RaisedButton
								label="Submit"
								labelPosition="before"
								onTouchTap={this.handleSubmitTap}
								primary={true}
								icon={<CommunicationEmail />}/>
					    	: 
							<Recaptcha
								style={{maxWidth: '100%'}}
	          					render="explicit"
								sitekey="6Lfgbw4UAAAAALo2c-sShjsMqKg4AR1j4I3yFA6D" 
								verifyCallback={verifyCaptchaCallback}
	          					onloadCallback={captchaLoadCallback} />
					    }

					</div>

					<div>
						<div style={{
							padding:10, 
							font: '17px/1 "Oxygen", sans-serif',
							color: '#7c7c7c',
							lineHeight: 1.5,
							fontWeight: 'bold'
							}} >
							Message sent succesfully!
						</div>

						<RaisedButton
							label="Go Back"
							labelPosition="before"
							onTouchTap={this.handleSendAnotherTap}
							primary={true}/>
					</div>

				</SwipeableViews>

		        <Dialog
		          actions={[
				      <FlatButton
				        label="Ok"
				        primary={true}
				        onTouchTap={this.handleToggleErrorDialog}
				      />,
				    ]}
		          modal={false}
		          open={this.state.errorDialogOpen}
		        >
		          {this.state.errorDialogText}
		        </Dialog>

      		</MasonDreamersFrame>
		);
	}
}

export default MasonDreamersContactPage;

