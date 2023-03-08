import ButtonComp from '../Button'
import './styles.css'

export default function ActionModal({ listMarkers, markerSelected, deleteFunction, addMarkerFunction, deleteAllFunction}) {

  return (
    <div className='containerActionModal'>
        {markerSelected && <ButtonComp nameButton='deletar pin' deleteButton onClickButton={deleteFunction}/>}
        <ButtonComp nameButton='Adicionar Novo' onClickButton={addMarkerFunction}/>
        {listMarkers.length > 1 && <ButtonComp nameButton='deletar todos' deleteButton onClickButton={deleteAllFunction}/>}
    </div>
  )
}
