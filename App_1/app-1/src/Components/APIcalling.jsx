import React from 'react'
import { getData, getRandomUser } from '../Api/postsApi'
import { useState, useEffect } from 'react'
// import Postcard from './Postcard'
import Usercard from './Usercard'

const APIcalling = () => {


    //For call APi Demo 1
    // const [data,setData] = useState(null);

    // useEffect(() =>{
    //     getData().then((posts) => setData(posts));
    // }, []);


    //For Calling Random User API 

    const [userData, setUserData] = useState(null);

    useEffect(() =>{
        getRandomUser().then((user) => setUserData(user.results[0]))
      }, []);
      
      
      const refreshData = () =>{
      getRandomUser().then((user) => setUserData(user.results[0]))

    }

  return (
    <div>
        {userData ? <Usercard data={userData}/> : <p>No UserData</p>}
        <button onClick={refreshData}>Refresh</button>
        {/* {data ? data.map((e) => <Postcard title= {e.title} body = {e.body}/>): <p>No data</p>} */}
    </div>
  )
}

export default APIcalling