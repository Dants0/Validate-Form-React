import './App.css';
import FormInput from './components/FormInput';
import {useState} from 'react';

function App() {
  const [values,setValues] = useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    cpassword:""
  })

  
  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      label:"Username"
    },
    {
      id:2,
      name:"email",
      type:"text",
      placeholder:"Email",
      label:"Email"
    },
    {
      id:3,
      name:"birthday",
      type:"text",
      placeholder:"Birthday",
      label:"Birthday"
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      label:"Password"
    },
    {
      id:5,
      name:"cpassword",
      type:"password",
      placeholder:"Cpassword",
      label:"Cpassword"
    },
  ];

  const handleSubmit = (e)=>{
    e.preventDefault();
  };

  const onChange = (e) =>{
    setValues({ ...values, [e.target.name]: e.target.value});
  }


  console.log(values);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {inputs.map((input)=>(
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;


//React Hooks count example
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
