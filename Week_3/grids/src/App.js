import logo from './logo.svg';
import './App.css';


{/*handleClick(){
 //need help with event handlers and state
}*/}

function App() {

  // create function within the brackets
  return (
    <div className="grid-container">

    <div class="grid-item1">
      <button onClick = {handleClick}>one</button>
    </div>

    <div class="grid-item2">
      <button onClick = {handleClick}>two</button>
    </div>

    <div class="grid-item3">
      <button onClick = {handleClick}>three</button>
      </div>  

    <div class="grid-item4">
      <button onClick = {handleClick}>four</button>
    </div>
    

</div>
  );
}

export default App;
