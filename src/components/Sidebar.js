import React from "react";

export default function Sidebar(props) {
  console.log("running");
  return (
    <div id="sidebar-container">
      <div onClick={() => props.updateShowTrendlines()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28"
          width="28"
          height="28"
          fill="none"
        >
          <path
            stroke="currentColor"
            d="M6 12l4.8-4.8a1 1 0 0 1 1.4 0l2.7 2.7a1 1 0 0 0 1.3.1L23 5"
          ></path>
        </svg>
      </div>
      <div>SMA</div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28"
          width="28"
          height="28"
          fill="none"
        >
          <path
            stroke="currentColor"
            d="M6 12l4.8-4.8a1 1 0 0 1 1.4 0l2.7 2.7a1 1 0 0 0 1.3.1L23 5"
          ></path>
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M19 12a1 1 0 0 0-1 1v4h-3v-1a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v2H7a1 1 0 0 0-1 1v4h17V13a1 1 0 0 0-1-1h-3zm0 10h3v-9h-3v9zm-1 0v-4h-3v4h3zm-4-4.5V22h-3v-6h3v1.5zM10 22v-3H7v3h3z"
          ></path>
        </svg>
      </div>
      <div onClick={() => props.updateListOfListBar("triangle")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28"
          width="28"
          height="28"
        >
          <g fill="currentColor" fill-rule="nonzero">
            <path d="M9.457 18.844l-5.371 2.4.408.913 5.371-2.4z"></path>
            <path d="M13.13 17.203l.408.913 13.688-6.116-6.736-3.01-.408.913 4.692 2.097z"></path>
            <path d="M11.077 5.88l5.34 2.386.408-.913-5.34-2.386z"></path>
            <path d="M7.401 4.237l.408-.913-5.809-2.595v19.771h1v-18.229z"></path>
            <path d="M3.708 20.772l5.51-14.169-.932-.362-5.51 14.169zM9.265 6.39l1.46 10.218.99-.141-1.46-10.218zM13.059 17.145l4.743-6.775-.819-.573-4.743 6.775z"></path>
            <path d="M9.5 6c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM11.5 20c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM18.5 10c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM2.5 24c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path>
          </g>
        </svg>
      </div>
      <div onClick={() => props.updateListOfListBar("trendline")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28"
          width="28"
          height="28"
        >
          <g fill="currentColor" fill-rule="nonzero">
            <path d="M7.354 21.354l14-14-.707-.707-14 14z"></path>
            <path d="M22.5 7c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM5.5 24c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm0 1c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5z"></path>
          </g>
        </svg>
      </div>
      <div onClick={() => props.updateListOfListBar("doji")}>doji</div>
      <div onClick={() => props.updateListOfListBar("hammer")}>hammer</div>
      <div onClick={() => props.updateListOfListBar("engulphing")}>
        engulphing
      </div>
      <div onClick={() => props.updateListOfListBar("star")}>star</div>
    </div>
  );
}
