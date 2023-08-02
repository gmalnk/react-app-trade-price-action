import { createChart } from "lightweight-charts";
import { CrosshairMode } from "lightweight-charts";
import React, { useEffect, useRef } from "react";

export default function ChartComponent(props) {
  const data = props.data.candleData;
  const lineData = props.data.trendlineData;
  const chartContainerRef = useRef();
  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 720,
      layout: {
        textColor: "black",
        background: { type: "solid", color: "white" },
        crosshair: {
          mode: CrosshairMode.Normal,
          vertLine: { color: "#26a69a" },
        },
        grid: { vertLines: { visible: false } },
      },
    });
    chart.timeScale().fitContent();

    if (props.showTrendline && lineData) {
      lineData.map((line) => {
        chart
          .addLineSeries({
            color: "rgba(0,0,0,1)",
            lineWidth: 0.7,
          })
          .setData(line);
      });
    }
    const candleSeries = chart.addCandlestickSeries({
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });
    candleSeries.setData(data);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [props.data, props.showTrendline]);

  return <div id="chart-container" ref={chartContainerRef} />;
}
