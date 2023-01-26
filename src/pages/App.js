import { useEffect, useState } from 'react';

import './App.css';

import Card from '../components/Card/Card';

function App() {
  const [values, setValues] = useState([]);

  useEffect(() => {
    const shuffled = ['a', 'b', 'c', 'd', 'e', 'f']
      .reduce((prev, curr) => {
        prev.push(curr, curr);
        return prev;
      }, [])
      .sort((a, b) => 0.5 - Math.random())
      .map((letter) => ({ value: letter, hide: true, matched: false }));
    setValues(shuffled);
  }, []);

  console.log(values);

  function handleClick({ value, hide, matched }, index) {
    const hasHiddenFalse = values.findIndex((value) => value.hide === false);

    if (hasHiddenFalse !== -1) {
      const previous = values[hasHiddenFalse];

      if (previous.value === value) {
        values[hasHiddenFalse].hide = undefined;
        values[hasHiddenFalse].matched = true;
        values[index].hide = undefined;
        values[index].matched = true;
        setValues([...values]);
        return;
      }
      values[hasHiddenFalse].hide = true;
      values[index].hide = true;
      setValues([...values]);
      return;
    }

    values[index].hide = false;
    setValues([...values]);
  }

  return (
    <div className="container">
      <div className="cards">
        {values.map(({ value, hide, matched }, index) => (
          <Card
            key={index}
            value={value}
            hide={hide}
            onClick={() => handleClick({ value, hide, matched }, index)}
            matched={matched}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
