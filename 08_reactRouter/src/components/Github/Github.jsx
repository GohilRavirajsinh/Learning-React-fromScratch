import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([]) // this is (fetch.then.catch.finally) but best is Async.Await
  //   useEffect(() => {
  //       fetch('https://api.github.com/users/GohilRavirajsinh')
  //           .then(response => response.json())
  //           .then(data => {
  //               console.log(data)
  //               setData(data)
  //           })
  //   }, [])
  return (
    <>
      <div className='bg-gray-600 text-white text-3xl p-4 m-4 rounded-lg text-center'>Github followers: {data.followers}
        <div className='bg-gray-600 text-white text-3xl p-4 m-4 rounded-lg text-center'>Github Bio: {data.bio}</div>
        <img className='text-center' src={data.avatar_url} alt="Get Picture" width={300} height={300} />
      </div>
    </>
  )
}

// this is the second method and optimised method to call data using api, it call and store data into cache to improve loading.
export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/GohilRavirajsinh')
  return response.json()
}
// use this method to call this method into main.jsx is neccesary to connect (loader={githubInfoLoader})