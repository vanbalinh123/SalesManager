import React from "react";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { useEffect } from "react";

import { useGetProductGroupsQuery } from "../../redux/api/api.slice";
import { useGetTrademarkQuery } from "../../redux/api/api.slice";
import { useGetProductsQuery } from "../../redux/api/api.slice";

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
    TwoDivInput,
    DivImagesAdd,
    DivButton,
    DivInputRight,
    SpanNameInputRight,
    InputAddRight,
    InputFile,
    LabelFile,
    ImgAdd,
    DivLabelImg,
    Button
} from "./product.styles";

const ProductsPage = () => {
    const [showLayout, setShowLayout] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [selectedImage, setSelectedImage] = useState(null);

    const { data: productGroups } = useGetProductGroupsQuery();
    const { data: trademark } = useGetTrademarkQuery();
    const { data: products } = useGetProductsQuery();

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

    const handleCloseLayoutAdd = () => {
        setShowLayout(false);
    }

    const handleAddProduct = (data) => {
        console.log(data)
    }

    const handleFileChange1 = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            // Xử lý việc đọc hình ảnh thành URL
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <HeaderProductsPage>
                <NameOutlet>Products</NameOutlet>
                <LayoutSearch>
                    <DivSearch>
                        <ValueToSearch>Tên hàng</ValueToSearch>
                        <InputSearch type="text" placeholder="Name Products..." />
                    </DivSearch>
                    <DivSearch>
                        <ValueToSearch>Mã Hàng</ValueToSearch>
                        <InputSearch type="text" placeholder="Code Products..." />
                    </DivSearch>
                    <ButtonSearch>
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
                {showLayout &&
                    <LayoutAddProduct
                        onSubmit={handleSubmit(handleAddProduct)}
                    >
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
                                            {...register("Name", {
                                                required: "Name is required"
                                            })}
                                            type="text" />
                                    </DivInput>
                                    <DivInput>
                                        <SpanNameInput>Nhóm hàng</SpanNameInput>
                                        <SelectProductsGroup
                                            {...register("group", {
                                                required: "Group is required"
                                            })}
                                        >
                                            <Option></Option>
                                            <Option value="Mouse">Mouse</Option>
                                            <Option value="Keyboard">Keyboard</Option>
                                            <Option value="Loudspeaker">Loudspeaker</Option>
                                            <Option value="Screen">Screen</Option>
                                        </SelectProductsGroup>
                                    </DivInput>
                                    <DivInput>
                                        <SpanNameInput>Thương hiệu</SpanNameInput>
                                        {/* <InputAdd
                                            {...register("Thuong hieu", {
                                                required: "Thuong hieu is required"
                                            })}
                                            type="text" /> */}
                                        <SelectProductsGroup
                                            {...register("Thuonghieu", {
                                                required: "Thuong hieu is required"
                                            })}
                                        >
                                            <Option></Option>
                                            <Option value="Samsung">Samsung</Option>
                                            <Option value="Apple">Apple</Option>
                                            <Option value="Asus">Asus</Option>
                                            <Option value="Xiaomi">Xiaomi</Option>
                                        </SelectProductsGroup>
                                    </DivInput>
                                    <DivInput>
                                        <SpanNameInput>Số lượng(kho)</SpanNameInput>
                                        <InputAdd
                                            {...register("So luong", {
                                                required: "So luong is required"
                                            })}
                                            type="number" />
                                    </DivInput>
                                    <DivDescribeInput>
                                        <SpanNameInput>Mô tả</SpanNameInput>
                                        <InputDescribeAdd
                                            {...register("Desribe", {
                                                required: "Desribe is required"
                                            })}
                                            type="text" />
                                    </DivDescribeInput>
                                </LeftLayoutAdd>
                                <RightLayoutAdd>
                                    <TwoDivInput>
                                        <DivInputRight>
                                            <SpanNameInputRight>Cost</SpanNameInputRight>
                                            <InputAddRight
                                                {...register("Cost", {
                                                    required: "Cost is required"
                                                })}
                                                type="number"
                                            />
                                        </DivInputRight>
                                        <DivInputRight>
                                            <SpanNameInputRight>Price</SpanNameInputRight>
                                            <InputAddRight
                                                {...register("Price", {
                                                    required: "Price is required"
                                                })}
                                                type="number"
                                            />
                                        </DivInputRight>
                                    </TwoDivInput>
                                    <DivImagesAdd>
                                        <InputFile
                                            {...register('image', {
                                                required: 'Image is required'
                                            })}
                                            type="file"
                                            name="image"
                                            id="fileInput"
                                            onChange={handleFileChange1}
                                        />
                                        <DivLabelImg>
                                            <LabelFile for="fileInput">Image</LabelFile>
                                            {selectedImage && (
                                                <ImgAdd src={selectedImage} alt="Selected" />
                                            )}
                                        </DivLabelImg>
                                    </DivImagesAdd>
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
                }
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
                        <NameProductsGroup>Thương Hiệu</NameProductsGroup>
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