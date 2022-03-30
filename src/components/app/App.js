import { Component } from 'react';

import AppInfo from '../app-info/App-info';
import SearchPanel from '../search-panel/Search-panel';
import AppFilter from '../app-filter/App-filter';
import EmployeesList from '../employees-list/Employees-list';
import EmployeesAddForm from '../employees-add-form/Employees-add-form';

import './App.css';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [
        {name: 'John Smith', salary: 800, increase: false, promote: true, id: 1},
        {name: 'Alex Maltzer', salary: 3000, increase: true, promote: false, id: 2},
        {name: 'Tomas Edison', salary: 5000, increase: false, promote: false, id: 3},
        {name: 'Lee Yong', salary: 2200, increase: false, promote: false, id: 4},
        {name: 'Kate Winslet', salary: 900, increase: false, promote: false, id: 5},
      ],
      term: '',
      filter: 'all'
    };
    this.maxId = 6;
  }

  deleteItem = id => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    });
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      promote: false,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    });
  }

  onToggleIncrease = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, increase: !item.increase}
        }
        return item;
      })
    }));
  }

  onTogglePromote = (id) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, promote: !item.promote}
        }
        return item;
      })
    }));
  }

  searchEmployee = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    });
  }

  onUpdateSearch = (term) => {
    this.setState({term: term});
  }

  filterPost = (items, filter) => {
    switch(filter) {
      case 'promote':
        return items.filter(item => item.promote);
      case 'moreThan1000':
        return items.filter(item => item.salary > 1000);
      default:
        return items;
    }
  }

  onFilterSelect = (filter) => {
    this.setState({filter})
  }


  render() {
    const {data, term, filter} = this.state;
    const employeesSum = data.length;
    const employeesSumIncrease = data.filter(item => item.increase).length;
    const visibleData = this.filterPost(this.searchEmployee(data, term), filter);

    return (
      <div className='app'>
        < AppInfo 
          employeesSum={employeesSum} employeesSumIncrease={employeesSumIncrease} 
        />
        <div className='search-panel'>
          < SearchPanel onUpdateSearch={this.onUpdateSearch} />
          < AppFilter 
            filter={filter} 
            onFilterSelect={this.onFilterSelect}
          />
        </div>
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onTogglePromote = {this.onTogglePromote}
        />
        < EmployeesAddForm addItem={this.addItem} />
      </div>
    );
  }
}
