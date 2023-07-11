import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Say = () => {


    const { word } = useParams()
    const { color, backgroundColor } = useParams()



    return (
        <div style={{ color: color, backgroundColor: backgroundColor }}>

            <h1>{isNaN(word) ? "the word is : " + word : "the number is : " + word}</h1>

        </div>
    )

}

export default Say
