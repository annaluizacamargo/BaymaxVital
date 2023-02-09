import './App.css';
import PainScale from './components/PainScale';
import VoiceRecording from './components/VoiceRecording';
import BoxBaymax from './components/BoxBaymax';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <BoxBaymax />
      <VoiceRecording color='blue' />
      <VoiceRecording color='orange' />
      <PainScale/>
    </div>
  );
}

export default App;
