import React from 'react';
import './UserTable.css'

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
          {Object.keys(obj).map(key => {
            if (key === 'id') {
              return null;
            }

            return (
              <td key={key}>
                {obj[key]}
              </td>
            );
          })}
          <td>
            <button onClick={() => props.delete(index)}>Excluir</button>
          </td>
          <td>
            <button onClick={() => props.change(obj)}>Alterar</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
