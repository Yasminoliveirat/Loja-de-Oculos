import React from 'react';
import SecaoCapa from "../SecaoCapa";
import SecaoProdutos from "../SecaoProdutos";
import Sobre from '../SecaoSobre';
import Contato from '../SecaoContato';

export default function Conteudo (){
    return(
        <div>
            <SecaoCapa />
            <SecaoProdutos />
            <Sobre/>
            <Contato/>
        </div>
    )
};
