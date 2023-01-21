//imports the React library and the 'useContext' hook 
//from the 'react' library. also imports the 'App.css' and 
//'bootstrap' stylesheets.
import React from 'react';
import { useContext } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


// It creates a context object called 'MyContext' 
//that can be passed down through the component tree.
const MyContext = React.createContext();

// In the 'App' function, a value of { message: "Hello World!" } is 
//passed as the value to the 'MyContext.Provider' component, 
//and the 'HelloWorld' component is rendered within it.
function App() {
  const val = {message: "Hello World!"}
  return (
    <MyContext.Provider value = {val}>
      <HelloWorld />
    </MyContext.Provider>
  );
}

// In the 'HelloWorld' function, the 'useContext' hook is used to 
//access the value from 'MyContext' and assign it to the 
//'context' variable.
function HelloWorld() {
const context = useContext(MyContext)
// The component then renders a card with the message "Hello World!"
// and a description of how it is being rendered using the useContext hook.
return (
  <>
    <div class="main">
      <div class="card mt-5">
        <div class="card-body">
          <div class="card-header">
            <h3>{context.message}</h3>
          </div>
          <div class="card-body mt-3">
            <h6>The above greeting is brought to you by the useContext hook in React</h6>
           
           </div> 
        </div>
      </div>
    </div>
  </>
)
}
// The 'App' component is exported as the default export, making 
// it the starting point for the application.
export default App;
