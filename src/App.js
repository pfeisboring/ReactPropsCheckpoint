import './App.css';
import ProfileComponent from './Profile/ProfileComponent';



function App() {
  const styleObject = { color: "Green", textAlign:'center'}

  return (
    <div className="App" style={styleObject}>
      <ProfileComponent fullName="Walid Boulima" bio="hello" profession="Etudiant" props={<img src="/cv.jpg" alt="Range Rover"></img>} ></ProfileComponent>
     </div>
  );
}

export default App;
