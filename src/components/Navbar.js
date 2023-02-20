import React from "react"

export default function Navbar(props){
    return (
        <div id="Navbar-container">
            <span id="Navbar-stockName">{props.Symbol}</span>
            <div id="search-options">
                <span id="Navbar-search">
                    <input type="text"></input>
                </span>
                <span id="Navbar-search-btn">
                    <button onClick={()=>props.setSymbol()}>Search</button>
                </span>
            </div>
            <div id="time-frame">
                <span id="Navbar-1h">1H</span>
                <span id={props.timeFrame === "1d"? "Navbar-clicked": "Navbar-1d"} onClick= {()=>props.setTimeFrame("1d")}>D</span>
                <span id={props.timeFrame === "1wk"? "Navbar-clicked": "Navbar-1wk"} onClick= {()=>props.setTimeFrame("1wk")}>W</span>
                <span id={props.timeFrame === "1mo"? "Navbar-clicked": "Navbar-1mo"} onClick= {()=>props.setTimeFrame("1mo")}>M</span>
            </div>
            <div id="ohlc">
                <span id="Navbar-open">{"O "+Math.round(props.O*100)/100}</span>
                <span id="Navbar-high">{"H "+Math.round(props.H*100)/100}</span>
                <span id="Navbar-low">{"L "+Math.round(props.L*100)/100}</span>
                <span id="Navbar-close">{"C "+Math.round(props.C*100)/100}</span>
            </div>
        </div>
    )
}