import React from "react";
// import { Bar } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'
import { Line } from "react-chartjs-2";

const BarChartRevenue = ({chartData}) => {
    console.log(chartData)
    return <Line data={chartData}/>
}

export default BarChartRevenue;