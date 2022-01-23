import './App.css';
import PersonCard from './Components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard 
        firstName={ 'Dlongz' }
        lastName={ "Louis"}
        age={ 33 }
        hColor={ 'Brown' }

      />
      <PersonCard 
        firstName={ 'Hero' }
        lastName={ "Louis"}
        age={ 27 }
        hColor={ 'Black' }

      />
      <PersonCard 
        firstName={ 'StrongArm' }
        lastName={ "Louis"}
        age={ 26 }
        hColor={ 'Black' }

      />
      <PersonCard 
        firstName={ 'KinkyKurlz' }
        lastName={ "Louis"}
        age={ 18 }
        hColor={ 'Pink' }

      />

      {/* <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button> */}
    </div>
  );
}

export default App;
