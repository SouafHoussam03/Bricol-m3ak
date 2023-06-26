import React from "react"
import video from "../video/الفيديو الخاص بي.mp4"
import { DefaultPlayer as Video } from "react-html5video/dist"
import 'react-html5video/dist/styles.css'
import thum from '../image/backgrond.jpg'


const ReactVideo = () =>{
    return(
        <div className="" id='left'>
            <div className="zone-text-bricol" id="float">
                <p>This video shows the services we provide .<br/>And also the way to carry out tasks with great quality and high technology .</p>
            </div>
            <div className="container zone-video">
                <Video className="video"  
                    loop
                    poster={thum}
                    onCanPlayThrougt = {() =>{
                        console.log('video play');
                    }}
                >
                    <source src={video} type="video/webm"/>
                </Video>
            </div>
        </div>
    )
}
export default ReactVideo