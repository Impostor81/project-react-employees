import { Component } from 'react';
import './Search-panel.css';

export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  updateSearch = (e) => {
    const term = e.target.value;
    this.setState({term: term});
    this.props.onUpdateSearch(term);
  }

  render() {
    return (
      <div>
        <input
          type='text'
          className='form-control search-input'
          placeholder='Найти сотрудника'
          value={this.state.term}
          onChange={this.updateSearch}
        />
      </div>
    );
  }
}
