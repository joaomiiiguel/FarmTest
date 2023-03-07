import ButtonComp from '../Button'
import './styles.css'

export default function ActionModal() {
  return (
    <div className='containerActionModal'>
        <ButtonComp nameButton='deletar pin' deleteButton onClickButton={() => alert('Deletar')}/>
        <ButtonComp nameButton='Adicionar Novo' onClickButton={() => alert('Adicionar')}/>
        <ButtonComp nameButton='deletar todos' deleteButton onClickButton={() => alert('Deletar Todos')}/>
    </div>
  )
}
