import React from 'react';
import EMPLOYEES from './../data/empolyees';
import EmployeeTable from './EmployeeTable';


export default class Manage extends React.Component {
  constructor(props) {
    super(props);
    this.onRemoveEmployee = this.onRemoveEmployee.bind(this);
    this.onNewEmployeeInput = this.onNewEmployeeInput.bind(this);
    this.onNewEmployeeSubmit = this.onNewEmployeeSubmit.bind(this);
    this.state = {
      newEmpolyee: {
        firstName: '',
        lastName: '',
        department: '',
        phone: ''
      }
    };
    this.newEmpolyeeForm = React.createRef();
  }

  onNewEmployeeSubmit(event) {
    event.preventDefault();
    const isFormValid = this.newEmpolyeeForm.current.checkValidity();

    if(isFormValid) {
      EMPLOYEES.unshift({...this.state.newEmpolyee});
      // Refresh
      this.setState({
        newEmpolyee: {
          firstName: '',
          lastName: '',
          department: '',
          phone: ''
        }
      });
    }
  }

  onRemoveEmployee(result) {
    EMPLOYEES.splice(0, EMPLOYEES.length, ...result);
    console.log(EMPLOYEES, result);
  }

  onNewEmployeeInput(event) {
    this.setState({
      newEmpolyee: { ...this.state.newEmpolyee, [event.target.name]: event.target.value }
    });
  }

  render() {
    const newEmpolyee = this.state.newEmpolyee;

    return (
      <div className="Manage">
        <header className="Manage-header">
          <h1 className="Manage-title">Add New Empolyee</h1>
        </header>
        <div className="Manage-form">
          <form ref={this.newEmpolyeeForm}>
            <div className="inputRow">
              <div className="inputCell">
                <label  htmlFor="firstName">First Name</label>
                <input value={newEmpolyee.firstName} onChange={this.onNewEmployeeInput} type="text" id="firstName" name="firstName" required />
              </div>
              <div className="inputCell">
                <label htmlFor="lastName">Last Name</label>
                <input value={newEmpolyee.lastName} onChange={this.onNewEmployeeInput} type="text" id="lastName" name="lastName" required/>
              </div>
              <div className="inputCell">
                <label htmlFor="phone">Phone</label>
                <input value={newEmpolyee.phone} onChange={this.onNewEmployeeInput} type="text" id="phone" name="phone" required/>
              </div>
              <div className="inputCell">
                <label htmlFor="department">Department</label>
                <select onChange={this.onNewEmployeeInput} name="department" value={newEmpolyee.department} required>
                  <option value="" disabled>Select department</option>
                  <option value="Garden">Garden</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Outdoors">Outdoors</option>
                  <option value="Grocery">Grocery</option>
                  <option value="Beauty">Beauty</option>
                  <option value="Automotive">Automotive</option>
                  <option value="Books">Books</option>
                  <option value="Toys">Toys</option>
                </select>
              </div>
              <div className="inputCell">
                <button type="submit" onClick={this.onNewEmployeeSubmit}>Submit</button>
              </div>
            </div>
          </form>
        </div>

        <EmployeeTable employees={EMPLOYEES} onRemoveEmployee={this.onRemoveEmployee} canRemove={true} />
      </div>
    )
  }
}
