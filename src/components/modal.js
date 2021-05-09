import ReactDOM from 'react-dom'
import {connect} from 'react-redux';
import './modal.css';

const Modal = ({ show, image,handleClose }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
   return ReactDOM.createPortal(
    <div onClick={()=>handleClose()} className={showHideClassName}>
        <div onClick={(e)=>e.stopPropagation()}>
        <section className="modal-main">
        <img key={image.id} src={image.url} alt={image.Flowers}/>
      </section>
        </div>
    </div>,document.querySelector('#modal')
)
}

export default connect(null)(Modal)