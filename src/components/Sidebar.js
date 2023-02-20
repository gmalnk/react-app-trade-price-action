import React from "react"

export default function Sidebar(props){
    return (
        <div id="sidebar-container">
            <div onClick={()=>props.updateShowTrendlines()}>Show Trendlines</div>
            <div>SMA</div>
            <div>Volume</div>
            <div onClick={()=>props.updateListOfListBar("triangle")}>triangle</div>
            <div onClick={()=>props.updateListOfListBar("trendline")}>trendline</div>
            <div onClick={()=>props.updateListOfListBar("doji")}>doji</div>
            <div onClick={()=>props.updateListOfListBar("hammer")}>hammer</div>
            <div onClick={()=>props.updateListOfListBar("engulphing")}>engulphing</div>
            <div onClick={()=>props.updateListOfListBar("star")}>star</div>
        </div>
    )
}