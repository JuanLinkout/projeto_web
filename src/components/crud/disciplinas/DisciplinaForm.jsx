import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Form.css';

const initialState = {
  sigla: '',
  nome: '',
  ementa: '',
  bibliografia: '',
  numeroCreditos: '',
  cargaHoraria: '',
}

export default class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.change ? props.change : initialState;
  }

  handleInputChange = (e) => {
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
      this.setState({ ...this.props.change });
    }
  }

  render() {

    return (
      <div>
        <form className="form">
          <div class="form-item">
            <label for="sigla">Sigla</label>
            <input value={this.state.sigla} onChange={this.handleInputChange} type="text" name="sigla" id="sigla" placeholder="Sigla" />
            <FontAwesomeIcon className='icon' icon='address-card' />
          </div>

          <div class="form-item">
            <label for="nome">Nome</label>
            <input value={this.state.nome} onChange={this.handleInputChange} type="text" name="nome" id="nome" placeholder="Nome materia" />
            <FontAwesomeIcon className='icon' icon='address-book' />
          </div>

          <div class="form-item">
            <label for="ementa">Ementa</label>
            <input value={this.state.ementa} onChange={this.handleInputChange} type="text" name="ementa" id="ementa" placeholder="Ementa" />
            <FontAwesomeIcon className='icon' icon='bookmark' />
          </div>

          <div class="form-item">
            <label for="bibliografia">Bibliografia</label>
            <input value={this.state.bibliografia} onChange={this.handleInputChange} type="text" name="bibliografia" id="bibliografia" placeholder="Bibliografia" />
            <FontAwesomeIcon className='icon' icon='archive' />
          </div>

          <div class="form-item">
            <label for="numeroCreditos">Numero de Creditos</label>
            <input value={this.state.numeroCreditos} onChange={this.handleInputChange} type="text" name="numeroCreditos" id="numeroCreditos" placeholder="Creditos" />
            <FontAwesomeIcon className='icon' icon='graduation-cap' />
          </div>

          <div class="form-item">
            <label for="cargaHoraria">Carga Horaria</label>
            <input value={this.state.cargaHoraria} onChange={this.handleInputChange} type="text" name="cargaHoraria" id="cargaHoraria" placeholder="Carga horaria" />
            <FontAwesomeIcon className='icon' icon='clock' />
          </div>
        </form>
        <hr />
        <div className="container-buttons">
          <button className="button incluir" onClick={this.handleAdd}>Incluir</button>
          <button className="button cancelar" onClick={this.handleCancel}>Cancelar</button>
        </div>
      </div>
    );
  }
}