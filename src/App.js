import { Outlet } from 'react-router-dom';
import { useDispatch /*untuk melempar action */, useSelector /*mengambil state dari sebuah store */ } from 'react-redux'
import './App.css';
import {increment, decrement, setCounter} from'./store/action'

function App() {
  const state = useSelector((state) => state) // nama yang dalam kurung bisa apa saja
  const dispatch = useDispatch()

  const incrementCounter = () => {
    dispatch(
      increment()
      //{type: "INCREMENT"}
    )
  }

  const decrementCounter = () => {
    dispatch({
      type: "DECREMENT"
    })
  }

  const customCounter = (value) => {
    dispatch({
      type: "SET_COUNTER",
      data: state.counter + value
    })
  }

  return (
    <div className="App">
      <nav>
        <>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </>
      </nav>
      <div>
        <h3>Counter Time</h3>
        <h3>{ state.counter }</h3>
        <button onClick={incrementCounter}>Add by 1</button>
        <button onClick={decrementCounter}>Substract by 1</button>
        <button onClick={()=>customCounter(60)}>Add by 60</button>
      </div>
      <Outlet />
      <p>asdawd</p>
    </div>
  );
}

export default App;
