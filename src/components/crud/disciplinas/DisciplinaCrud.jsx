import React, { Component } from 'react';
import Main from '../../template/Main';
import Table from '../common/Table'
import DisciplinaForm from './DisciplinaForm'

const headerProps = {
  icon: 'address-card',
  title: 'Disciplinas',
  subtitle: 'Cadastro de disciplinas: Inclui, Listar, Alterar e Excluir.',
};

export default class UserCrud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disciplinas: [],
      template: ['Sigla', 'Nome', 'Ementa', 'Bibliografia', 'Numero Creditos', 'Carga Horaria', 'Alterar', 'Excluir'],
      changeDisciplina: null,
      currentId: 0,
    };
  }

  incrementId = () => {
    const currentId = this.state.currentId;
    const id = currentId + 1;
    this.setState({ currentId: id });
    return id;
  };

  handleAddUser = (obj) => {
    const currentDisciplinas = [...this.state.disciplinas];

    if (this.state.changeDisciplina !== null) {
      const updatedDisciplinas = currentDisciplinas.map((item) => {
        if (obj.id === item.id) {
          return obj;
        }
        return item;
      });

      this.setState({ disciplinas: [...updatedDisciplinas], changeDisciplina: null });
      return;
    }

    const id = this.incrementId();
    this.setState({ disciplinas: [...currentDisciplinas, { id, ...obj }], changeDisciplina: null });
  };

  handleDeleteUser = (index) => {
    const currentDisciplinas = [...this.state.disciplinas];
    currentDisciplinas.splice(index, 1);
    const updatedDisciplinas = [...currentDisciplinas];
    this.setState({ disciplinas: [...updatedDisciplinas] });
  };

  handlechangeDisciplina = (obj) => {
    this.setState({ changeDisciplina: { ...obj } });
  };

  handleCancel = () => {
    this.setState({ changeDisciplina: null });
  };

  render() {
    console.log(this.state);
    return (
      <Main {...headerProps}>
        <h1>Incluir Disciplinas</h1>
        <hr />
        <DisciplinaForm change={this.state.changeDisciplina} addFunction={this.handleAddUser} cancel={this.handleCancel} />
        <hr />
        <Table template={this.state.template} list={this.state.disciplinas} change={this.handlechangeDisciplina} delete={this.handleDeleteUser} />
      </Main>
    );
  }
}
