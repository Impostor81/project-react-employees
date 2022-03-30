import { Component } from 'react';
import './Employees-add-form.css';

export default class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: ''
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length > 3 && this.state.salary !== '') {
      this.props.addItem(this.state.name, this.state.salary);
    }
    this.setState({
      name: '',
      salary: ''
    });
  }

  render() {
    return (
      <div className='app-add-form' onSubmit={this.onSubmit}>
        <h3> Добавьте нового сотрудника </h3>
        <form className='add-form d-flex'>
          <input
            type='text'
            className='form-control new-post-label'
            placeholder='Как его зовут?'
            name='name'
            value={this.state.name}
            onChange={this.onValueChange}
          />
          <input
            type='number'
            className='form-control new-post-label'
            placeholder='З/П в $?'
            name='salary'
            value={this.state.salary}
            onChange={this.onValueChange}
          />
          <button type='submit' className='btn btn-outline-light'>
            Добавить
          </button>
        </form>
      </div>
    );
  }
}