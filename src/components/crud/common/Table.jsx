import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../../common/Button';
import '../styles/Table.css'

export default (props) => (
  <table className='table'>
    <thead>
      {props.template.map((item, index) => (
        <th key={index}>{item}</th>
      ))}
    </thead>
    <tbody>
      {props.list.map((obj, index) => (
        <tr key={index}>
          {Object.keys(obj).map((key, index) => {
            if (key === 'id') {
              return null;
            }

            return (
              <td key={index}>
                {obj[key]}
              </td>
            );
          })}
          <td>
            <Button class='alterar' click={() => props.change(obj)} >
              <FontAwesomeIcon className='icon' icon='cog' />
            </Button>
          </td>
          <td>
            <Button class='excluir' click={() => props.delete(index)} >
              <FontAwesomeIcon className='icon' icon='window-close' />
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
