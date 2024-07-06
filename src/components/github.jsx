import React, { useEffect, useState } from "react"

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/nishit-luhadia30')
        .then(response => response.json())
        .then(data => {
            setData(data);
        })
    })
    return (
        <>
        <h1 className="text-center bg-gray-600 text-white p-4 text-5xl">Github Followers: {data.followers}
            <img src={data.avatar_url} alt="" width={300}/>
        </h1>
        
        </>
    )
}

export default Github