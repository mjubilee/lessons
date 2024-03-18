import './App.css';
import { useRef } from 'react';

import { useState, useEffect } from 'react';
import axios from 'axios';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Repositories from './Repositories'

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import AddItem from './AddItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const queryClient = new QueryClient();

//Github API
type Repository = {
  id: number;
  full_name: string;
  html_url: string;
};

export type Item = {
  product: string;
  amount: string;
}



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

  const [items, setItems] = useState<Item[]>([]);
  const addItem = (item: Item) => {
    setItems([item, ...items]);
  }
  
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
      <h1>Hello MJ</h1>
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

      
      <p>Temperature: {weather.temp} °C</p>
      <p>Description: {weather.desc}</p>
      <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="Weather icon" />
    
=========================================================
    <div className="App">
      <input value={keyword} onChange={e => setKeyword(e.target.value)} />
      <button onClick={handleClick}>Fetch</button>
      <div className="ag-theme-material" style={{height: 500, width: 850}}>
        <AgGridReact rowData={repodata}
        />
      </div>
    </div>
    =============================================
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


------------------------------------------------------------------
      <QueryClientProvider client={queryClient}>
        <Repositories />
      </QueryClientProvider>


      <Container>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Shopping List
            </Typography>
          </Toolbar>
        </AppBar>
        <AddItem addItem={addItem}/>
        <List>
          {
            items.map((item, index) =>
              <ListItem key={index} divider>
                <ListItemText
                  primary={item.product}
                  secondary={item.amount}/>
              </ListItem>
            )
          }
        </List>
      </Container>
      
    </div>

  );
}


export default App
