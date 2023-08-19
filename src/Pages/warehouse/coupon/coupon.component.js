import { useState } from "react";
import { useEffect } from "react";

import { useGetProductsQuery } from "../../../redux/api/products-api.slice";

import {
    LayoutAdd,
    RightLayoutAdd,
    LeftLayoutAdd,
    SearchLayout,
    SpanName,
    Input,
    InforToAddLayout,
    BtnSearch,
    Span,
    ResultSearch,
    ChildResult,
    DivImg,
    Img,
    NameResult,
    Table,
    TdQuantity,
    InputQuantity
} from "./coupon.styles";

import {
    Tr,
    THeader,
    Th,
    Td,
    TBody,
} from "../warehouse.styles";

import { Svg } from "../../generalCss/headerTemplate.styles";

const Coupon = () => {
    const [name, setName] = useState('');
    const [name1, setName1] = useState('');
    const [checkSearch, setCheckSearch] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState([]);

    const { data: products } = useGetProductsQuery({
        name: name1,
    });

    useEffect(() => {
        if (name === '') {
            setCheckSearch(false)
        }
    }, [name])

    const handleSearch = () => {
        if (name === '') {
            setCheckSearch(false)
        } else {
            setName1(name)
            setCheckSearch(true)
        }
    }

    const handleItemSearchClick = (item) => {
        let exist = selectedProducts.find(i => i.id === item.id);
        if (exist === undefined) {
            setSelectedProducts([...selectedProducts, item]);
        } else {
            alert('This product already exists!')
        }
    }
    

    return (
        <LayoutAdd>
            <LeftLayoutAdd>
                <SearchLayout>
                    <SpanName>Product Name</SpanName>
                    <Input
                        type="text"
                        placeholder="Product Name..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <BtnSearch
                        onClick={handleSearch}
                    >
                        <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </Svg>
                        <Span>Search</Span>
                    </BtnSearch>
                    {checkSearch === false ||
                        <ResultSearch>
                            {products?.products.length === 0 ? (
                                <ChildResult>No have product</ChildResult>
                            ) : (
                                products?.products.map(item => (
                                    <ChildResult
                                        key={item.id}
                                        onClick={() => handleItemSearchClick(item)}
                                    >
                                        <DivImg>
                                            <Img alt={item.name} src={item.img} />
                                        </DivImg>
                                        <NameResult>{item.name}</NameResult>
                                    </ChildResult>
                                ))
                            )}
                        </ResultSearch>
                    }
                </SearchLayout>
                <InforToAddLayout>
                    <Table>
                        <THeader>
                            <Tr>
                                <Th style={{ width: "70px" }}></Th>
                                <Th>Code</Th>
                                <Th>Name</Th>
                                <Th>Cost</Th>
                                <Th>Total</Th>
                                <Th>Quantity</Th>
                            </Tr>
                        </THeader>
                        <TBody>
                            {selectedProducts.map(item => (
                                <Tr key={item.id}>
                                    <Td>
                                        <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </Svg>
                                    </Td>
                                    <Td>{item.code}</Td>
                                    <Td>{item.name}</Td>
                                    <Td>{item.cost}</Td>
                                    <Td>{item.cost}</Td>
                                    <TdQuantity>
                                        <InputQuantity
                                            type="number"
                                            min={0}
                                        />

                                    </TdQuantity>
                                </Tr>
                            ))}
                        </TBody>
                    </Table>
                </InforToAddLayout>
            </LeftLayoutAdd>
            <RightLayoutAdd>

            </RightLayoutAdd>
        </LayoutAdd>
    )
}

export default Coupon;