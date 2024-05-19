import React from 'react';
import { Link } from 'react-router-dom';
import cl from './Button.module.scss';

const Button = ({ children, className, ...props }) => {
	return (
		<Link {...props} className={`${cl.button} ${className}`}>
			{children}
		</Link>
	);
};

export default Button;
