import React, { Component } from 'react';
import Main from '../../template/Main';
import Table from '../common/Table';
import UserForm from './ProfessoresForm';
import axios from 'axios';

const headerProps = {
  icon: 'users',
  title: 'Professores',
  subtitle: 'Página com informações dos professores.',
};

const url = "http://localhost:3001/professores";

export default class UserCrud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      professores: [],
      template: ['Nome', 'Registro Funcional', 'Titulação', 'Email', 'Telefone', 'Area Graduação', 'Area Atuação', 'Sexo', 'Data Nascimento', 'Alterar', 'Excluir'],
      changeUser: null,
      currentId: 0,
    };
  }

  getProfessores = () => {
    axios.get(url).then(res => {
      this.setState({ professores: res.data });
    });
  };
  
  handleAddUser = (obj) => {
    const method = this.state.changeUser ? "put" : "post";
    const url = method === "put" ? `http://localhost:3001/professores/${obj.id}` : "http://localhost:3001/professores";
    axios[method](url, obj);
    this.getProfessores();
  };

  handleDeleteUser = (obj) => {
    const url = `http://localhost:3001/professores/${obj.id}`;
    axios.delete(url);
    this.getProfessores();
  };

  handleChangeUser = (obj) => {
    this.setState({ changeUser: { ...obj } });
  };

  handleCancel = () => {
    this.setState({ changeUser: null });
  };

  componentDidMount() {
    this.getProfessores();
  }

  render() {
    console.log(this.state);
    return (
      <Main {...headerProps}>
        <h1>Incluir Professores</h1>
        <hr />
        <UserForm change={this.state.changeUser} addFunction={this.handleAddUser} cancel={this.handleCancel} />
        <hr />
        <Table template={this.state.template} list={this.state.professores} change={this.handleChangeUser} delete={this.handleDeleteUser} />
      </Main>
    );
  }
}
