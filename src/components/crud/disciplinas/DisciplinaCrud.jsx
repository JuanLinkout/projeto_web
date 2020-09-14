import React, { Component } from 'react';
import Main from '../../template/Main';
import Table from '../common/Table'
import DisciplinaForm from './DisciplinaForm'
import axios from 'axios';

const headerProps = {
  icon: 'address-card',
  title: 'Disciplinas',
  subtitle: 'Cadastro de disciplinas: Inclui, Listar, Alterar e Excluir.',
};

const url = "http://localhost:3001/disciplinas";

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

  getDisciplinas = () => {
    axios.get(url).then(res => {
      this.setState({ disciplinas: res.data });
    });
  };

  handleAddUser = (obj) => {
    const method = this.state.changeDisciplina ? "put" : "post";

    /* Estava com um bug quando o usuario clica no alterar e depois cancelar o obj continuava com o id, o que causava duplicatas. */
    if (obj.id && method === "post") {
      delete obj.id;
    }

    const url = method === "put" ? `http://localhost:3001/disciplinas/${obj.id}` : "http://localhost:3001/disciplinas";
    axios[method](url, obj);
    this.getDisciplinas();
  };

  handleDeleteUser = (obj) => {
    const url = `http://localhost:3001/disciplinas/${obj.id}`;
    axios.delete(url);
    this.getDisciplinas();
  };

  handlechangeDisciplina = (obj) => {
    this.setState({ changeDisciplina: { ...obj } });
  };

  handleCancel = () => {
    this.setState({ changeDisciplina: null });
  };

  componentDidMount() {
    this.getDisciplinas();
  }


  render() {
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
