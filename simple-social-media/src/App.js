import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed'
import User from './User'

function App() {
  return (
    //BEM
    <div className="app">

      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />
    </div>
  );
}

export default App;
