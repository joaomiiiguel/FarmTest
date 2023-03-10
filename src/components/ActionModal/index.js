import ButtonComp from '../Button'
import './styles.css'

export default function ActionModal({ listMarkers, markerSelected, deleteFunction, addMarkerFunction, deleteAllFunction}) {

  return (
    <div className='containerActionModal'>
        {markerSelected !== null && <ButtonComp nameButton='deletar pin' deleteButton onClickButton={deleteFunction}/>}
        {listMarkers.length > 1 && <ButtonComp nameButton='deletar todos' deleteButton onClickButton={deleteAllFunction}/>}
        <ButtonComp nameButton='Adicionar Novo' onClickButton={addMarkerFunction}/>
    </div>
  )
}
