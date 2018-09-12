import React, { Component } from 'react';

import ProgressBar from './components/ProgressBar/ProgressBar';
import Form from './components/Form/Form';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 1,
			nameValue: '',
			emailValue: '',
			phoneValue: '',
			experienceValue: '',
			employerValue: '',
			linkValue: '',
		};
	};

	handleChangeStep = (event, step) => {
		event.preventDefault();
		if (step === 1) {
			if (this.state.nameValid === undefined) {
				this.setState({nameValid: false});
			}
			if (this.state.emailValid === undefined) {
				this.setState({emailValid: false});
			}
			if (this.state.phoneValid === undefined) {
				this.setState({phoneValid: false});
			}
			if (this.state.nameValid === true &&
				this.state.emailValid === true &&
				this.state.phoneValid === true) {
				this.setState({step: this.state.step + 1});
			}
		} else if (step === 2) {
			if (this.state.experienceValid === undefined) {
				this.setState({experienceValid: false});
			}
			if (this.state.employerValid === undefined) {
				this.setState({employerValid: false});
			}
			if (this.state.linkValid === undefined) {
				this.setState({linkValid: false});
			}
			if (this.state.experienceValid === true &&
				this.state.employerValid === true &&
				this.state.linkValid === true) {
				this.setState({step: this.state.step + 1});
			}
		}
	};

	handleInputChange = (value, input) => {
		const emailValidation = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
			phoneValidation = /^\d+$/,
			linkValidation = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

		if (input === 'name') {
			this.setState({nameValue: value}, () => {
				if (this.state.nameValue.length >= 3) {
					this.setState({nameValid: true});
				} else {
					this.setState({nameValid: false});
				}
			});
		} else if (input === 'email') {
			this.setState({emailValue: value}, () => {
				if (this.state.emailValue.match(emailValidation)) {
					this.setState({emailValid: true});
				} else {
					this.setState({emailValid: false});
				}
			});
		} else if (input === 'phone') {
			this.setState({phoneValue: value}, () => {
				if (this.state.phoneValue.match(phoneValidation) && this.state.phoneValue.length >= 5) {
					this.setState({phoneValid: true});
				} else {
					this.setState({phoneValid: false});
				}
			});
		} else if (input === 'experience') {
			this.setState({experienceValue: value}, () => {
				if (this.state.experienceValue >= 1) {
					this.setState({experienceValid: true});
				} else {
					this.setState({experienceValid: false});
				}
			});
		} else if (input === 'employer') {
			this.setState({employerValue: value}, () => {
				if (this.state.employerValue.length >= 1) {
					this.setState({employerValid: true});
				} else {
					this.setState({employerValid: false});
				}
			});
		} else if (input === 'link') {
			this.setState({linkValue: value}, () => {
				if (this.state.linkValue.match(linkValidation)) {
					this.setState({linkValid: true});
				} else {
					this.setState({linkValid: false});
				}
			});
		}
	};

	render() {
		const {
				step,

				nameValue,
				emailValue,
				phoneValue,
				experienceValue,
				employerValue,
				linkValue,

				nameValid,
				emailValid,
				phoneValid,
				experienceValid,
				employerValid,
				linkValid
			} = this.state,
			{
				handleInputChange,
				handleChangeStep,
			} = this;

		return (
			<div className="app">
				<ProgressBar step={step} />
				<Form step={step}
				      name={nameValue}
				      email={emailValue}
				      phone={phoneValue}
				      experience={experienceValue}
				      employer={employerValue}
				      link={linkValue}
				      emailValid={emailValid}
				      nameValid={nameValid}
				      phoneValid={phoneValid}
				      experienceValid={experienceValid}
				      employerValid={employerValid}
				      linkValid={linkValid}
					    onChangeStep={handleChangeStep}
					    onInputChange={handleInputChange} />
			</div>
		);
	}
}

export default App;
