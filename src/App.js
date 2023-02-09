import './App.css';
import PainScale from './components/PainScale';
import VoiceRecording from './components/VoiceRecording';
import BoxBaymax from './components/BoxBaymax';
import ContainerApp from './components/ContainerApp/ConteinerApp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <ContainerApp />
      <BoxBaymax />
      <VoiceRecording color='blue' />
      <VoiceRecording color='orange' />
      <PainScale/>
    </div>
  );
}

export default App;
