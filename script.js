[...document.querySelectorAll('#simular')].map(el => el.addEventListener('submit', simular, false));

async function simular(e) {
    e.preventDefault();

    let nome = document.querySelector('.nome').value;
    let mensalidade = document.querySelector('.mensa').value;
    let tempo = document.querySelector('.tempo').value;
    let errorMessage = document.querySelector('span');

    if (!mensalidade || !nome) {
        return errorMessage.classList.remove('display');
    }

    const response = await fetch(`http://api.mathjs.org/v4/`, {
        method: "POST",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify({ 
            expr: `${mensalidade}*(((1+0.00517)^${tempo*12}-1)/0.00517)`,
            precision: 2
        }),
    })

        .then((response) => response.json())
        .then(({result}) => {
            window.location.href = `/result/result.html?nome=${nome}&mensalidade=${mensalidade}&total=${result}&tempo=${tempo}`;
        })
        .catch((error) => {
            console.error("Error", error);
        })

}