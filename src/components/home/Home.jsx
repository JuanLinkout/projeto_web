import React from 'react'
import Main from '../template/Main'

export default props => (
    <Main icon="home" title="Início" subtitle="Aplicaçao react principal.">
        <h1>Bem-Vindo ao nosso Projeto Universidade!</h1>
        <hr />
        <p>Esse é um projeto realizado em parceria com a materia de AP1, onde nós realizamos um sistema para uma universidade, o que inclui três sub-menus, alem do menu de relatórios, todos possuem comandos de adicionar, remover ou editar dados da universidade. No caso do relatorio, foi um sub-menu de busca de dados especificos, os quais deixamos no site tambem focalizado. Nesse site, temos então as tres categorias ou sub-menus, que são: Professores, Disciplinas e Disciplinas de professores, além do menu final de busca de relatórios.</p>
        <br />
        <p>Nesse sistema ainda não é possivel adicionar ou editar os elementos, é puramente ilustrativo, afim de testar conhecimentos apenas da materia de web, que tivemos no primeiro semestre de ADS, em 2020.</p>
        <br />
        <p>Realizado pelos alunos: Juan Lucas Rossi e Lucas Gonçalves Selin.</p>
        <p>Aulas ministradas pelo professor Sergio, matéria de INWS1.</p>
    </Main>
)