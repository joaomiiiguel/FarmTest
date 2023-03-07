import './styles.css'
import { FaMapMarkerAlt, FaTrashAlt } from 'react-icons/fa';

export default function ButtonComp({nameButton, deleteButton, onClickButton}) {
  return (
    !deleteButton ?
    <button className='Button' onClick={onClickButton}>
        <p className='textButton'>{nameButton.toUpperCase()}</p>
        <FaMapMarkerAlt color='#556476'/>
    </button>
    :
    <button className='Button ButtonDelete' onClick={onClickButton}>
        <p className='textButton textDelete'>{nameButton.toUpperCase()}</p>
        <FaTrashAlt color='#FFF'/>
    </button>
  )
}
