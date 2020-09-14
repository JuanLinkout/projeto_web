import React, { Component } from 'react';
import Main from '../../template/Main';
import Table from '../common/Table';
import UserForm from './ProfDiscForm';
import axios from 'axios';

const headerProps = {
  icon: 'address-card',
  title: 'Professores Disciplinas',
  subtitle: 'Página com informações das materias e dos professores.',
};

const url = "http://localhost:3001/professores_disciplina";

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

  getProfDisc = () => {
    axios.get(url).then(res => {
      this.setState({ profdisc: res.data });
    });
  };

  handleAddUser = (obj) => {
    const method = this.state.changeUser ? "put" : "post";

    /* Estava com um bug quando o usuario clica no alterar e depois cancelar o obj continuava com o id, o que causava duplicatas. */
    if (obj.id && method === "post") {
      delete obj.id;
    }

    const url = method === "put" ? `http://localhost:3001/professores_disciplina/${obj.id}` : "http://localhost:3001/professores_disciplina";
    axios[method](url, obj);
    this.getProfDisc();
  };

  handleDeleteUser = (obj) => {
    const url = `http://localhost:3001/professores_disciplina/${obj.id}`;
    axios.delete(url);
    this.getProfDisc();
  };

  handleChangeUser = (obj) => {
    this.setState({ changeUser: { ...obj } });
  };

  handleCancel = () => {
    this.setState({ changeUser: null });
  };

  componentDidMount() {
    this.getProfDisc();
  }

  render() {
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
