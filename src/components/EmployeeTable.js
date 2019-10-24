import React from 'react';
import employees from '../data/employees';


function EmployeeRow(props) {
  const employees = props.employees;
  const rowItems = employees.map((employee, index) =>
    <tr key={index}>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.phone}</td>
      <td>{employee.department}</td>
      <td hidden={!props.canRemove}>
        <button onClick={(e) => props.onRowRemove(index, e)}>Remove</button>
      </td>
    </tr>
  );
  return (
    rowItems
  );
}

export default class EmployeeTable extends React.Component {
  constructor(props) {
    super(props);

    this.onRemoveEmployee = this.onRemoveEmployee.bind(this);
  }

  onRemoveEmployee(index, event) {
    employees.splice(index, 1);
    this.forceUpdate();
  }

  render() {

    return (
      <table className="EmployeeTable">
        <thead>
          <tr>
            <th>
              First Name
            </th>
            <th>
              Last Name
            </th>
            <th>
              Phone
            </th>
            <th>
              Department
            </th>
            <th>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <EmployeeRow employees={employees} canRemove={this.props.canRemove} onRowRemove={this.onRemoveEmployee} />
        </tbody>
      </table>
    )
  }
}
