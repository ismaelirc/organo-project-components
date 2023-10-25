import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba'

import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: hexToRgba(props.cor,'0.6') }
   
    return (
        (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <input type='color' className='input-cor' value={props.cor} onChange={evento => props.mudarCor(evento.target.value,props.id)} />
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => {
                  
                   return <Colaborador key={colaborador.nome} 
                                        favorito={colaborador.favorito}
                                        aoFavoritar={props.aoFavoritar}
                                        nome={colaborador.nome} 
                                        cargo={colaborador.cargo} 
                                        corDeFundo={props.cor} 
                                        id={colaborador.id}
                                        imagem={colaborador.imagem} 
                                        aoDeletar={props.aoDeletar} />
                } )}
            </div>
        </section> 
        : ''
    )
}

export default Time