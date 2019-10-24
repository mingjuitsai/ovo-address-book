import React from 'react';
import EmployeeTable from './EmployeeTable';

export default class Search extends React.Component {
  render() {
    return (
      <div className="Search">
        <h1>search</h1>
        <EmployeeTable canRemove={false} />
      </div>
    )
  }
}
