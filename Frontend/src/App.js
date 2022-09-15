import Routes from './routes/routes';
import Nav from './Components/UI/Nav';

function App() {
  
  return (
    <div className='overflow'>
      <Nav/>
      <div className='container-fluid p-0'>
        <div className='row'>
          <Routes/>
        </div>
      </div>
    </div>
  );
}

export default App;
