//validar se todos equipamentos do cliente são obsoletos
//salvar todos os clientes de forma separada: todos obsoletos, todos não obsoletos.

//-------------------------------------------------------
// Importamos uma biblioteca fs (filesync) em que utilizamos somente os métodos (readFileSync e WriteFilesync)
import { appendFileSync, readFileSync, readSync, writeFileSync } from "fs";

// criamos uma constante chamada "clientes", em que (JSON.parse) irá formatar as informações que tem dentro do arquivo "lista" e lemos utlizando o método (readFilesync)
const clientes = JSON.parse(readFileSync("./lista.json"));

//const result uma Array vazia de controle
const result = [];

//--------------const resultFalse = []

for (let item of clientes) {
  // aqui criamos um loop com (for) em que nossa variável é "item" e acessamos todos os itens do arquivo "lista" é acessado

  let todosObsoletos = true;
  // outra variável "let" onde pegamos "todosObseltos" que são os equipamentos e retornamos o valores dele como "true"
  // em que pegamos todos os equipamentos obsoletos.

  for (let equipamento of item.comodato) {
    //aqui criamos mais um lop for onde o "let" é a variavel e o nome dela chamamos de "equipamento"
    // of ele vai pegar tudo que tem neste arquivo de forma geral e apresentar todo conteudo dentro dos itens da nossa lista.

    // criamos a lógica utilizando if (se) equipamento.obsoleto for igual a false ele irá retornar todos os equipamentos "nãoObsoletos"
    if (equipamento.obsoleto == false) {
      todosObsoletos = false;
    }
  }
  // se nossa varial item.comodato for diferente ele irá retornar todos os equipamentos que precisam revisar manualmente
  // AND lógico (&&)é um operador e ele irá avaliar da esquerda para direita os valores verdadeiros "true". 
  //if (
  //  item.comodato != "REVISAR MANUALMENTE" &&
  //  item.comodato.length > 0 &&
  //  todosObsoletos == true
  //) {

   //console.log irá apresentar os meus valores que foram declarados anteriormente e ele irá pegar a minha variavel "item" apresentar os valores de "idCliente" e "item.comodato"
    console.log(item.idCliente, item.comodato);

    //minha constante result irá colocar todos os valores do que tem dentro do meu "item"
    result.push(item);

    // retornar se não for Obsoletos irá mostrar "ERRO" 
  //} else {
  //  console.log("Erro", todosObsoletos);
  //  result.push(item);
  //}
  // se for false (nãoObsoletos) irá baixar O.S -- se for true (baixar O.S)
  item.baixarOs = todosObsoletos;
}
console.log(result);

writeFileSync("resultados.json", JSON.stringify(result));
