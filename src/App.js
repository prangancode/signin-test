import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './App.css';
import initializeAuthentication from './Firebase/firebase.initialize';


initializeAuthentication();

const provider = new GoogleAuthProvider();

function App() {
  const handleGoogleSignIn = () => {
    const auth = getAuth();
    console.log('clicked');
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
  }
  return (
    <div className="App">

      <button onClick={handleGoogleSignIn}>Google Sign In</button>

    </div>
  );
}

export default App;

