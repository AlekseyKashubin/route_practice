import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Say = () => {


    const { word } = useParams()
    const { color, backgroundColor } = useParams()



    return (
        <div style={{ color: color, backgroundColor: backgroundColor }}>

            {isNaN(word) ? "the word is : " + word : "the number is : " + word}

        </div>
    )

}

export default Say
