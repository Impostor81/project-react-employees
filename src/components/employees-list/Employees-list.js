import EmployeesListItem from '../employees-list-item/Employees-list-item';

import './Employees-list.css';

export default function EmployeesList({ data, onDelete, onToggleIncrease, onTogglePromote }) {
  return (
    <ul className='app-list list-group'>
      {data.map(item => (
        <EmployeesListItem
          key={item.id}
          {...item}
          onDelete={() => onDelete(item.id)}
          onToggleIncrease={() => onToggleIncrease(item.id)}
          onTogglePromote = {() => onTogglePromote(item.id)}
        />
      ))}
    </ul>
  );
}
