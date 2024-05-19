import React, { forwardRef } from 'react';
import InputMask from 'react-input-mask';
import cl from './PhoneInput.module.scss';

const PhoneInput = forwardRef(({ onChange, value, ...props }, ref) => {
	return (
		<InputMask
			className={cl.mask}
			ref={ref}
			onChange={onChange}
			value={value}
			{...props}
		/>
	);
});

export default PhoneInput;
