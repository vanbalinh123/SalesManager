import React from "react";
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'


const BarChartTopProduct = ({chartData}) => {
    console.log(chartData)
    return <Bar data={chartData}/>
}

export default BarChartTopProduct;