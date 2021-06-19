import React from 'react'
import classNames from 'classnames'

function Button({ onClick, children, openModal, closeModal, addNote, editNote, deleteNote }) {
  return (
    <button className={classNames('button',
        {'button__openmodal' : openModal},
        {'button__closemodal': closeModal },
        {'button__addnote': addNote },
        {'button__edit' : editNote},
        {'button__delete' : deleteNote}
        )}
        onClick={onClick}>
        {children}
    </button>
  )
}

export default Button
