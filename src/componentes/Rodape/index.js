import './Rodape.css';

const Rodape = () => {
    return (
        <footer className='Rodape'>
            <div className='social'>
                <img src="/imagens/fb.png" />
                <img src="/imagens/ig.png" />
                <img src="/imagens/tw.png" />
            </div>
            <div className='imagem'>
                <img className='logo' src="/imagens/logo.png" />
            </div>
            <div className='label'>
                <label>Desenvolvido por Alura</label>
            </div>
            
        </footer>
    )
}

export default Rodape;