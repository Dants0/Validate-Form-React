import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const n=5;

  return (
    <div className="App">
      <p>Voce clicou {count} vezes</p>
      <p>Voce clicou {count * n}</p>
      <button onClick={()=> setCount(count+1)}>Click</button>
    </div>
  );
}

// export default App;


// import React, {useState} from 'react';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);
//   const n=5;

//   return (
//     <div className="App">
//       <p>Voce clicou {count} vezes</p>
//       <p>Voce clicou {count * n}</p>
//       <button onClick={()=> setCount(count+1)}>Click</button>
//     </div>
//   );
// }

// export default App;
