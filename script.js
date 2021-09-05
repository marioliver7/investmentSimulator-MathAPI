[...document.querySelectorAll('#simular')].map(el => el.addEventListener('submit', simular, false));

async function simular(e) {
    e.preventDefault();

    let nome = document.querySelector('.nome').value;
    let mensalidade = document.querySelector('.mensa').value;
    let tempo = document.querySelector('.tempo').value;
    let errorMessage = document.querySelector('span');

    const taxaJuros = 0.517;
    
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    if (!mensalidade || !nome) {
        return errorMessage.classList.remove('display');
    }

    try {
        const response = await fetch(`http://api.mathjs.org/v4/?expr=(${tempo}*12)*${mensalidade}`, options);
        // const response = await fetch(`http://api.mathjs.org/v4/?expr=${mensalidade}*(((1+0.00517)^${tempo*12}-1)/0.00517)`, options);
        const total = await response.json();
    
        window.location.href = `/result/result.html?nome=${nome}&mensalidade=${mensalidade}&total=${total}&tempo=${tempo}`;
    } catch (e) {
        console.log('Deu erro: ' + e.message)
    }

}