
import './App.css';
import Users from './components/Users/Users'
import Posts from './components/Posts/Posts'
import Comments from './components/Comments/Comments'

function App() {
  return (
      <div className={'mainBlock'}>

          <div className={'twoBlocks'}>
              <div className={'mainUserBlock'}><Users/></div>
             <div className={'mainPostBlock'}><Posts/></div>
          </div>

          <div className={'thirdBlock'}><Comments/></div>

      </div>

  );
}

export default App;
