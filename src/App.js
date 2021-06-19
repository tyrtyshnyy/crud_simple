import React from 'react'
import { Item, Button, Modal } from './components'
import { useSelector, useDispatch } from 'react-redux'



import { setAddId, setAddName, setAddSurname, setAddPosition, setVisibleModal } from './redux/actions/inputs'

function App() {
  const [activeModal, setActiveModal] = React.useState(false)


  const handleClickModal = () => {
    setActiveModal(true)
  }
  const dispatch = useDispatch()

  const { notes } = useSelector((state) => state.notes)


  const onItemClicked = (item, index) => {
    dispatch(setAddId(index))
    dispatch(setAddName(item.name))
    dispatch(setAddSurname(item.surname))
    dispatch(setAddPosition(item.position))
    dispatch(setVisibleModal(true))
  }

  return (
    <div className="container">
      <div className="content">
        <Button openModal onClick={handleClickModal}>
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="17.644px" height="17.644px" viewBox="0 0 37.644 37.644"
            xmlSpace="preserve">
            <g>
              <path d="M37.644,5.957c0,0.829-0.672,1.5-1.5,1.5h-2.118v2.119c0,0.829-0.672,1.5-1.5,1.5s-1.5-0.671-1.5-1.5V7.457h-2.119
		c-0.828,0-1.5-0.671-1.5-1.5c0-0.829,0.672-1.5,1.5-1.5h2.119V2.339c0-0.829,0.672-1.5,1.5-1.5s1.5,0.671,1.5,1.5v2.118h2.118
		C36.972,4.457,37.644,5.129,37.644,5.957z M33.246,28.093l-10.557-3.299c2.28-2.717,3.668-7.024,3.668-11.055
		C26.357,7.64,22.88,3.7,17.502,3.7c-5.38,0-8.857,3.94-8.857,10.039c0,4.03,1.387,8.338,3.669,11.055L1.756,28.093
		C0.711,28.419,0,29.384,0,30.48v3.824c0,1.383,1.119,2.5,2.5,2.5h30.002c1.381,0,2.5-1.117,2.5-2.5V30.48
		C35.002,29.386,34.291,28.42,33.246,28.093z"/>
            </g>

          </svg>
        </Button>
        <Modal active={activeModal} setActive={setActiveModal} />
        <table className="table shadow">
          <thead className="thead">
            <tr>
              <th>№</th>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Должность</th>
              <th>Действие</th>
            </tr>
            {notes && notes.map((item, index) => {
              return <Item
                onItemClicked={() => onItemClicked(item, index)}
                key={index}
                id={index + 1}
                index={index}
                name={item.name}
                surname={item.surname}
                position={item.position}
              />
            })}

              
          </thead>
        </table>
      </div>
    </div>

  );
}

export default App;
