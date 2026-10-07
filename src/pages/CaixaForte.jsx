import { useState } from "react";
import '../css/caixaForte.css';
import CofreMoedas from "../img/cofredinheiro.png"
import Cartola from "../img/cartola.png"

const Pix = () => {

    // hook useState - manipula o estado variável
    const [deposito, setDeposito] = useState ("");

    // função enviar pix
    const Depositar=(e)=> {
        // previne que sua página recarregue
        e.preventDefault();
        alert(`Deposito de R$ ${deposito} realizado com sucesso!`);

        //limpa os campos
        setDeposito("");
    }

    return (
        <div className="caixa-container">
            <h1>Caixa Forte de Economias</h1>
            <img src={CofreMoedas} className="imagem-dinheiro"/>
            <div class="progress-container">
                <div class="progress-track">
                    <div class="progress-fill">
                        <div class="progress-thumb"><i class="bi bi-coin"></i></div>
                    </div>
                </div>
                <div class="progress-labels">
                    <span>Acumulado: R$ 3.250,00</span>
                    <span>Meta: R$ 5.000,00</span>
                </div>
            </div>
            <div className="card-container">
                <div className="organizacao-card">
                    <div className="title-cartola">
                        <img src={Cartola} className="imagem-cartola"/>
                        <h5>Cartola de Ouro da Sorte</h5>
                    </div>
                    <p><span>Objetivo: </span>Viagem para Patópolis</p>
                    <p><span>Prazo: </span>12 meses</p>
                </div>
                <form onSubmit={Depositar} className="deposito-form">
                    <div className="input-deposito">
                        <input
                            type="number"
                            value={deposito}
                            onChange={(e) => setDeposito(e.target.value)}
                            placeholder="Digite o valor (R$)"
                            required
                        />
                    </div>
                    <div>
                        <button type="submit" className="btn-deposito">Enviar Pix</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Pix