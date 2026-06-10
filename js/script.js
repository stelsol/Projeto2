/* 

    Criar um menu dinâmico a partir do arquivo JSON, utilizando o fetch
    1 -  Pegar os dados do backend
    2 - Coverter consulta do back-end em dados manipulaveis pelos Js
    3 - Consultar Dom e pegarelementos dentro do HTML 
    4 - Function para mudar o menu com os dados  do json

*/

const dadosJson = "../backend/menu.json"; // pedido

async function CovrMenu() {
  let requerijsn = await fetch(dadosJson); // recebendo o pedido
  let convjson = await requerijsn.json(); // abrindo a sacola do pedido - covertendo para objeto
  let navs = document.querySelectorAll("nav");
  //   console.log(navs);
  navs.forEach((element) => {
    convjson.forEach((itemMenu) => {
      if (itemMenu.active) {
        const opTarget = itemMenu.external ? 'target="_blank" ' : " ";

        element.innerHTML += `   <a href="${itemMenu.link}" ${opTarget} class="hover:text-gray-200"> ${
          itemMenu.title
        }</a>`;
      }
    });
  });
}
CovrMenu();
