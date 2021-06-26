
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';
import 'semantic-ui-css/semantic.min.css'
import JobPostingCreate from './pages/JobPostingCreate';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navi/>
      <Dashboard/>
      {/* <JobPostingCreate/> */}
      
    </div>
  );
}

export default App;
