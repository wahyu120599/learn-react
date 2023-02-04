import logo from './logo.svg';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { kurang,tambah } from './redux/Action/Initaction';
function App() {
  const getstatedata = useSelector((state)=>state.IniSireducer);
  console.log(getstatedata);
  const dispact = useDispatch();
  return (
    <div className="App">
      <div>{getstatedata}</div>
      <div>
        <button onClick={()=>dispact(tambah())}>Tambah</button>
        <button onClick={()=>dispact(kurang())}>Kurang</button>
      </div>
    </div>
  );
}

export default App;
