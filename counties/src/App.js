import {  useState, useEffect } from "react";
import axios from 'axios';
import './index.css';
import Countries from './components/Countries';

function App() {
  const [value, setValue] = useState('');
  const [found, setFound] = useState([]);
  const [response, setResponse] = useState([]);
  const [count, setCount] = useState(null);
  const [impresions, setImpresions] = useState([]);
  const [generals, setGenerals] = useState({});
  const [isDelete, setIsDelete] = useState(false);
  
  useEffect(() => {
    if (impresions.length === 0) {
      axios
        .get('https://restcountries.com/v3.1/all')
        .then(response => setResponse(response.data));
      return;
    }

    if (isDelete) return;
    const info = found[impresions.at(-1)];
    axios
      .get(`http://api.openweathermap.org/geo/1.0/direct?q=${info.capital[0]},${info.cca3}&limit=1&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => { 
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${res.data[0].lat}&lon=${res.data[0].lon}&appid=${process.env.REACT_APP_API_KEY}`)})
      .then(res => {
        setGenerals({ ...generals, [impresions.at(-1)]: res.data })
      })
  }, [impresions])

  const handleChange = (event) => {
    const value = event.target.value;
    setValue(value);
    setGenerals([]);
    setImpresions([]);
    setIsDelete(false);
    const lower = value.toLowerCase();
    const result = [];
    let index;

    for (let i = 0; response.length > i; i++) {
      const common = response[i].name.common
      if (!common.toLowerCase().includes(lower)) continue;
      index = i;
      result.push(response[i]);
    }

    setCount(index);
    setFound(result);
  }

  return (
    <div>
      find countries
      <input 
        value={value} 
        onChange={handleChange}
      />
      <Countries 
        value={value}
        found={found}
        impresions={impresions}
        setImpresions={setImpresions}
        generals={generals}
        setGenerals={setGenerals}
        response={response}
        count={count}
        setIsDelete={setIsDelete}
      />
    </div>
  );
}

export default App;
