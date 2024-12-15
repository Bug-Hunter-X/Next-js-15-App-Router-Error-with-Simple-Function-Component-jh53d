```javascript
// pages/index.js
export default function Home() {
  const [count, setCount] = React.useState(0);
  return (
    <div>Count: {count}</div>
  );
}
```