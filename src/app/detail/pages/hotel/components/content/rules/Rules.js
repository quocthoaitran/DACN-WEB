import React, { Component } from "react";
export default class Rules extends Component {
  showRules = (rules) => {
    if (rules && rules.length > 0) {
      return rules.map(rule => {
        return (
          <tr key = {rule._id}>
              <th>{ rule.name }</th>
              <td>{ rule.content }</td>
          </tr>
        );
      });
    }
    return <h4>Don't require</h4>
  }
  render() {
    console.log(this.props);
    return (
      <>
        <h2 className="st-heading-section">
          Rules{" "}
          <a
            href="#2"
            className="pull-right toggle-section"
            data-target="st-properties"
          >
            <i className="fa fa-angle-up" />
          </a>
        </h2>
        <table
          className="table st-properties"
          data-toggle-section="st-properties"
        >
          <tbody>

            <tr>
              <th>Check Out</th>
              <td>7:00 PM </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}
