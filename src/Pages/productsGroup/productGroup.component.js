import { useForm } from "react-hook-form";
import { useState } from "react";
import { useEffect } from "react";

import { useGetProductGroupsQuery } from "../../redux/api/api.slice";
import { useGetProductsQuery } from "../../redux/api/api.slice";
import { useAddProductGroupMutation } from "../../redux/api/api.slice";
import { useUpdateProductGroupMutation } from "../../redux/api/api.slice";

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
    const { register, handleSubmit, setValue, watch } = useForm();
    const [name, setName] = useState('');
    const [name1, setName1] = useState('');
    const [check, setCheck] = useState(false);
    const [checkId, setCheckId] = useState('');

    const watchedValue = watch('nameProductGroup')

    useEffect(() => {
        if(watchedValue === '') {
            setCheck(false)
        }   
    }, [watchedValue])

    const { data: products } = useGetProductsQuery({});
    const { data: productGroups } = useGetProductGroupsQuery({ name: name1 });

    const [addProductGroup] = useAddProductGroupMutation();
    const [updateProductGroup] = useUpdateProductGroupMutation();

    const getTotalQuantityByProductGroup = (groupName) => {
        const filteredProducts = products?.filter((item) => item.productGroups === groupName);
        const totalQuantity = filteredProducts?.reduce((total, item) => total + Number(item.quantity), 0);
        return totalQuantity;
    };

    const handleSearch = () => {
        setName1(name)
    };

    const handleAddProductGroup = async (data) => {
        console.log(data)
        if(check === false) {
            try {
                await addProductGroup(data).unwrap();
                setValue('nameProductGroup', );
                alert('Product Group added successfully!');
            } catch (error) {
                if (error.data) {
                    alert(error.data.message)
                } else {
                    alert('Errors')
                }
            }
        } else {
            try {
                const a = {
                    id: checkId,
                    name: data.nameProductGroup
                }
                await updateProductGroup(a).unwrap();
                setValue('nameProductGroup', );
                setCheck(false)
                alert('Product Group updated successfully!')
            } catch (error) {
                if (error.data) {
                    alert(error.data.message)
                } else {
                    alert('Errors')
                }
            }
        }
        
    };

    const handleItemClick = (data) => {
        setValue('nameProductGroup', data.name);
        setCheckId(data.id);
        setCheck(true)
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
                    <FormAddNewProductGroups
                        onSubmit={handleSubmit(handleAddProductGroup)}
                    >
                        <InputAddProductGroup
                            type="text"
                            {...register("nameProductGroup", {
                                required: "Name Product Group is required"
                            })}
                        />
                        {check === false ? (
                            <ButtonAddProduct>
                                <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </Svg>
                                <SpanAddProduct>Add</SpanAddProduct>
                            </ButtonAddProduct>
                        ) : (
                            <ButtonAddProduct>
                                <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </Svg>
                                <SpanAddProduct>Update</SpanAddProduct>
                            </ButtonAddProduct>
                        )}
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
                            <ItemProduct
                                key={item.id}
                                onClick={() => handleItemClick(item)}
                            >
                                {item.name}
                                <QuantityItem>
                                    {getTotalQuantityByProductGroup(item.name)}
                                </QuantityItem>
                            </ItemProduct>
                        ))}
                    </UlProductsGroup>
                </ProductGroups>
            </MainLayoutAddGroup>
        </div>
    )
}

export default ProductsGroup;