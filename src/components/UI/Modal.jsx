import React, { useContext, forwardRef } from 'react';
import ReactDOM from 'react-dom';
import { CartContext } from '../../services/CartContext';
import cl from './Modal.module.scss';

const Modal = forwardRef(({ children, isOpen, setIsOpen }, ref) => {
	const { setShowModal } = useContext(CartContext);

	const onClose = () => {
		if (isOpen) setIsOpen(false);
		setShowModal(false);
	};

	return ReactDOM.createPortal(
		<div ref={ref} className={cl.modal} onClick={onClose}>
			<div className={cl.modalContent} onClick={e => e.stopPropagation()}>
				<div className={cl.modalClose} onClick={onClose}>
					&times;
				</div>
				{children}
			</div>
		</div>,
		document.body
	);
});

export default Modal;
