import React from 'react'
import loadGif from "../assets/img/loading.gif"

function Loading() {
    return (
        <div style={{
            width: "100%",
            backgroundColor: "red",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <img src={loadGif} style={{
                width: "10%",
                height: "10%"
            }} 
            alt="loading gif"
            />
        </div>
    )
}

export default Loading
