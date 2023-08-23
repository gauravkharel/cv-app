import { v4 as uuidv4 } from 'uuid';

const MyComponent = () => {
  const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 28 },
  ];

  const dataWithKeys = data.map(obj => ({ ...obj, key: uuidv4() }));
  console.log(dataWithKeys)
  return (
    <div>
      {dataWithKeys.map(item => (
        <div key={item.key}>
          <p>Name: {item.name}</p>
          <p>Age: {item.age}</p>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
