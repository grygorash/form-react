import React from 'react';

import './ProgressBar.css';

const ProgressBar = props => {
	const {step} = props;
	return (
		<div className="progress">
			<div className={`progress--circle ${step === 1 || step === 2 || step === 3 ? 'active' : ''}`} />
			<div className={`progress--circle ${step === 2 || step === 3 ? 'active' : ''}`} />
			<div className={`progress--circle ${step === 3 ? 'active' : ''}`} />
		</div>
	);
};

export default ProgressBar;