import React from 'react';
import './ErrorForm.scss';

const ErrorForm = ({ reason, message }) => {
	return (
		<>
			{reason && (
				<span className='err'>
					{message}
				</span>
			)}
		</>
	);
};

export default ErrorForm;
