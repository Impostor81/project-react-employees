import './App-filter.css';

export default function AppFilter(props) {
  const buttonsData = [
    {name: 'all', label: 'Все сотрудники'},
    {name: 'promote', label: 'На повышение'},
    {name: 'moreThan1000', label: 'З/П больше 1000$'},
  ];

  const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name;
    const classBtn = active ? 'btn-light' : 'btn-outline-light';

    return (
      <button
        className = {`btn ${classBtn}`}
        type = 'button'
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    );
  })

  return (
    <div className='btn-group'>
      {buttons}
    </div>
  );
}
