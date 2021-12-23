import logo from '../../assets/logo.png';

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import abobora from '../../assets/frutas/Abóbora.png';
import pepino from '../../assets/frutas/Pepino.png';

const cesta = {
  topo: {
    titulo: "Detalhe da cestaa",
  },
  detalhes: {
    nome: "Cesta de Verduras",
    logoFazenda: logo,
    nomeFazenda: "Jenny Jack",
    descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda diretamente para cozinha",
    preco: "R$40,00",
    botao: "Comprar"
  },
  itens: {
    titulo : "Itens da Cesta",
    lista: [
      {
        nome: "Tomate",
        imagem: tomate,

      },
      {
        nome: "Brocolis",
        imagem: brocolis,

      },
      {
        nome: "Batata",
        imagem: batata,

      },
      {
        nome: "Pepino",
        imagem: pepino,

      },
      {
        nome: "Abóbora",
        imagem: abobora,

      },
    ]
  }
}

export default cesta;
