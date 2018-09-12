import React from 'react';

import './Form.css';

const Form = props => {
	const {
		step,

		name,
		email,
		phone,
		experience,
		employer,
		link,

		emailValid,
		nameValid,
		phoneValid,
		experienceValid,
		employerValid,
		linkValid,

		onInputChange,
		onChangeStep,
	} = props;

	return (
		<form className="form">
			<div className={`form--first-step ${step === 1 ? 'active' : ''}`}>
				<div className="form-field">
					<input type="text"
					       value={name}
					       placeholder="Name"
					       onChange={({target}) => onInputChange(target.value, 'name')}/>
					<p
						className={`error ${nameValid !== undefined && !nameValid ? 'not-valid' : ''}`}>
						Name must have more than 3 symbols
					</p>
				</div>
				<div className="form-field">
					<input type="email"
					       value={email}
					       placeholder="Email"
					       onChange={({target}) => onInputChange(target.value, 'email')}/>
					<p className={`error ${emailValid !== undefined && !emailValid ? 'not-valid' : ''}`}>
						Enter valid email
					</p>
				</div>
				<div className="form-field">
					<input type="tel"
					       value={phone}
					       placeholder="Phone"
					       onChange={({target}) => onInputChange(target.value, 'phone')}/>
					<p className={`error ${phoneValid !== undefined && !phoneValid ? 'not-valid' : ''}`}>
						Phone must have more than 5 numerals
					</p>
				</div>
			</div>

			<div className={`form--second-step ${step === 2 ? 'active' : ''}`}>
				<div className="form-field">
					<input type="number"
					       value={experience}
					       min={1}
					       placeholder="Years of experience"
					       onChange={({target}) => onInputChange(target.value, 'experience')}/>
					<p className={`error ${experienceValid !== undefined && !experienceValid ? 'not-valid' : ''}`}>
						Experience must be at least 1 year
					</p>
				</div>
				<div className="form-field">
					<input type="text"
					       value={employer}
					       placeholder="Previous employer"
					       onChange={({target}) => onInputChange(target.value, 'employer')}/>
					<p className={`error ${employerValid !== undefined && !employerValid ? 'not-valid' : ''}`}>
						Employer must have more than 1 symbol
					</p>
				</div>
				<div className="form-field">
					<input type="text"
					       value={link}
					       placeholder="Link to LinkedIn"
					       onChange={({target}) => onInputChange(target.value, 'link')}/>
					<p className={`error ${linkValid !== undefined && !linkValid ? 'not-valid' : ''}`}>
						Enter correct URL
					</p>
				</div>
			</div>
			<button className="main-btn"
			        style={step === 3 ? {display: 'none'} : {display: 'block'}}
			        onClick={event => onChangeStep(event, step)}>
				{step === 1 ? 'Next' : step === 2 ? 'Complete application' : null}
			</button>

			<div className={`form--third-step ${step === 3 ? 'active' : ''}`}>
				<h2>Your application is complete</h2>
				<p>Name: <span>{name}</span></p>
				<p>Email: <span><a href={`mailto:${email}`}>{email}</a></span></p>
				<p>Phone: <span>{phone}</span></p>
				<p>Experience: <span>{experience} years</span></p>
				<p>Last employer: <span>{employer}</span></p>
				<p>LinkedIn: <span><a href={link} target="_blank">{link}</a></span></p>
			</div>
		</form>
	);
};

export default Form;