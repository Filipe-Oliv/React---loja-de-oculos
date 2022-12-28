import './estilo.css';

export default function Topo() {
    return (
        <header>
            <div className='limitar-secao'>
                <img src='assets\logo.png' alt='imagem de um óculos à direita e o nome da ótica à esquerda' />

                <nav>
                    <a href='#produto'>PRODUTOS</a>
                    <a href='#sobre'>SOBER</a>
                    <a href='#contato'>CONTATO</a>
                </nav>
            </div>
        </header>
    )
}