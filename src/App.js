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

	handleValidate = (input) => {
		const emailValidation = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
			phoneValidation = /^\d+$/,
			linkValidation = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

		if (input === 'name') {
			if (this.state.nameValue.length >= 3) {
				this.setState({nameValid: true});
			} else {
				this.setState({nameValid: false});
			}
		}
		if (input === 'email') {
			if (this.state.emailValue.match(emailValidation)) {
				this.setState({emailValid: true});
			} else {
				this.setState({emailValid: false});
			}
		}
		if (input === 'phone') {
			if (this.state.phoneValue.match(phoneValidation) && this.state.phoneValue.length >= 5) {
				this.setState({phoneValid: true});
			} else {
				this.setState({phoneValid: false});
			}
		}
		if (input === 'experience') {
			if (this.state.experienceValue >= 1) {
				this.setState({experienceValid: true});
			} else {
				this.setState({experienceValid: false});
			}
		}
		if (input === 'employer') {
			if (this.state.employerValue.length >= 1) {
				this.setState({employerValid: true});
			} else {
				this.setState({employerValid: false});
			}
		}
		if (input === 'link') {
			if (this.state.linkValue.match(linkValidation)) {
				this.setState({linkValid: true});
			} else {
				this.setState({linkValid: false});
			}
		}
	};

	handleChangeStep = event => {
		event.preventDefault();
		if (this.state.emailValid === true) {
			this.setState({step: this.state.step + 1});
		}
	};

	handleInputChange = (value, input) => {
		if (input === 'name') {
			this.setState({nameValue: value});
		} else if (input === 'email') {
			this.setState({emailValue: value});
		} else if (input === 'phone') {
			this.setState({phoneValue: value});
		} else if (input === 'experience') {
			this.setState({experienceValue: value});
		} else if (input === 'employer') {
			this.setState({employerValue: value});
		} else if (input === 'link') {
			this.setState({linkValue: value});
		} else {
			return null;
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
				handleValidate
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
				      onValidate={handleValidate}
				      onChangeStep={handleChangeStep}
				      onInputChange={handleInputChange} />
			</div>
		);
	}
}

export default App;
