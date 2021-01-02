import './App.css';
import CountUp,{useCountUp} from 'react-countup';

function App() {
  const {countUp, start, pauseResume, reset, update}= useCountUp({
    duration:4,
    end:20000,
    startOnMount:false,
  })
  return (
    <div className="App">
      {/* default duration : 2s */}
      {/* default start : 0 */}
      <h1>{countUp}</h1>
      <button onClick={start}>Start</button>
      <button onClick={pauseResume}>Pause/Resume</button>
      <button onClick={reset}>Reset</button>
      <button onClick={()=>update(15000)}>Update</button>
      <h2><span style={{color:'#963e3e',fontWeight:400,fontSize:'16px',display:'block'}}>CountUp with prefix :</span> <CountUp end={500} duration={5} start={100} prefix='€'/></h2>
      <h2><span style={{color:'#963e3e',fontWeight:400,fontSize:'16px',display:'block'}}>CountUp with suffix :</span> <CountUp end={600} duration={5} start={50} suffix='MAD'/></h2>
    </div>
  );
}

export default App;
