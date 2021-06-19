import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {setAddName, setAddSurname, setAddPosition, resetInputs} from '../redux/actions/inputs'

import { Button } from '../components'
import { addNote } from '../redux/actions/notes'



function Modal({ active, setActive }) {


   const dispatch = useDispatch()
   const {name, surname, position, visible} = useSelector((state) => state.inputs)
   const handleAddNote = () => {
       if (name && surname && position) {
       dispatch(addNote({
           name, 
           surname, 
           position,
           visible
       }))
       dispatch(resetInputs())
       setActive(false)
    }
   }

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={(e) => e.stopPropagation()}>
                <div className="modal__content-title">
                    <h3>Добавить пользователя</h3>
                    <svg onClick={() => setActive(false)}
                    height="13px" viewBox="0 0 311 311.07733" width="13px" xmlns="http://www.w3.org/2000/svg">
                        <path d="m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0" />
                        <path d="m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0" />
                    </svg>
                </div>
                <div className="modal__content-suptitle">
                    <input 
                        value={name} 
                        type="text" 
                        placeholder="Имя"
                        onChange={e=> dispatch(setAddName(e.target.value))}
                    />
                    <input 
                        value={surname} 
                        type="text" 
                        placeholder="Фамилия"
                        onChange={e => dispatch(setAddSurname(e.target.value))}
                    />
                    <input 
                        value={position} 
                        type="text" 
                        placeholder="Должность"
                        onChange={e => dispatch(setAddPosition(e.target.value))}
                    />
                </div>
                <div className="modal__content-button">
                    <Button 
                    onClick={() => setActive(false)} 
                    closeModal>
                        Закрыть
                    </Button>

                    <Button 
                    onClick={handleAddNote}
                    addNote>
                        Добавить
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Modal
