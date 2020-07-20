import React, { useState } from 'react'
import { useSelector }  from 'react-redux'

const Home = () => {
    const [ stateName, setStateName ] = useState('')
    const data = useSelector(state => state.stateData.data)

    let stateData = data.map((data,index) => {
        return ( 
            <tr key={index}>
                <td>{data.State}</td>
                <td>{data.Confirmed}</td>
                <td>{data.Active}</td>
                <td>{data.Recovered}</td>
                <td>{data.Deaths}</td>
            </tr>
        )
    }) 

    let filteredStates = data.filter( nameOfState => 
            nameOfState.State.toLowerCase().includes(stateName.toLowerCase())
        ) 

    return (
        <div className="container">
            <input type="text" placeholder="Search by state.." value={stateName} onChange={(e) => setStateName(e.target.value)} />

            <table className="striped responsive-table">
                <thead>
                    <tr>
                        <th>State/UT</th>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Recovered</th>
                        <th>Deceased</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        stateName === '' 
                        ? stateData
                        : filteredStates.map((data,index) => {
                            return(
                                <tr key={index}>
                                    <td>{data.State}</td>
                                    <td>{data.Confirmed}</td>
                                    <td>{data.Active}</td>
                                    <td>{data.Recovered}</td>
                                    <td>{data.Deaths}</td>
                                </tr>
                            )
                        }) 
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home
