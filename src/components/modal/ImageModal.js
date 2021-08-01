import './modal.scss';

const Modal = ({ toggleModal, showModal, children, showButton }) => {
  const showHideModalClassName = showModal ? "image-modal--active" : "image-modal--inactive";
  const showHideButtonClassName = showButton ? "image-modal--show-button" : "image-modal--hide-button";

  return (
    <div className={`${showHideModalClassName} image-modal`}>
      <section className={`${showHideModalClassName} image-modal--outer-container`}>
        {children}
        <button className={showHideButtonClassName} type="button" onClick={()=>toggleModal(showModal)}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;