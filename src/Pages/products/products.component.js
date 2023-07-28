import React from "react";
import { useState } from "react";
import { useEffect } from "react";


import { useGetProductGroupsQuery } from "../../redux/api/api.slice";
import { useGetTrademarkQuery } from "../../redux/api/api.slice";
import { useGetProductsQuery } from "../../redux/api/api.slice";
import AddProduct from "./addProduct/addProduct.component";

import {
    HeaderProductsPage,
    MainProductsPage,
    SideBarProductsPage,
    ContentProductsPage,
    NameOutlet,
    LayoutSearch,
    ButtonAddProduct,
    DivSearch,
    ValueToSearch,
    InputSearch,
    ButtonSearch,
    Svg,
    SpanSearch,
    SpanAddProduct,
    DivAddProduct,
    ProductsGroup,
    NameProductsGroup,
    UlProductsGroup,
    ItemProduct,
    TableProducts,
    TrProducts,
    THeaderProducts,
    ThProducts,
    TBodyProducts,
    TdProducts,
    ImgProduct,
} from "./product.styles";

const ProductsPage = () => {
    const [showLayout, setShowLayout] = useState(false);
    const [ name, setName ] = useState('');
    const [ code, setCode ] = useState('');
    const [ name1, setName1 ] = useState('');
    const [ code1, setCode1 ] = useState('');

    const { data: productGroups } = useGetProductGroupsQuery({});
    const { data: trademark } = useGetTrademarkQuery();
    const { data: products } = useGetProductsQuery({name: name1, code: code1});
    console.log(products)

    const calculateTotalQuantity = () => {
        let sumQuantity = 0;
        products?.forEach(item => {
          sumQuantity += Number(item.quantity);
        });
        return sumQuantity;
    };

    const handleLayoutAddProductClick = () => {
        setShowLayout(true);
    }

    const handleSearch = () => {
        setName1(name)
        setCode1(code)
    }

    return (
        <div>
            <HeaderProductsPage>
                <NameOutlet>Products</NameOutlet>
                <LayoutSearch>
                    <DivSearch>
                        <ValueToSearch>Tên hàng</ValueToSearch>
                        <InputSearch 
                            type="text" 
                            placeholder="Name Products..." 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </DivSearch>
                    <DivSearch>
                        <ValueToSearch>Mã Hàng</ValueToSearch>
                        <InputSearch 
                            type="text" 
                            placeholder="Code Products..."
                            value={code}
                            onChange={(e) => setCode(e.target.value)} 
                        />
                    </DivSearch>
                    <ButtonSearch
                        onClick={handleSearch}
                    >
                        <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </Svg>
                        <SpanSearch>Search</SpanSearch>
                    </ButtonSearch>
                </LayoutSearch>
                <DivAddProduct>
                    <ButtonAddProduct
                        onClick={handleLayoutAddProductClick}
                    >
                        <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </Svg>
                        <SpanAddProduct>Add New Product</SpanAddProduct>
                    </ButtonAddProduct>
                </DivAddProduct>
                {showLayout && <AddProduct setShowLayout={setShowLayout} />}
            </HeaderProductsPage>
            <MainProductsPage>
                <SideBarProductsPage>
                    <ProductsGroup>
                        <NameProductsGroup>Products Group</NameProductsGroup>
                        <UlProductsGroup>
                            <ItemProduct>All</ItemProduct>
                            {productGroups?.map(item => (
                                <ItemProduct key={item.id}>{item.name}</ItemProduct>
                            ))}
                        </UlProductsGroup>
                    </ProductsGroup>
                    <ProductsGroup>
                        <NameProductsGroup>Trademark</NameProductsGroup>
                        <UlProductsGroup>
                            <ItemProduct>All</ItemProduct>
                            {trademark?.map(item => (
                                <ItemProduct key={item.id}>{item.name}</ItemProduct>
                            ))}
                        </UlProductsGroup>
                    </ProductsGroup>
                </SideBarProductsPage>
                <ContentProductsPage>
                    <TableProducts>
                        <THeaderProducts>
                            <TrProducts>
                                <ThProducts></ThProducts>
                                <ThProducts>Code</ThProducts>
                                <ThProducts>Product name</ThProducts>
                                <ThProducts>Trademark</ThProducts>
                                <ThProducts>Price</ThProducts>
                                <ThProducts>Cost of capital</ThProducts>
                                <ThProducts>Quantity</ThProducts>
                            </TrProducts>
                        </THeaderProducts>
                        <TBodyProducts>
                            <TrProducts>
                                <TdProducts></TdProducts>
                                <TdProducts></TdProducts>
                                <TdProducts></TdProducts>
                                <TdProducts></TdProducts>
                                <TdProducts></TdProducts>
                                <TdProducts></TdProducts>
                                <TdProducts>{calculateTotalQuantity()}</TdProducts>
                            </TrProducts>
                            {products?.map(item => (
                                <TrProducts key={item.id}>
                                    <TdProducts>
                                        <ImgProduct alt={item.name} src={item.img} />
                                    </TdProducts>
                                    <TdProducts>{item.code}</TdProducts>
                                    <TdProducts>{item.name}</TdProducts>
                                    <TdProducts>{item.trademark}</TdProducts>
                                    <TdProducts>{item.price}</TdProducts>
                                    <TdProducts>{item.cost}</TdProducts>
                                    <TdProducts>{item.quantity}</TdProducts>
                                </TrProducts>
                            ))}
                        </TBodyProducts>
                    </TableProducts>
                </ContentProductsPage>
            </MainProductsPage>
        </div>
    )
}

export default ProductsPage;