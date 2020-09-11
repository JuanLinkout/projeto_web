import React, { Component } from 'react';
import Main from '../../template/Main';
import Table from '../common/Table'
import UserForm from './UserForm'

const headerProps = {
  icon: 'users',
  title: 'Usuários',
  subtitle: 'Cadastro de usuarios: Inclui, Listar, Alterar e Excluir.',
};

export default class UserCrud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      professores: [],
      template: ['Nome', 'Registro Funcional', 'Titulação', 'Email', 'Telefone', 'Area Graduação', 'Area Atuação', 'Sexo', 'Data Nascimento', 'Excluir', 'Alterar'],
      changeUser: null,
      currentId: 0,
    };
  }

  incrementId = () => {
    const { currentId } = this.state;
    const id = currentId + 1;
    this.setState({ currentId: id });
    return id;
  };

  handleAddUser = (obj) => {
    const currentProfessores = [...this.state.professores];

    if (this.state.changeUser !== null) {
      const updatedProfessores = currentProfessores.map((item) => {
        if (obj['id'] === item['id']) {
          return obj;
        }
        return item;
      })

      this.setState({ professores: [...updatedProfessores], changeUser: null });
      return;
    }

    const id = this.incrementId();
    this.setState({ professores: [...currentProfessores, { id, ...obj }], changeUser: null });
  };

  handleDeleteUser = (index) => {
    const currentProfessores = [...this.state.professores];
    currentProfessores.splice(index, 1);
    const updatedProfessores = [...currentProfessores];
    this.setState({ professores: [...updatedProfessores] });
  };

  handleChangeUser = (obj) => {
    this.setState({ changeUser: { ...obj } });
  };

  handleCancel = () => {
    this.setState({ changeUser: null })
  };

  render() {
    console.log(this.state);
    return (
      <Main {...headerProps}>
        <h1>Professores</h1>
        <hr />
        <UserForm change={this.state.changeUser} addFunction={this.handleAddUser} cancel={this.handleCancel} />
        <hr />
        <Table template={this.state.template} list={this.state.professores} change={this.handleChangeUser} delete={this.handleDeleteUser} />
      </Main>
    );
  }
}
