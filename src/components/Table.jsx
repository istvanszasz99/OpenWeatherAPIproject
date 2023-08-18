import React, { useEffect, useState } from 'react'

const Table = () => {
const [datas, setDatas] = useState([])
const {REACT_APP_API_KEY} = process.env
const fetchWeatherData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/group?id=3054643,2643743,2988507,5128581,524901,703448&units=metric&appid=${REACT_APP_API_KEY}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setDatas(data)
      })
  }

  useEffect(() => {
    fetchWeatherData()
  }, [])

  return (
    <table id="mytable" className="center mx-auto my-16 text-xl table-fixed border-separate border-4 rounded-lg border-slate-700">
      <thead>
        <tr> 
          <th>Ország</th>
          <th>Település</th>
          <th>Hőmérséklet</th>
          <th>Szél</th>
          <th>Páratartalom</th>
        </tr>  
      </thead>
      <tbody>
        {datas.list?.map(item => {return( 
          <tr> 
            <td>{item.sys.country}</td>
            <td>{item.name}</td>
            <td>{item.main.temp}°C</td>
            <td>{item.wind.speed} Km/h</td>
            <td>{item.main.humidity}%</td>
          </tr>)})}
        </tbody>
      </table>
  );
}

export default Table;