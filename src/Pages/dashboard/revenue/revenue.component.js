import { useState } from "react";

import BarChartRevenue from "./barchartRevenue/barchartRevenue.component";

import {
    Div,
    DivLeft,
    DivContent,
    H1,
    DivBody,
    Span,
    DivHead,
    Select,
    Option,
    DivSelect,
    SpanName
} from "./revenue.styles"

const Revenue = () => {
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const calculateYears = () => {
        const currentYear = new Date().getFullYear();
        const startYear = 2000;
        const years = [];

        for (let year = startYear; year <= currentYear; year++) {
            years.push(year);
        }

        return years;
    }

    const yearsList = calculateYears();

    const data = [
        { ngay: "1", doanhthu: 100 },
        { ngay: "2", doanhthu: 200 },
        { ngay: "3", doanhthu: 300 },
        { ngay: "4", doanhthu: 400 },
        { ngay: "5", doanhthu: 100 },
        { ngay: "6", doanhthu: 400 },
        { ngay: "7", doanhthu: 200 },
        { ngay: "8", doanhthu: 200 },
        { ngay: "9", doanhthu: 150 },
        { ngay: "10", doanhthu: 120 },
        { ngay: "11", doanhthu: 320 },
        { ngay: "12", doanhthu: 420 },
        { ngay: "13", doanhthu: 170 },
        { ngay: "14", doanhthu: 280 },
        { ngay: "15", doanhthu: 300 },
        { ngay: "16", doanhthu: 500 },
        { ngay: "17", doanhthu: 100 },
        { ngay: "18", doanhthu: 200 },
        { ngay: "19", doanhthu: 200 },
        { ngay: "20", doanhthu: 150 },
        { ngay: "21", doanhthu: 120 },
        { ngay: "22", doanhthu: 320 },
        { ngay: "23", doanhthu: 420 },
        { ngay: "24", doanhthu: 170 },
        { ngay: "25", doanhthu: 280 },
        { ngay: "26", doanhthu: 300 },
        { ngay: "27", doanhthu: 500 },
        { ngay: "28", doanhthu: 100 },
        { ngay: "29", doanhthu: 500 },
        { ngay: "30", doanhthu: 100 },
    ];

    const [useData, setUseData] = useState({
        labels: data.map((item) => item.ngay),
        datasets: [
            {
                label: "Doanh thu",
                data: data.map(item => item.doanhthu),
                backgroundColor: [
                    "#83D9EC"
                ],
            },
        ]
    });


    return (
        <Div>
            <DivHead>
                <DivSelect>
                    <SpanName>Month:</SpanName>
                    <Select>
                        <Option></Option>
                        {months.map((item, index) => (
                            <Option key={index}>{item}</Option>
                        ))}
                    </Select>
                </DivSelect>
                <DivSelect>
                    <SpanName>Year:</SpanName>
                    <Select>
                        <Option></Option>
                        {yearsList.map((item, index) => (
                            <Option key={index}>{item}</Option>
                        ))}
                    </Select>
                </DivSelect>
            </DivHead>
            <DivBody>
                <DivLeft>
                    <H1>Revenue</H1>
                    <Span>Total: 10000000</Span>
                </DivLeft>
                <DivContent>
                    <BarChartRevenue chartData={useData} />
                </DivContent>
            </DivBody>
        </Div>
    )
}

export default Revenue;