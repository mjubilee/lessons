import './App.css';
import { useRef } from 'react';
import './MyTable';
import MyTable from './MyTable';
import MyForm from './MyForm';

import { useState, useEffect } from 'react';
import axios from 'axios';

//Github API
type Repository = {
  id: number;
  full_name: string;
  html_url: string;
};

// Wrap elements inside the div
function App() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  const data = [1, 2, 3, 4, 5];

  const handleClickButton = () => {
    alert('Button pressed');
  }

  //Wheater API
  const [weather, setWeather] = useState({
    temp: '', desc: '', icon: ''
  });

  useEffect(() => {   
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&APIkey=b6ea9f84731018918a6af3e3db667ca5')
    .then(response => response.json())
    .then(result => {
      setWeather({
        temp: result.main.temp, 
        desc: result.weather[0].main, 
        icon: result.weather[0].icon
      });
    })
    .catch(err => console.error(err))
  }, []);

  //Github API
  const [keyword, setKeyword] = useState('');
  const [repodata, setRepodata] = useState<Repository[]>([]);

  const handleClick = () => {
    // REST API call
    axios.get<{ items: Repository[] }> (`https://api.github.com/search/repositories?q=${keyword}`)
      .then(response => setRepodata(response.data.items))
      .catch(err => console.error(err))
  };

  return (
    <div>
      <h1>Hello World</h1>
      <h2>This is my first React component</h2>

      <p>Counter = {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <br/>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        Focus input
      </button>
      <br></br>
      <ul>
        {
        data.map((number, index) =>
        <li key={index}>Listitem {number}</li>)
        }
      </ul>

      <button onClick={handleClickButton}>Press Me</button>

      
      <MyTable />
      <MyForm />
      
      <p>Temperature: {weather.temp} °C</p>
      <p>Description: {weather.desc}</p>
      <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="Weather icon" />
    

      <input value={keyword} onChange={e => setKeyword(e.target.value)} />
      <button onClick={handleClick}>Fetch</button>
       {repodata.length === 0 ? (<p>No data available</p>) : (
                  <table>
                    <tbody>
                      {repodata.map(repo => (
                        <tr key={repo.id}>
                          <td>{repo.full_name}</td>
                          <td>
                            <a href={repo.html_url}>{repo.html_url}</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )} 


    </div>

  );
}


export default App
