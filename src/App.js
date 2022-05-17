import logo from './logo.svg';
import './App.css';

const number =5555;
const singers= [
  {name:'Dr. Mahfuz', job:'Singer'},
  {name:'Dr. Kodu', job:'Dancer'},
  {name:'Dr. Lau', job:'Farmer'},
  {name:'Dr. Mahfuz', job:'Singer'},
  {name:'Dr. Kodu', job:'Dancer'},
  {name:'Dr. Lau', job:'Farmer'},
]

function App() {
  const nayoks = ['Rubel', 'Bapparaz', 'Joshim', 'Riaz', 'salman', 'Anowara'];

  return (
    <div className='App'>
      {
      nayoks.map(nayok => 
        <li> Name: {nayok} </li>)
      }

      {/* {nayoks.map(nayok => 
        <Person name={nayok}></Person>)
      } */}
      {
        singers.map(singer =>
          <Person name={singer.name}></Person>)
      }

      {/* <Person name={nayoks[0]}></Person>
      <Person name={nayoks[1]}></Person>
      <Person name="BappaRaaz" nayika="kopila"></Person> */}
      <h5>New Component!!!!!!!!!!!!!!!!!!!!Yay</h5>
      <p>Rock mama</p>
      <Friend phone='0189326341'></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}
function Person(props) {
  console.log(props);
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
  );
}
function Friend(props) {
  console.log(props);
  return (
    <div className='friend'>
      <h3>Name: Elon Mask</h3>
      <p>Phone:{props.phone} </p>
    </div>
  );
}
export default App;
