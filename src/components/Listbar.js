import React from "react";

export default function Listbar(props) {
  const listbarElements = props.list.map((stock) => {
    return (
      <div
        id={props.Symbol === stock.Symbol ? "SelectedStock" : stock.Symbol}
        onClick={() => props.setSymbol(stock.Symbol)}
      >
        {stock.Symbol}
      </div>
    );
  });
  return (
    <div id="listbar-container">
      <div id="listbar-header" onClick={() => props.updateListOfListBar("all")}>
        All Stocks List
      </div>
      {listbarElements}
    </div>
  );
}
