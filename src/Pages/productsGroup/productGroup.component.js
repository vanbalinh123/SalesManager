import { useForm } from "react-hook-form";
import { useState } from "react";

import { useGetProductGroupsQuery } from "../../redux/api/api.slice";
import { useGetProductsQuery } from "../../redux/api/api.slice";

import {
    HeaderProductsPage,
    NameOutlet,
    LayoutSearch,
    DivSearch,
    ValueToSearch,
    InputSearch,
    ButtonSearch,
    Svg,
    SpanSearch,
    ButtonAddProduct,
    SpanAddProduct
} from "../generalCss/headerTemplate.styles";

import {
    MainLayoutAddGroup,
    LayoutAddProductGroup,
    ProductGroups,
    NameProductsGroup,
    UlProductsGroup,
    ItemProduct,
    FormAddNewProductGroups,
    InputAddProductGroup,
    QuantityItem,
    QuantityItemProduct,
    NameItemProduct
} from "./productGroup.styles";

const ProductsGroup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [name, setName] = useState('');
    const [name1, setName1] = useState('');

    const nameForProduct = '';
    const codeForProduct = '';

    const { data: products } = useGetProductsQuery({name: nameForProduct, code: codeForProduct });
    const { data: productGroups } = useGetProductGroupsQuery({name: name1});
    console.log(products)

    const getTotalQuantityByProductGroup = (groupName) => {
        const filteredProducts = products?.filter((item) => item.productGroups === groupName);
        const totalQuantity = filteredProducts?.reduce((total, item) => total + Number(item.quantity), 0);
        return totalQuantity;
    };

    const handleSearch = () => {
        setName1(name)
    }

    return (
        <div>
            <HeaderProductsPage>
                <NameOutlet>Product Groups</NameOutlet>
                <LayoutSearch>
                    <DivSearch>
                        <ValueToSearch>Product group name</ValueToSearch>
                        <InputSearch
                            type="text"
                            placeholder="Product group name..."
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
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
                <LayoutAddProductGroup>
                    <FormAddNewProductGroups>
                        <InputAddProductGroup
                            type="text"
                                                    
                        />
                        <ButtonAddProduct>
                            <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </Svg>
                            <SpanAddProduct>Add</SpanAddProduct>
                        </ButtonAddProduct>
                    </FormAddNewProductGroups>
                </LayoutAddProductGroup>
            </HeaderProductsPage>
            <MainLayoutAddGroup>
                <ProductGroups>
                    <NameProductsGroup>Product Groups</NameProductsGroup>
                    <UlProductsGroup>
                        <NameItemProduct>
                            Name Product Groups
                            <QuantityItemProduct>Quantity</QuantityItemProduct>
                        </NameItemProduct>
                        {productGroups?.map(item => (
                            <ItemProduct key={item.id}>
                                {item.name}
                                <QuantityItem>{getTotalQuantityByProductGroup(item.name)}</QuantityItem>
                            </ItemProduct>
                        ))}
            
                    </UlProductsGroup>
                </ProductGroups>
            </MainLayoutAddGroup>
        </div>
    )
}

export default ProductsGroup;