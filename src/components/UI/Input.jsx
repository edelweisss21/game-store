import React from 'react';
import cl from './Input.module.scss';

const Input = React.forwardRef(({ ...props }, ref) => {
	return <input className={cl.input} ref={ref} {...props} />;
});

export default Input;
