function print_text(){
   //se for maior que zero vai printar saldo maior se não vai printar zerado
   let div = document.getElementById('div');
   const name = document.getElementById('name_text').value;
    const saldo = document.getElementById('box_text').value;
    const tamanho = document.getElementById('tamanho').value;
    const tamanho_done = `${tamanho}px`;
    const color = document.getElementById('color').value;
    const style = `style= 'color: ${color}; font-size: ${tamanho}px;'`;
    const ternario = saldo > 0 ? div.innerHTML = ` <p ${style}> ${name} seu saldo é maior!!! de R$ ${saldo}</p>`: div.innerHTML = `<p ${style}> ${name} seu saldo é zerado!!! de R$ ${saldo}</p> <br>`
}
