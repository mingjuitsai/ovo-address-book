import React from 'react';
import EmployeeTable from './EmployeeTable';
import EMPLOYEES from './../data/empolyees';


export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchBy: "name"
    };
    this.onSearchInput = this.onSearchInput.bind(this);
    this.onSearchByInput = this.onSearchByInput.bind(this);
  }

  onSearchInput(event) {
    this.setState({
      search: event.target.value
    });
  }

  onSearchByInput(event) {
    this.setState({
      searchBy: event.target.value
    })
  }


  render() {
    return (
      <div className="Search">
        <header className="Search-header">
          <h1 className="Search-title">Search</h1>
        </header>
        <div className="Search-form">
          <form>
            <div className="inputRow">
              <div className="inputCell">
                <label htmlFor="searchBy">Search by:</label>
                <select onChange={this.onSearchByInput} name="searchBy" value={this.state.searchBy} required>
                  <option value="name">Name</option>
                  <option value="department">Department</option>
                </select>
              </div>
              <div className="inputCell Search-input">
                <label htmlFor="search">Search:</label>
                <input value={this.state.search} onChange={this.onSearchInput} type="text" id="search" name="search" required />
              </div>
            </div>
          </form>
        </div>

        <EmployeeTable employees={EMPLOYEES} search={this.state.search} searchBy={this.state.searchBy} canRemove={false} />
      </div>
    )
  }
}
