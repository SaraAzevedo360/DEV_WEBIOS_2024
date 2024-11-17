function calcularNovoSalario() {
    
    const salarioAtual = parseFloat(document.getElementById('salarioAtual').value);
o
    if (isNaN(salarioAtual) || salarioAtual <= 0) {
        document.getElementById('resultado').textContent = 'Por favor, insira um salário válido.';
        return;
    }

    const aumento = salarioAtual * 0.17;
 
    const reajusteAnual = 215;

    const novoSalario = salarioAtual + aumento + reajusteAnual;

    document.getElementById('resultado').textContent = `O novo salário é: R$ ${novoSalario.toFixed(2)}`;
}
