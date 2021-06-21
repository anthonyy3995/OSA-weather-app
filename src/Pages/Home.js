import React, {useState}from 'react'
import { LOAD_WEATHER } from '../graphql/Queries'
import { useLazyQuery } from '@apollo/client'
import '../App.css'

const Home = () => {
    const [citySearched, setCitySearched] = useState("")
    const [getWeather, {data, loading, error}] = useLazyQuery(LOAD_WEATHER, {
        variables: {name: citySearched}})
    
    if (data){
        console.log(data)
    }
    
    return (
        <div>
            <h1>Weather App</h1>
            <div className='search'>
                <input 
                    value={citySearched} type='text' placeholder='City Name...' 
                    onChange={(event)=> setCitySearched(event.target.value)}/>
                <button onClick={getWeather}> Search </button>
            </div>
            <div className='info'>
                {data && (
                    <>
                        <h3>Name: {data && data.getCityByName.name}</h3>
                        <h3>Temperature: {data && data.getCityByName.weather.temperature.actual}</h3>
                        <h3>Description: {data && data.getCityByName.weather.summary.description}</h3>
                    </>
                )
                }
                


            </div>
            
            
        </div>
    )
}

export default Home
