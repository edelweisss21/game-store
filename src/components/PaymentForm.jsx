import React, { useRef } from 'react';
import Input from './UI/Input';
import ErrorForm from './UI/ErrorForm';
import { useNavigate } from 'react-router-dom';
import cl from './styles/PaymentForm.module.scss';
import { useForm } from 'react-hook-form';
import PhoneInput from './UI/PhoneInput';

const PaymentForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
		reset,
	} = useForm({
		mode: 'onBlur',
	});

	const navigate = useNavigate();
	const number = watch('number') || '';
	const phoneInputRef = useRef(null);

	const onHandleSubmit = data => {
		console.log('data', data);
		if (Object.keys(errors).length === 0) {
			navigate('/game-store/completed');
		}
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onHandleSubmit)} className={cl.form}>
			<div className={cl.formBox}>
				<div className={cl.formName}>
					<label htmlFor='fName'>First name:</label>
					<Input
						{...register('firstName', {
							required: 'First name must be required',
							maxLength: { value: 40, message: 'Max 40 characters' },
						})}
						id='fName'
						type='text'
					/>
					<ErrorForm
						reason={errors?.firstName}
						message={errors.firstName?.message}
					/>
					<label htmlFor='lName'>Last name:</label>
					<Input
						{...register('lastName', {
							required: 'Last name is required',
							maxLength: {
								value: 40,
								message: 'Max 40 characters',
							},
						})}
						type='text'
						id='lName'
					/>
					<ErrorForm
						reason={errors?.lastName}
						message={errors.lastName?.message}
					/>
				</div>
				<div className={cl.formDates}>
					<label htmlFor='email'>E-mail:</label>
					<Input
						{...register('email', {
							required: 'Email is require failed',
							pattern: {
								value:
									/^(([^&lt;&gt;()\[\]\\.,;:\s@"]+(\.[^&lt;&gt;()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: 'Please enter correct email address',
							},
						})}
						placeholder='example@ex.com'
						type='text'
						id='email'
					/>
					<ErrorForm reason={errors?.email} message={errors.email?.message} />
					<label htmlFor='number'>Phone number:</label>
					<PhoneInput
						id='number'
						value={number}
						onChange={value => setValue('number', value)}
						mask='+48 (999) 999-999'
						ref={phoneInputRef}
						placeholder='+48 (XXX) XXX-XXX'
						{...register('number', {
							required: 'Please enter a mobile number',
						})}
					/>
					<ErrorForm reason={errors?.number} message={errors.number?.message} />
				</div>
			</div>
			<div className={cl.formAddress}>
				<label htmlFor='delivery'>Delivery address:</label>
				<Input
					type='text'
					{...register('delivery', {
						required: 'Please enter delivery address',
					})}
					id='delivery'
				/>
				<ErrorForm
					reason={errors?.delivery}
					message={errors.delivery?.message}
				/>
			</div>
			<button className={cl.button} type='submit'>
				Make an order
			</button>
		</form>
	);
};

export default PaymentForm;
