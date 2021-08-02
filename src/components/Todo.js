import { useState } from 'react'
import Modal from './Modal'
import Backdrop from './Backdrop'

function Todo (props) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function handleDelete () {
    setModalIsOpen(true)
  }

  function handleCloseModal () {
    setModalIsOpen(false)
  }

  function handleConfirmModal () {
    console.log('Confirm')
    setModalIsOpen(false)
  }

  return (
    <div className='card'>
      <h2>Learn React</h2>
      <div className='action'>
        <span>{props.text}</span>
        <button className='btn' onClick={handleDelete}>
          Delete
        </button>
      </div>

      {modalIsOpen && (
        <Modal onClick={handleCloseModal} onConfirm={handleConfirmModal} />
      )}
      {modalIsOpen && <Backdrop onClick={handleCloseModal} />}
    </div>
  )
}

export default Todo
