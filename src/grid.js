import React from "react";
import ReactDOM from "react-dom";

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
  }

  getKeys = function() {
    return Object.keys(this.props.data[0]);
  };

  getHeader = function() {
    var keys = this.getKeys();
    return keys.map((key, index) => {
      //             console.log(key, index);
      return (
        <th style={{ border: "1px solid black" }} key={key}>
          {key.toUpperCase()}
        </th>
      );
    });
  };

  getRowsData = function() {
    var items = this.props.data;
    var keys = this.getKeys();
    return items.map((row, index) => {
      return (
        <tr key={index}>
          <RenderRow key={index} data={row} keys={keys} />
        </tr>
      );
    });
  };

  render() {
    return (
      //     <style>
      //         thead {color:green;}
      //         tbody {color:blue;}
      //         table, th, td {
      //             border: 1px solid black;
      //    }
      //     td, th{
      //             padding: 5px;
      //    }
      //     </style>
      <div>
        <table style={{ border: "1px solid black" }}>
          <thead style={{ border: "1px solid black" }}>
            <tr>{this.getHeader()}</tr>
          </thead>
          <tbody>{this.getRowsData()}</tbody>
        </table>
      </div>
    );
  }
}
const RenderRow = props => {
  return props.keys.map((key, index) => {
    return (
      <td style={{ border: "1px solid black" }} key={props.data[key]}>
        {props.data[key]}
      </td>
    );
  });
};
