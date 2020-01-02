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
      return <th key={key}>{key.toUpperCase()}</th>;
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
      <React.Fragment>
        <table className="table-sm table-bordered">
          <thead>
            <tr>{this.getHeader()}</tr>
          </thead>
          <tbody>{this.getRowsData()}</tbody>
        </table>
      </React.Fragment>
    );
  }
}
const RenderRow = props => {
  return props.keys.map((key, index) => {
    return <td key={props.data[key]}>{props.data[key]}</td>;
  });
};
