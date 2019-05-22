import React, {Component} from "react"

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CommunicationEmail from '@material-ui/icons/Email';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import SwipeableViews from 'react-swipeable-views';
import Loading from 'react-loading';


import {
	EnhancedTextField
} from 'kokolib';

class LobbyForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			nameField : '',
			phoneField : '',
			emailField : '',
			zipField : '',
			expField : 0,
			otherExpField : '',
			isLoading: false,
			currentView : 0,
			errorDialogOpen: false,
			expSelectErrorText: '',
		}
		this.validatingInputs = [];
	}

	handleSubmitTap = () => {
		if(this.formIsValid()) {
          	this.setState({isLoading:true});
			this.sendLobbyForm();
		} else {
			this.setState({
				errorDialogOpen: true,
				errorDialogText: 'Please fix the errors on the form.',
			});
		}
	};

	handleSendAnotherTap = () => {
		this.resetForm();
		this.setState({
			currentView: 0
		});
	}

	resetForm() {
		this.setState({
			nameField : '',
			phoneField : '',
			emailField : '',
			zipField : '',
			expField : 0,
			otherExpField : '',
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

		if(this.state.expField.length <= 0 || this.state.expField === 0) {
			validForm = false;
			this.setState({expSelectErrorText: "This is required."});

		}

		return validForm;
	}


	handleToggleErrorDialog = () => {
		this.setState(prevState => ({errorDialogOpen: !prevState.errorDialogOpen}));
	};


	sendLobbyForm() {
		let host = window.location.protocol + "//" +
					window.location.hostname +
					(window.location.hostname.toLowerCase().indexOf('localhost') >= 0 ? ":4000" :
						(window.location.port ? ":" + window.location.port : ""));

		let action = "/SendLobbyForm";

		let parameters = "?name=" + encodeURI(this.state.nameField) +
						"&email=" + encodeURI(this.state.emailField) +
						"&phone=" + encodeURI(this.state.phoneField) +
						"&zip=" + encodeURI(this.state.zipField) +
						"&exp=" + encodeURI(this.state.expField) +
						"&otherExp=" + encodeURI(this.state.otherExpField);

		let fullRequest = host + action + parameters;
		var that = this;

		fetch(fullRequest, {
			method : "GET",
		}).then(function(res) {
			if (res.ok) {
				res.text().then(function(text) {
					that.setState({
						isLoading: false,
						currentView: 1
					});
				});
			} else if (res.status === 401) {
				this.setState({
					isLoading:false,
					errorDialogOpen: true,
					errorDialogText: 'Oops! You are not authorized.',
				});
			}
		}, function(e) {
			this.setState({
				isLoading:false,
				errorDialogOpen: true,
				errorDialogText: "Error submitting form: " + e,
			});
		});
	}

	handleLobbyExpDropdownChange = (event, index, value) => {
		this.setState({
			expField: value,
		});
	};


	render() {
		return(
			<Paper  style={{padding:15}} elevation={3}>

				<h1>
					Mason DREAMers Rapid Response Team
				</h1>

				<p>
					Thank you for signing up to join Mason DREAMers' Rapid Response Team!
					Please fill out the following information so we can reach out to
					you as bills are moving in Congress and during the 2018 Virginia
					Legislative Session. We will also contact you on events we have
					going on and ways you can support the immigrant rights movements.
				</p>

				<p>
					Now, more than ever, we need to put pressure at all levels of government
					to ensure undocumented immigrants are protected and given an opportunity
					at pursuing their dreams. We need to continue to remain informed and engaged.
				</p>

				<p>
					By signing up, you will join our rapid response team and also be included
					in our emailing listserv for future events and trainings.
				</p>

				<p>
					If you have any questions, reach out to Rodrigo via email <a href="mailto:rvelasqu@gmu.edu">rvelasqu@gmu.edu</a>
				</p>
				<SwipeableViews index={this.state.currentView}>
					<div style={{overflow:"hidden"}}>

					    <EnhancedTextField name="nameField"
					    	value={this.state.nameField}
					    	helperText="Name"
					    	floatingLabelText="Name"
					    	isRequired={true}
							fullWidth={true}
					    	requiredErrorText="Your name is required"
					    	onChange={this.handleTextFieldChange}
					    	onFormRegister={this.registerValidatingInput}/>


					    <EnhancedTextField name="emailField"
					    	value={this.state.emailField}
					    	helperText="Email address"
					    	floatingLabelText="Email address"
							fullWidth={true}
					    	isRequired={true}
					    	validationType="email"
					    	formatErrorText="Please enter a valid email address"
					    	requiredErrorText="Your contact email is required"
							onChange={this.handleTextFieldChange}
					    	onFormRegister={this.registerValidatingInput}/>

					    <EnhancedTextField name="phoneField"
					    	value={this.state.phoneField}
					    	mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
					    	className="phoneInput"
					    	helperText="Phone number (optional, but really helpful)"
					    	floatingLabelText="Phone number (optional, but really helpful)"
					    	isRequired={false}
							fullWidth={true}
					    	onChange={this.handleTextFieldChange}
					    	onFormRegister={this.registerValidatingInput}/>


					    <EnhancedTextField name="zipField"
					    	value={this.state.zipField}
					    	helperText="Zip Code"
					    	floatingLabelText="Zip Code"
					    	mask={[/\d/, /\d/, /\d/, /\d/, /\d/]}
							fullWidth={true}
					    	isRequired={true}
					    	validationType="numeric"
					    	formatErrorText="Please enter a valid zip code"
					    	requiredErrorText="Your zip code is required"
							onChange={this.handleTextFieldChange}
					    	onFormRegister={this.registerValidatingInput}/>


{/*
						<Select
							name="expField"
							value={this.state.expField}
							onChange={this.handleLobbyExpDropdownChange}
							fullWidth={true}
							errorText={this.state.expSelectErrorText}
							floatingLabelText="Do you have lobbying experience?"  >
							{[
								<MenuItem key={1} value={"Yes"} >Yes</MenuItem>,
								<MenuItem key={2} value={"No"} >No</MenuItem>,
								<MenuItem key={3} value={"Other"} >Other</MenuItem>,
							]}
						</Select>

						 */}
        <FormControl>
          <Select
						value={this.state.expField}
						onChange={this.handleLobbyExpDropdownChange}
            input={<Input name="expField" id="expField" />} >
							<MenuItem value={"Yes"} >Yes</MenuItem>
							<MenuItem value={"No"} >No</MenuItem>
							<MenuItem value={"Other"} >Other</MenuItem>
          </Select>
          <FormHelperText>Do you have lobbying experience?</FormHelperText>
        </FormControl>
			<br />

						{this.state.expField === "Other" &&
						    <EnhancedTextField name="otherExpField"
						    	value={this.state.otherExpField}
						    	helperText="If other, please clarify"
						    	floatingLabelText="If other, please clarify"
								fullWidth={true}
						    	isRequired={false}
								onChange={this.handleTextFieldChange}/>
						}

						<div style={{textAlign:'left', display:(this.state.isLoading ? "" : "none")}}>
							<div style={{width:64,height:64,marginLeft:'auto',marginRight:'auto'}}>
								<Loading type='spinningBubbles' color='rgb(0, 105, 64)' />
							</div>
						</div>
                        {!this.state.isLoading &&
							<Button
								label="Submit"
								color="primary"
								onClick={this.handleSubmitTap} >
								Submit
							</Button>
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
							Thank you for your response!
						</div>

						<Button
							label="Go Back"
							color="primary"
							onClick={this.handleSendAnotherTap} >
							Go Back
						</Button>
					</div>
				</SwipeableViews>

		      <Dialog onClose={this.handleToggleErrorDialog}
      				open={this.state.errorDialogOpen}
							aria-labelledby="dialog-title" >
		        <DialogTitle id="dialog-title">Error</DialogTitle>

	          <DialogContent>
	            <DialogContentText id="alert-dialog-description">
			          {this.state.errorDialogText}
	            </DialogContentText>
	          </DialogContent>

	          <DialogActions>
	            <Button onClick={this.handleToggleErrorDialog} color="primary" autoFocus>
	              Ok
	            </Button>
	          </DialogActions>

		      </Dialog>


			</Paper>
		);
	}
}


export default LobbyForm;
