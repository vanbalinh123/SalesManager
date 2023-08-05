import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAddProductMutation } from '../../../redux/api/api.slice';
import { useGetProductGroupsQuery } from '../../../redux/api/api.slice';
import { useGetTrademarkQuery } from '../../../redux/api/api.slice';

import {
    LayoutAddProduct,
    FormAdd,
    TitleLayoutAdd,
    MainLayoutAdd,
    LeftLayoutAdd,
    DivInput,
    SpanNameInput,
    InputAdd,
    SelectProductsGroup,
    Option,
    InputDescribeAdd,
    DivDescribeInput,
    RightLayoutAdd,
    FourDivInput,
    DivButton,
    DivInputRight,
    SpanNameInputRight,
    InputAddRight,
    Button
} from './addProduct.styles'

const AddProduct = ({ setShowLayout }) => {
    const { register, handleSubmit } = useForm();

    const [addProduct] = useAddProductMutation();
    const { data: productGroups } = useGetProductGroupsQuery();
    const { data: trademark } = useGetTrademarkQuery();

    const handleCloseLayoutAdd = () => {
        setShowLayout(false);
    }

    const handleAddProduct = async (data) => {
        try {
            const productData = {
                name: data.name,
                code: data.code,
                productGroups: data.productGroups,
                trademark: data.trademark,
                quantity: data.quantity,
                describe: data.describe,
                cost: data.cost,
                price: data.price,
                img: data.img,
            };
            await addProduct(productData).unwrap();
            alert('Product added successfully!')
            setShowLayout(false);
        } catch (error) {
            if (error.data) {
                alert(error.data.message)
            } else {
                alert('Errors')
            }
        }
    }

    return (
        <LayoutAddProduct>
            <FormAdd
                onSubmit={handleSubmit(handleAddProduct)}
            >
                <TitleLayoutAdd>New Product</TitleLayoutAdd>
                <MainLayoutAdd>
                    <LeftLayoutAdd>
                        <DivInput>
                            <SpanNameInput>Mã hàng</SpanNameInput>
                            <InputAdd
                                {...register("code", {
                                    required: "Code is required"
                                })}
                                type="text" />
                            {/* {errors.code && <div>{errors.code.message}</div>}  */}
                        </DivInput>
                        <DivInput>
                            <SpanNameInput>Tên hàng</SpanNameInput>
                            <InputAdd
                                {...register("name", {
                                    required: "Name is required"
                                })}
                                type="text" />
                        </DivInput>
                        <DivInput>
                            <SpanNameInput>Nhóm hàng</SpanNameInput>
                            <SelectProductsGroup
                                {...register("productGroups", {
                                    required: "Product Groups is required"
                                })}
                            >
                                <Option></Option>
                                {productGroups?.map(item => (
                                    <Option key={item.id}>{item.name}</Option>
                                ))}
                            </SelectProductsGroup>
                        </DivInput>
                        <DivInput>
                            <SpanNameInput>Trademark</SpanNameInput>
                            <SelectProductsGroup
                                {...register("trademark", {
                                    required: "Trademark is required"
                                })}
                            >
                                <Option></Option>
                                {trademark?.map(item => (
                                    <Option key={item.id}>{item.name}</Option>
                                ))}
                            </SelectProductsGroup>
                        </DivInput>
                        <DivDescribeInput>
                            <SpanNameInput>Desribe</SpanNameInput>
                            <InputDescribeAdd
                                {...register("describe", {
                                    required: "Desribe is required"
                                })}
                                type="text" />
                        </DivDescribeInput>
                    </LeftLayoutAdd>
                    <RightLayoutAdd>
                        <FourDivInput>
                            <DivInputRight>
                                <SpanNameInputRight>Image</SpanNameInputRight>
                                <InputAddRight
                                    {...register('img', {
                                        required: 'Image is required'
                                    })}
                                    type="text"
                                />
                            </DivInputRight>
                            <DivInputRight>
                                <SpanNameInputRight>Cost</SpanNameInputRight>
                                <InputAddRight
                                    {...register("cost", {
                                        required: "Cost is required"
                                    })}
                                    type="number"
                                />
                            </DivInputRight>
                            <DivInputRight>
                                <SpanNameInputRight>Price</SpanNameInputRight>
                                <InputAddRight
                                    {...register("price", {
                                        required: "Price is required"
                                    })}
                                    type="number"
                                />
                            </DivInputRight>
                            <DivInputRight>
                                <SpanNameInputRight>Quantity</SpanNameInputRight>
                                <InputAddRight
                                    {...register("quantity", {
                                        required: "Quantity is required"
                                    })}
                                    type="number" />
                            </DivInputRight>
                        </FourDivInput>
                        <DivButton>
                            <Button type="submit">Add</Button>
                            <Button
                                onClick={handleCloseLayoutAdd}
                                type="button"
                            >Close</Button>
                        </DivButton>
                    </RightLayoutAdd>
                </MainLayoutAdd>
            </FormAdd>
        </LayoutAddProduct>
    )
}

export default AddProduct;