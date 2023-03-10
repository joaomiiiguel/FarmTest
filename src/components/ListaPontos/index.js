import './styles.css'
import SoyIcon from '../../assets/soy.png'

export default function ListMarker({ dataList, markerSelected, setMarkerSelected }) {

    function DataFormated(date){
        const day = date.createdAt?.toLocaleDateString()
        const time = date.createdAt?.toLocaleTimeString()

        return (`${day} - ${time}`)
    }

    function buttonSelectMarker(id){
        setMarkerSelected(id)
        console.log('Button:' , markerSelected);
    }

    return (
        <div className="ModalListaPontos">
            <p className='titleList'>Listagem de pontos</p>
            <div>
                {dataList.length === 0 ?
                    <p className='MsgListEmpity'>Sem pontos de monitoramento para exibir no momento.</p> :
                    dataList.map(marker => (
                        <button key={marker.idMarker} className={marker.idMarker === markerSelected  ? 'cardMark active' : 'cardMark'} onClick={() => buttonSelectMarker(marker.idMarker)}>
                            <div className='HeaderCard'>
                                <img src={SoyIcon} alt='Logo Soy' width={15} />
                                <p className='TitleCard'>Ponto nº00{marker.idMarker}</p>
                            </div>
                            <p className='captionCard'>Criado em: {DataFormated(marker)}</p>
                        </button>
                    ))}
            </div>
        </div>
    )
}
