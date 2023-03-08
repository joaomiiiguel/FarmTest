import './styles.css'

export default function ListMarker({ dataList }) {


    function DataFormated(date){
        const day = date.createdAt.toLocaleDateString()
        const time = date.createdAt.toLocaleTimeString()

        return (`${day} - ${time}`)
    }
    return (
        <div className="ModalListaPontos">
            <p className='titleList'>Listagem de pontos</p>
            <div>
                {dataList.length == 0 ?
                    <p className='MsgListEmpity'>Sem pontos de monitoramento para exibir no momento.</p> :
                    dataList.map(marker => (
                        <div key={marker.idMarker} className='cardMark'>
                            <p className='TitleCard'>Ponto nº00{marker.idMarker}</p>
                            <p className='captionCard'>Criado em: {DataFormated(marker)}</p>
                        </div>
                    ))}
            </div>
        </div>
    )
}
