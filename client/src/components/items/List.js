import React, { Component } from 'react';

export default class List extends Component {
  render() {
    const { items } = this.props;

    let showItems = (items) => {
      let content = null;

      if (items.length > 0) {
        content = items.map((item, index) => {
          return (
            <tr key={ index }>
              <td>{ item._id }</td>
              <td>{ item.text }</td>
            </tr>
          );
        });
      }

      return content;
    }

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody>
            { items ? showItems(items) : 
              <tr>
                <td>No Item</td>
              </tr>
            }
            <tr>
              <td>Add Item</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
