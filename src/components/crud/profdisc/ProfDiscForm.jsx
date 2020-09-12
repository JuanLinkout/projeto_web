import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Form.css';
import Button from '../../common/Button';

const initialState = {
  registroFuncional: '',
  sigla: '',
  ano: '',
  semestre: '',
  diasSemana: '',
  horarios: '',
  curso: '',
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
            <label for="registroFuncional">Registro Funcional</label>
            <input value={this.state['registroFuncional']} onChange={this.handleInputChange} type="text" name="registroFuncional" id="registroFuncional" placeholder="Registro funcional" />
            <FontAwesomeIcon className='icon' icon='address-card' />
          </div>

          <div className="form-item">
            <label for="sigla">Sigla</label>
            <input value={this.state['sigla']} onChange={this.handleInputChange} type="text" name="sigla" id="sigla" placeholder="Sigla" />
            <FontAwesomeIcon className='icon' icon='address-card' />
          </div>


          <div className="form-item">
            <label for="ano">Ano</label>
            <input value={this.state['ano']} onChange={this.handleInputChange} type="text" name="ano" id="ano" placeholder="Ano" />
            <FontAwesomeIcon className='icon' icon='graduation-cap' />
          </div>

          <div className="form-item">
            <label for="semestre">Semestre</label>
            <input value={this.state['semestre']} onChange={this.handleInputChange} type="text" name="semestre" id="semestre" placeholder="Semestre" />
            <FontAwesomeIcon className='icon' icon="calendar" />
          </div>

          <div className="form-item">
            <label for="diasSemana">Dias da Semana</label>
            <input value={this.state['diasSemana']} onChange={this.handleInputChange} type="text" name="diasSemana" id="diasSemana" placeholder="Dias da semana" />
            <FontAwesomeIcon className='icon' icon='calendar' />
          </div>

          <div className="form-item">
            <label for="horarios">Horarios Inicio</label>
            <input value={this.state['horarios']} onChange={this.handleInputChange} type="text" name="horarios" id="horarios" placeholder="Horarios de inicio" />
            <FontAwesomeIcon className='icon' icon='clock' />
          </div>

          <div className="form-item">
            <label for="curso">Curso</label>
            <input value={this.state['curso']} onChange={this.handleInputChange} type="text" name="curso" id="curso" placeholder="Curso" />
            <FontAwesomeIcon className='icon' icon='graduation-cap' />
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