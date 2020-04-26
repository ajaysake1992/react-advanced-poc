import React, { useState , Fragment, useEffect} from "react";

function Counter() {

  const [count, setState] = useState(0);

  const [name, setName] = useState('');

  useEffect(() => {
      document.title = `${name} has clicked ${count} times`;

      return () => {
          console.log('Cleaned up code here');
      }
  },[count, name]);


  return (
    <Fragment>
        <input type="text" onChange={(e) => setName(e.target.value)}/>
      <div>{name} has clicked {count} tmies</div>
      <button onClick={() => setState(count + 1)} className="btn btn-primary">
        Increment
      </button>
    </Fragment>
  );
}

export default Counter;
