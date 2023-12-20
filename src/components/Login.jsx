import { useRef } from "react";


//Advantage of using useRef: 
  //is less code required
  //We did not need change handlers or onChange
//Disadvantage of using useRef:
  //resetting values in a clean way is harder because you're discourage to useRef for manipulating DOM
  //Can be reset but not recommend and will end up using many refs for more complex forms
export default function Login() {
  const email = useRef();
  const password = useRef();


  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    console.log(enteredEmail, enteredPassword)
    email.current.value = '';
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input 
            id="email" 
            type="email" 
            name="email" 
            ref={email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="password" 
            name="password" 
            ref={password}
            />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
