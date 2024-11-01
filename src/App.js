import Form from './components/Form';
import Card from './components/Card';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='w-full min-vh-100 d-flex justify-content-center align-items-center'>
      <div className='shadow-lg gap-4'>
        <Form/>
        <Card/>
      </div>
    </div>
  );
}

export default App;
