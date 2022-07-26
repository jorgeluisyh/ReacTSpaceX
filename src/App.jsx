import { useState, useEffect, Fragment } from 'react'
import * as API from './services/launches'
import logo from "./assets/SpaceX-Logo.png"

export  function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <Fragment>
      <img src={logo} width={300}/>
      <h1>SpaceX Launches</h1>
      <ul>
        {
          launches.map(launch =>(
            <li key={launch.flight_umber}>{launch.mission_name} ({launch.launch_year} )</li>
          ))
        }
      </ul>
    </Fragment>
  )
}

