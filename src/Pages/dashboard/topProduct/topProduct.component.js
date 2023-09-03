import { useState } from "react";

import BarChartTopProduct from "./barChartTopProduct/barchartTopProduct.component";

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
    SpanName,
    Input
} from "./topProduct.styles"
const TopProduct = () => {
    const [quantity, setQuantity] = useState(8)
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
        {tensp:"Chuot khong day", sluongban: 150},
        {tensp:"Ban phim sin", sluongban: 350},
        {tensp:"Loa sin", sluongban: 200},
        {tensp:"Man hinh sin", sluongban: 160},
        {tensp:"Ipad sin", sluongban: 260},
        {tensp:"May tinh sin", sluongban: 100},
        {tensp:"Day cap sin", sluongban: 270},
        {tensp:"Laptop sin", sluongban: 110},
    ];

    data.sort((a, b) => b.sluongban - a.sluongban);

    const [useData, setUseData] = useState({
        labels: data.map((item) => item.tensp),
        datasets: [
            {
                label: "Top san pham ban chay",
                data: data.map(item => item.sluongban),
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
                    <SpanName>Day:</SpanName>
                    <Input type="number" min={1} max={31}/>
                </DivSelect> 
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
                <DivSelect>
                    <SpanName>Quantity</SpanName>
                    <Input value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                </DivSelect>
            </DivHead>
            <DivBody>
                <DivLeft>
                    <H1>Top Product</H1>
                    <Span>Total: 1000 san pham</Span>
                </DivLeft>
                <DivContent>
                    <BarChartTopProduct chartData={useData} />
                </DivContent>
            </DivBody>
        </Div>
    )
}

export default TopProduct;