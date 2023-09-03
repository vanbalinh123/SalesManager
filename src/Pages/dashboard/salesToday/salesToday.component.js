import {
    Div,
    H1,
    DivContent,
    DivChild,
    Span,
    DivBody,
    DivHead,
    SpanName,
    Input
} from "./salesToday.styles"

const SalesToday = () => {

    return (
        <Div>
            <DivHead>
                <SpanName>Day:</SpanName>
                <Input type="date"/>
            </DivHead>
            <DivBody>
                <H1>Sales results</H1>
                <DivContent>
                    <DivChild>
                        <Span>10 Hoá đơn</Span>
                        <Span>1000000</Span>
                        <Span>Doanh thu</Span>
                    </DivChild>
                    <DivChild>
                        <Span>Số sản phẩm được bán</Span>
                        <Span>30</Span>
                    </DivChild>
                    <DivChild>
                        <Span>1 Phiếu</Span>
                        <Span>200000</Span>
                        <Span>Trả hàng</Span>
                    </DivChild>
                </DivContent>
            </DivBody>
        </Div>
    )
}

export default SalesToday;