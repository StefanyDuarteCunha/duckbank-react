import { useState } from "react";
import '../css/areaPix.css';

const Pix = () => {

    // hook useState - manipula o estado variável
    const [chave, setChave] = useState ("");
    const [valor, setValor] = useState ("");

    // função enviar pix
    const EnviarPix=(e)=> {
        // previne que sua página recarregue
        e.preventDefault();
        alert(`Pix de R$ ${valor} enviado para ${chave} com sucesso!`);

        //limpa os campos
        setChave("")
        setValor("");
    }

    return (
        <div className="pix-container">
            <h1>Área Pix</h1>
            <form onSubmit={EnviarPix} className="pix-form">
                <div className="input-pix">
                    <label>Chave Pix (CPF, e-mail ou telefone)</label>
                    <input
                        type="text"
                        value={chave}
                        onChange={(e)=>setChave(e.target.value)}
                        placeholder="Digite a chave PIX"
                        required
                    />
                </div>
                <div className="input-valor">
                    <label>Valor, em reais (R$) </label>
                    <input
                        type="number"
                        value={valor}
                        onChange={(e)=>setValor(e.target.value)}
                        placeholder="0,00"
                        required
                    />
                </div>
                <div>
                    <button type="submit" className="btn-enviar">Enviar Pix</button>
                </div>
            </form>
        </div>
    )
}

export default Pix