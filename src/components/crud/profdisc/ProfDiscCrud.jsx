import React, { Component } from 'react';
import Main from '../../template/Main';
import Table from '../common/Table'
import UserForm from './ProfDiscForm'

const headerProps = {
  icon: 'address-card',
  title: 'Professores Disciplinas',
  subtitle: 'Página com informações das materias e dos professores.',
};

export default class UserCrud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profdisc: [],
      template: ['Registro Funcional', 'Sigla', 'Ano', 'Semestre', 'Dias da Semana', 'Horarios Inicio', 'Curso', 'Alterar', 'Excluir'],
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
    const currentProfDisc = [...this.state.profdisc];

    if (this.state.changeUser !== null) {
      const updatedProfDisc = currentProfDisc.map((item) => {
        if (obj['id'] === item['id']) {
          return obj;
        }
        return item;
      });

      this.setState({ profdisc: [...updatedProfDisc], changeUser: null });
      return;
    }

    const id = this.incrementId();
    this.setState({ profdisc: [...currentProfDisc, { id, ...obj }], changeUser: null });
  };

  handleDeleteUser = (index) => {
    const currentProfDisc = [...this.state.profdisc];
    currentProfDisc.splice(index, 1);
    const updatedProfDisc = [...currentProfDisc];
    this.setState({ profdisc: [...updatedProfDisc] });
  };

  handleChangeUser = (obj) => {
    this.setState({ changeUser: { ...obj } });
  };

  handleCancel = () => {
    this.setState({ changeUser: null });
  };

  render() {
    console.log(this.state);
    return (
      <Main {...headerProps}>
        <h1>Incluir Professores Disciplina</h1>
        <hr />
        <UserForm change={this.state.changeUser} addFunction={this.handleAddUser} cancel={this.handleCancel} />
        <hr />
        <Table template={this.state.template} list={this.state.profdisc} change={this.handleChangeUser} delete={this.handleDeleteUser} />
      </Main>
    );
  }
}
