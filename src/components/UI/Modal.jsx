import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CartContext } from '../../services/CartContext';
import cl from './Modal.module.scss';

const Modal = ({ children }) => {
	const { setShowModal, showModal } = useContext(CartContext);

	return ReactDOM.createPortal(
		<div className={cl.modal} onClick={() => setShowModal(false)}>
			<div className={cl.modalContent} onClick={e => e.stopPropagation()}>
				<div className={cl.modalClose} onClick={() => setShowModal(false)}>
					&times;
				</div>
				{children}
			</div>
		</div>,
		document.body
	);
};

export default Modal;
