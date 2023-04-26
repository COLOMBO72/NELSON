import React from "react"
import './Modal.css'

const ModalContent = (props) => {
    return (
        <div className="modal__content" onClick={e => e.stopPropagation()}>
            {/* <input className="modal__input" type={"file"} onChange={props.onChange} /> */}
            <form method="post" enctype="multipart/form-data">
                <label class="input-file" >
                    <input type="file" name="file" onChange={props.onChange} />
                    <span>Выберите файл</span>
                </label>
            </form>
        </div >
    )
}

const Modal = ({ active, setActive, onChange }) => {
    return (
        <active>
            <div className={active ? "modal" : null} onClick={() => setActive(false)}>
                {active ? <ModalContent onChange={onChange} /> : null}
            </div>
        </active>
    )
}

export default Modal;