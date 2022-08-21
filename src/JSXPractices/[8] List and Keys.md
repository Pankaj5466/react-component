
Utilizing List to create components in nice way.
```
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NumberList numbers={numbers} />);
```

Note, the use of **key** to our items inside numbers.map, it is required by react to deltermine which element is changes, so that only that elemnt is updated to DOM by react.

Most often you would use IDs from your data as keys. (as long they are unique!)

We don’t recommend using indexes for keys if the order of items may change. This can negatively impact performance and may cause issues with component state.
```
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);
```
