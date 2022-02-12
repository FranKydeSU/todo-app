import React from 'react'
import { useParams } from 'react-router-dom'

export default function Id() {

    const { id } = useParams()
    console.log(id)

    return (
        <div>{id}</div>
    )
}
