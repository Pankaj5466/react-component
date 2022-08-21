### Why JSX?
  >Ans: JSX Code make HTML as code!

Few of the things JSX could do is:

(a) Embedding Expressions in JSX
```
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```

(b) Embed the result of calling a JavaScript function in JSX
```
const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
```

(c) JSX is an Expression Too, meaning you can return JSX from code!
```
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

```

(d) Specifying Attributes with JSX
```
const element = <a href="https://www.reactjs.org"> link </a>;
const element = <img src={user.avatarUrl}></img>;
```

(e) Specifying Children with JSX
If a tag is empty, you may close it immediately with />, like XML:
```
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

(f) JSX Prevents Injection Attacks
  > Ans: [link]([JSX Prevents Injection Attacks](https://reactjs.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks))

(g) “React elements”
JSX and  React.createElement() (aka JSX Represents Objects)

```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```
```
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
)
```
Both of the expression is identical!! 
And they create below element/
```
// Note: this structure is simplified
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

- Why CamelCase is used in JSX
  >Ans:     Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.