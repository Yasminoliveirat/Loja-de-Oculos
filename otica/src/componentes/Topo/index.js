import './style.css';

export default function Topo(){
    return(
        <div className="topo">
            <div className="limitar-secao" id="tp">
                <div>
                    <img id="logo" src="./assets/imagens/logo.png" alt="Logo da ótica"></img>
                </div>

                <div className="links-topo">
                    <a href="">PRODUTOS</a>
                    <a href="">SOBRE</a>
                    <a href="">CONTATO</a>
                </div>
            </div>
        </div>
    )
};