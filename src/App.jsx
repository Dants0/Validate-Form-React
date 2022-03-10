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
      errorMessage:"Please, should be 3-16 characters and shouldn't include any special character.",
      label:"Username",
      pattern:"^[A-Za-z0-9]{3,16}$",
      required:true,
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"It should be a valid email",
      label:"Email",
      required:true
    },
    {
      id:3,
      name:"birthday",
      type:"date",
      placeholder:"Birthday",
      errorMessage:"",
      label:"Birthday"
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"Please, should be 8-20 characters",
      label:"Password",
      pattern:"[A-Za-z0-9]{8,20}$",
      required:true
    },
    {
      id:5,
      name:"cpassword",
      type:"password",
      placeholder:"Confirm password",
      errorMessage:"Password don't match",
      label:"Confirm password",
      pattern: values.password,
      required:true
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
        <h1>Register</h1>
        {inputs.map((input)=>(
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
        ))}
        <button>Submit</button>
      </form>
      <form action={handleSubmit}>
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
