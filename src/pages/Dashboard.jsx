import '../css/dashboard.css';

const Dashboard = () => {
    return (
        <>
            <h1>Visão Geral das Contas</h1>
            <div className="dashboard">
                <article className="saldo-card">
                    <i class="bi bi-piggy-bank icon-dash"></i>
                    <h4>Saldo Disponível</h4>
                    <p className="nome">Luizinho</p>
                    <p className="saldo positivo">R$ 1.000,00</p>
                </article>
                <article className="saldo-card">
                    <i class="bi bi-cash-coin icon-dash"></i>
                    <h4>Saldo Disponível</h4>
                    <p className="nome">Huguinho</p>
                    <p className="saldo positivo">R$ 500,00</p>
                </article>
                <article className="saldo-card">
                    <i class="bi bi-wallet2 icon-dash"></i>
                    <h4>Saldo Disponível</h4>
                    <p className="nome">Zezinho</p>
                    <p className="saldo negativo">R$ -200,00</p>
                </article>
            </div>
        </>
    )
        
}

export default Dashboard