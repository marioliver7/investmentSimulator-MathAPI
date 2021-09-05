[...document.querySelectorAll('.btn-sim')].map(el => el.addEventListener('click', simularNov, false));

function simularNov() {
    window.location.href = `../index.html?`;
}

const p = document.querySelector('p');
const params = (new URL(document.location)).searchParams;

p.innerHTML = `Olá ${params.get('nome')}, <br> juntando R$${params.get('mensalidade')},00 reais todo mês, você terá R$${params.get('total')},00 em ${params.get('tempo')} anos`;