import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Form.css';
import Button from '../../common/Button';

const initialState = {
  nome: '',
  registroFuncional: '',
  titulação: '',
  email: '',
  telefone: '',
  areaGraduação: '',
  areaAtuação: '',
  sexo: '',
  dataNascimento: '',
}

export default class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.change ? props.change : initialState;
  }

  handleInputChange = (e) => {
    console.log(this.state);
    const currentState = { ...this.state };
    this.setState({ ...currentState, [e.target.id]: e.target.value });
  };

  handleCancel = () => {
    this.setState({ ...initialState });
    this.props.cancel();
  };

  handleAdd = () => {
    const currentState = { ...this.state };
    this.props.addFunction(currentState);
    this.handleCancel();
  };

  componentDidUpdate(prevProps) {
    if (this.props.change && (prevProps.change !== this.props.change)) {
      this.setState({ ...this.props.change })
    }
  }

  render() {

    return (
      <div>
        <form className="form">
          <div className="form-item">
            <label for="nome">Nome</label>
            <input value={this.state['nome']} onChange={this.handleInputChange} type="text" name="nome" id="nome" placeholder="Seu nome" />
            <FontAwesomeIcon className='icon' icon='user' />
          </div>

          <div className="form-item">
            <label for="registroFuncional">Registro Funcional</label>
            <input value={this.state['registroFuncional']} onChange={this.handleInputChange} type="text" name="registroFuncional" id="registroFuncional" placeholder="Seu registro funcional" />
            <FontAwesomeIcon className='icon' icon='address-card' />
          </div>

          <div className="form-item">
            <label for="titulação">Titulação</label>
            <input value={this.state['titulação']} onChange={this.handleInputChange} type="text" name="titulação" id="titulação" placeholder="Sua titulação" />
            <FontAwesomeIcon className='icon' icon='graduation-cap' />
          </div>

          <div className="form-item">
            <label for="email">Email</label>
            <input value={this.state['email']} onChange={this.handleInputChange} type="email" name="email" id="email" placeholder="Seu E-mail" />
            <FontAwesomeIcon className='icon' icon="envelope" />
          </div>

          <div className="form-item">
            <label for="telefone">Telefone</label>
            <input value={this.state['telefone']} onChange={this.handleInputChange} type="tel" name="telefone" id="telefone" placeholder="(xx) xxxx-xxxx" />
            <FontAwesomeIcon className='icon' icon='phone' />
          </div>

          <div className="form-item">
            <label for="areaGraduação">Area Graduação</label>
            <input value={this.state['areaGraduação']} onChange={this.handleInputChange} type="text" name="areaGraduação" id="areaGraduação" placeholder="Sua graduação" />
            <FontAwesomeIcon className='icon' icon='graduation-cap' />
          </div>

          <div className="form-item">
            <label for="areaAtuação">Area Atuação</label>
            <input value={this.state['areaAtuação']} onChange={this.handleInputChange} type="text" name="areaAtuação" id="areaAtuação" placeholder="Sua area de atuação" />
            <FontAwesomeIcon className='icon' icon='graduation-cap' />
          </div>

          <div className="form-item">
            <label for="sexo">Sexo</label>
            <select value={this.state['sexo']} onChange={this.handleInputChange} id="sexo" name="sexo">
              <option value="" disabled hidden>Escolha seu sexo...</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>
          </div>

          <div className="form-item">
            <label for="dataNascimento">Data nascimento</label>
            <input value={this.state['dataNascimento']} onChange={this.handleInputChange} type="date" name="dataNascimento" id="dataNascimento" />
          </div>
        </form>
        <hr />
        <div className="container-buttons">
          <Button value='Incluir' class='incluir' click={this.handleAdd} />
          <Button value='Cancelar' class='cancelar' click={this.handleCancel} />
        </div>
      </div>
    );
  }
}