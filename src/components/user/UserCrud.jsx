import React, { Component } from 'react'
import Main from '../template/Main'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuarios: Inclui, Listar, Alterar e Excluir.'
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main { ...headerProps }>
                <h1>Cadastro de Usuários</h1>
                <hr/>
                <p>Te amo muito.</p>
            </Main>
        )
    }

}