import './modal.scss';

const Modal = ({ toggleModal, show, children }) => {
  const showHideClassName = show ? "image-modal--active" : "image-modal--inactive";
  return (
    <div className={`${showHideClassName} image-modal`}>
      <section className={`${showHideClassName} image-modal--outer-container`}>
        {children}
        <button type="button" onClick={()=>toggleModal(show)}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;