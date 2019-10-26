import React from 'react';
import Fuse from 'fuse.js';


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
    this.state = {
      initialEmployees: [],
      computedEmpolyees: []
    };
    this.onRemoveEmployee = this.onRemoveEmployee.bind(this);
    this.searchFilterEmployees = this.searchFilterEmployees.bind(this);
    this.sortEmployeesByFirstName = this.sortEmployeesByFirstName.bind(this);
    this.sortEmployeesByLastName = this.sortEmployeesByLastName.bind(this);
    this.sortEmployeesByDepartment = this.sortEmployeesByDepartment.bind(this);
  }

  componentDidMount() {
    this.setState({
      initialEmployees: this.props.employees,
      computedEmpolyees: this.props.employees
    });
  }

  componentDidUpdate() {
    // this.onSearchEmployees(this.props.search, this.props.searchBy);
  }

  onRemoveEmployee(index, event) {
    let result = this.state.computedEmpolyees.slice();
    result.splice(index, 1);
    this.props.onRemoveEmployee(result);
    this.setState({
      computedEmpolyees: result
    });
  }

  searchFilterEmployees(empolyees, search, searchBy) {    
    let keys;
    if(!searchBy || !search) return empolyees;

    if(searchBy === 'name') {
      keys = ['firstName', 'lastName'];
    }
    if(searchBy === 'department') {
      keys = ['department'];
    }
    let options = {
      keys
    }
    let fuse = new Fuse(empolyees, options);
    let result = fuse.search(search);
    return result;
  }

  sortEmployeesByDepartment() {
    let result = this.state.computedEmpolyees.sort((former, latter) => {
      let departmentFormer = former.department.toLowerCase();
      let departmentLatter = latter.department.toLowerCase();
      if(departmentFormer < departmentLatter) {
        return -1;
      }
      if(departmentFormer > departmentLatter) {
        return 1;
      }
      return 0;
    });
    this.setState({
      computedEmpolyees: result
    });
  }

  sortEmployeesByLastName() {
    let result = this.state.computedEmpolyees.sort((former, latter) => {
      let nameFormer = former.lastName.toLowerCase();
      let nameLatter = latter.lastName.toLowerCase();
      if(nameFormer < nameLatter) {
        return -1;
      }
      if(nameFormer > nameLatter) {
        return 1;
      }
      return 0;
    });
    this.setState({
      computedEmpolyees: result
    });
  }

  sortEmployeesByFirstName() {
    let result = this.state.computedEmpolyees.sort((former, latter) => {
      let nameFormer = former.firstName.toLowerCase();
      let nameLatter = latter.firstName.toLowerCase();
      if(nameFormer < nameLatter) {
        return -1;
      }
      if(nameFormer > nameLatter) {
        return 1;
      }
      return 0;
    });
    this.setState({
      computedEmpolyees: result
    });
  }

  render() {
    let computedEmpolyees = this.state.computedEmpolyees;
    let search = this.props.search;
    let searchBy = this.props.searchBy;
    const searchFilteredEmployees = this.searchFilterEmployees(computedEmpolyees, search, searchBy);

    return (
      <table className="EmployeeTable">
        <thead>
          <tr>
            <th className="canSort" onClick={this.sortEmployeesByFirstName}>
              First Name
            </th>
            <th className="canSort" onClick={this.sortEmployeesByLastName}>
              Last Name
            </th>
            <th>
              Phone
            </th>
            <th className="canSort" onClick={this.sortEmployeesByDepartment}>
              Department
            </th>
            <th>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <EmployeeRow employees={searchFilteredEmployees} canRemove={this.props.canRemove} onRowRemove={this.onRemoveEmployee} />
        </tbody>
      </table>
    )
  }
}
