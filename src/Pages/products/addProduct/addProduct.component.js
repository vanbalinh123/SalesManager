import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

import { useAddProductMutation } from '../../../redux/api/products-api.slice';
import { useUpdateProductMutation } from '../../../redux/api/products-api.slice';
import { useGetTrademarkQuery } from '../../../redux/api/trademark-api.slice';
import { useGetProductGroupsQuery } from '../../../redux/api/productGroups-api.slice';

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

const AddProduct = ({ setShowLayout, check, productUpdate }) => {
    const { register, handleSubmit, setValue } = useForm();

    const [addProduct] = useAddProductMutation();
    const { data: productGroups } = useGetProductGroupsQuery();
    const { data: trademark } = useGetTrademarkQuery();
    const [update] = useUpdateProductMutation();


    useEffect(() => {
        if (check === 'update' && productUpdate) {
            setValue('name', productUpdate.name);
            setValue('code', productUpdate.code);
            setValue('productGroups', productUpdate.productGroups);
            setValue('trademark', productUpdate.trademark);
            setValue('quantity', productUpdate.quantity);
            setValue('describe', productUpdate.describe);
            setValue('cost', productUpdate.cost);
            setValue('price', productUpdate.price);
            setValue('img', productUpdate.img);
        }
    }, [check, productUpdate, setValue]);

    const handleCloseLayoutAdd = () => {
        setShowLayout(false);
    }

    const handleAddProduct = async (data) => {
        if (check === "add") {
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
        } else {
            try {
                const productData = {
                    id: productUpdate.id,
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
                await update(productData).unwrap();
                alert('Product updated successfully!')
                setShowLayout(false);
            } catch (error) {
                if (error.data) {
                    alert(error.data.message)
                } else {
                    alert('Errors')
                }
            }
        }

    }

    return (
        <LayoutAddProduct>
            <FormAdd
                onSubmit={handleSubmit(handleAddProduct)}
            >
                {check === "add" 
                    && <TitleLayoutAdd>New Product</TitleLayoutAdd>
                    || <TitleLayoutAdd>Update Product</TitleLayoutAdd>
                }
                
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
                            {check === "add" ? (
                                <Button type="submit">Add</Button>
                            ) : (
                                <Button type="submit">Update</Button>
                            )}

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