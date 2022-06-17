import React, { useEffect, useState } from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import './GetMemes.css'

const GetMemes = () => {

    type ChuckNorris = {
        "categories": [],
        "created_at": string,
        "icon_url": string,
        "id": string,
        "updated_at": string,
        "url": string,
        "value": string
    }

    const [memeData, setMemeData] = useState<ChuckNorris>({"categories": [],
    "created_at": "",
    "icon_url": "",
    "id": "",
    "updated_at": "",
    "url": "",
    "value": ""})

    const APIURL = "https://api.chucknorris.io/jokes/random"

    useEffect(() => {
        getAllProductSuppliersAction();
    }, [])

    const getAllProductSuppliersAction = async () => {
        let result = await fetch(`${APIURL}`, { method: "GET" });
        const dataResult = await result.json();
        setMemeData(dataResult);
    }

    return (
        <div className='cardGroup'>
            {memeData.value}
        </div>
    )
}

export default GetMemes
