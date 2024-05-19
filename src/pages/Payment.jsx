import React from 'react';
import cl from './styles/Payment.module.scss';
import PaymentForm from '../components/PaymentForm';
import ArrowBack from '../components/UI/ArrowBack';

const Payment = () => {
	return (
		<div className={cl.main}>
			<div className={cl.titleBox}>
				<ArrowBack />
				<h1 className={cl.title}>Payment</h1>
			</div>
			<div className={cl.box}>
				<PaymentForm />
			</div>
		</div>
	);
};

export default Payment;
