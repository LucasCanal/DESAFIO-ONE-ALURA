function cryptText() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    
    if (inputText) {
        const encryptedText = btoa(inputText);
        outputText.value = encryptedText;
    } else {
        outputText.value = 'Nenhuma mensagem encontrada';
    }
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    
    if (inputText) {
        try {
            const decryptedText = atob(inputText);
            outputText.value = decryptedText;
        } catch (error) {
            outputText.value = 'Texto inválido para descriptografar.';
        }
    } else {
        outputText.value = 'Nenhuma mensagem encontrada';
    }
}

function resetText() {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    
    inputText.value = '';
    outputText.value = 'Nenhuma mensagem encontrada';
}

document.querySelector('.cript').addEventListener('click', cryptText);
document.querySelector('.descript').addEventListener('click', decryptText);
document.querySelector('.reset').addEventListener('click', resetText);