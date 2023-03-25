import '../styles/App.css';
import NavBar from './Layouts/Navbar';
import PageContent from './Layouts/PageContent';
import SideBar from './Layouts/Sidebar';

function App() {
  return (
    <div className="App">
      <SideBar />
      <NavBar />
      <div className='content-page'>
        <div className='container-fluid'>
          <PageContent />
        </div>
      </div>
    </div>
  );
}

export default App;
