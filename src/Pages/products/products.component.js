import React from "react";
import { useState } from "react";
import { useForm } from 'react-hook-form';

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
    ImgAdd2,
    ImgAdd3,
    DivLabelImg,
    Button
} from "./product.styles";

const ProductsPage = () => {
    const [showLayout, setShowLayout] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImage2, setSelectedImage2] = useState(null);
    const [selectedImage3, setSelectedImage3] = useState(null);
    console.log(errors)


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

    const handleFileChange2 = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            // Xử lý việc đọc hình ảnh thành URL
            reader.onloadend = () => {
                setSelectedImage2(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleFileChange3 = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            // Xử lý việc đọc hình ảnh thành URL
            reader.onloadend = () => {
                setSelectedImage3(reader.result);
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
                                            <Option value="Nobita">Nobita</Option>
                                            <Option value="Nobita1">Nobita1</Option>
                                            <Option value="Nobita2">Nobita2</Option>
                                            <Option value="Nobita3">Nobita3</Option>
                                        </SelectProductsGroup>
                                    </DivInput>
                                    <DivInput>
                                        <SpanNameInput>Thương hiệu</SpanNameInput>
                                        <InputAdd
                                            {...register("Thuong hieu", {
                                                required: "Thuong hieu is required"
                                            })}
                                            type="text" />
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
                                            {...register('image1', {
                                                required: 'Image1 is required'
                                            })}
                                            type="file"
                                            name="image1"
                                            id="fileInput"
                                            onChange={handleFileChange1}
                                        />
                                        <DivLabelImg>
                                            <LabelFile for="fileInput">Image</LabelFile>
                                            {selectedImage && (
                                                <ImgAdd src={selectedImage} alt="Selected" />
                                            )}
                                        </DivLabelImg>
                                        <InputFile
                                            {...register('image2', {
                                                required: 'Image2 is required'
                                            })}
                                            type="file"
                                            name="image2"
                                            id="fileInput2"
                                            onChange={handleFileChange2}
                                        />
                                        <DivLabelImg>
                                            <LabelFile for="fileInput2">Image</LabelFile>
                                            {selectedImage2 && (
                                                <ImgAdd2 src={selectedImage2} alt="Selected" />
                                            )}
                                        </DivLabelImg>
                                        <InputFile
                                            {...register('image3', {
                                                required: 'Image3 is required'
                                            })}
                                            type="file"
                                            name="image3"
                                            id="fileInput3"
                                            onChange={handleFileChange3}
                                        />
                                        <DivLabelImg>
                                            <LabelFile for="fileInput3">Image</LabelFile>
                                            {selectedImage3 && (
                                                <ImgAdd3 src={selectedImage3} alt="Selected" />
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
                            <ItemProduct>Mouse</ItemProduct>
                            <ItemProduct>Keyboard</ItemProduct>
                            <ItemProduct>Loudspeaker</ItemProduct>
                            <ItemProduct>Screen</ItemProduct>
                        </UlProductsGroup>
                    </ProductsGroup>
                </SideBarProductsPage>
                <ContentProductsPage>
                    <TableProducts>
                        <THeaderProducts>
                            <TrProducts>
                                <ThProducts></ThProducts>
                                <ThProducts>PLU</ThProducts>
                                <ThProducts>Product name</ThProducts>
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
                                <TdProducts>1200</TdProducts>
                            </TrProducts>
                            <TrProducts>
                                <TdProducts>
                                    <ImgProduct alt="chuot" src="https://genk.mediacdn.vn/2018/7/23/photo-1-1532332293343908811983.jpg" />
                                </TdProducts>
                                <TdProducts>D123</TdProducts>
                                <TdProducts>Chuột không dây ganing Newmen</TdProducts>
                                <TdProducts>300.000</TdProducts>
                                <TdProducts>30.000</TdProducts>
                                <TdProducts>200</TdProducts>
                            </TrProducts>
                            <TrProducts>
                                <TdProducts>
                                    <ImgProduct alt="chuot" src="https://genk.mediacdn.vn/2018/7/23/photo-1-1532332293343908811983.jpg" />
                                </TdProducts>
                                <TdProducts>D123</TdProducts>
                                <TdProducts>Chuột không dây ganing Newmen</TdProducts>
                                <TdProducts>300.000</TdProducts>
                                <TdProducts>30.000</TdProducts>
                                <TdProducts>200</TdProducts>
                            </TrProducts>
                            <TrProducts>
                                <TdProducts>
                                    <ImgProduct alt="chuot" src="https://genk.mediacdn.vn/2018/7/23/photo-1-1532332293343908811983.jpg" />
                                </TdProducts>
                                <TdProducts>D123</TdProducts>
                                <TdProducts>Chuột không dây ganing Newmen</TdProducts>
                                <TdProducts>300.000</TdProducts>
                                <TdProducts>30.000</TdProducts>
                                <TdProducts>200</TdProducts>
                            </TrProducts>
                            <TrProducts>
                                <TdProducts>
                                    <ImgProduct alt="chuot" src="https://genk.mediacdn.vn/2018/7/23/photo-1-1532332293343908811983.jpg" />
                                </TdProducts>
                                <TdProducts>D123</TdProducts>
                                <TdProducts>Chuột không dây ganing Newmen</TdProducts>
                                <TdProducts>300.000</TdProducts>
                                <TdProducts>30.000</TdProducts>
                                <TdProducts>200</TdProducts>
                            </TrProducts>
                            <TrProducts>
                                <TdProducts>
                                    <ImgProduct alt="chuot" src="https://genk.mediacdn.vn/2018/7/23/photo-1-1532332293343908811983.jpg" />
                                </TdProducts>
                                <TdProducts>D123</TdProducts>
                                <TdProducts>Chuột không dây ganing Newmen</TdProducts>
                                <TdProducts>300.000</TdProducts>
                                <TdProducts>30.000</TdProducts>
                                <TdProducts>200</TdProducts>
                            </TrProducts>
                            <TrProducts>
                                <TdProducts>
                                    <ImgProduct alt="chuot" src="https://genk.mediacdn.vn/2018/7/23/photo-1-1532332293343908811983.jpg" />
                                </TdProducts>
                                <TdProducts>D123</TdProducts>
                                <TdProducts>Chuột không dây ganing Newmen</TdProducts>
                                <TdProducts>300.000</TdProducts>
                                <TdProducts>30.000</TdProducts>
                                <TdProducts>200</TdProducts>
                            </TrProducts>
                            <TrProducts>
                                <TdProducts>
                                    <ImgProduct alt="chuot" src="https://genk.mediacdn.vn/2018/7/23/photo-1-1532332293343908811983.jpg" />
                                </TdProducts>
                                <TdProducts>D123</TdProducts>
                                <TdProducts>Chuột không dây ganing Newmen</TdProducts>
                                <TdProducts>300.000</TdProducts>
                                <TdProducts>30.000</TdProducts>
                                <TdProducts>200</TdProducts>
                            </TrProducts>
                            <TrProducts>
                                <TdProducts>
                                    <ImgProduct alt="chuot" src="https://genk.mediacdn.vn/2018/7/23/photo-1-1532332293343908811983.jpg" />
                                </TdProducts>
                                <TdProducts>D123</TdProducts>
                                <TdProducts>Chuột không dây ganing Newmen</TdProducts>
                                <TdProducts>300.000</TdProducts>
                                <TdProducts>30.000</TdProducts>
                                <TdProducts>200</TdProducts>
                            </TrProducts>
                            <TrProducts>
                                <TdProducts>
                                    <ImgProduct alt="chuot" src="https://genk.mediacdn.vn/2018/7/23/photo-1-1532332293343908811983.jpg" />
                                </TdProducts>
                                <TdProducts>D123</TdProducts>
                                <TdProducts>Chuột không dây ganing Newmen</TdProducts>
                                <TdProducts>300.000</TdProducts>
                                <TdProducts>30.000</TdProducts>
                                <TdProducts>200</TdProducts>
                            </TrProducts>
                            <TrProducts>
                                <TdProducts>
                                    <ImgProduct alt="chuot" src="https://genk.mediacdn.vn/2018/7/23/photo-1-1532332293343908811983.jpg" />
                                </TdProducts>
                                <TdProducts>D123</TdProducts>
                                <TdProducts>Chuột không dây ganing Newmen</TdProducts>
                                <TdProducts>300.000</TdProducts>
                                <TdProducts>30.000</TdProducts>
                                <TdProducts>200</TdProducts>
                            </TrProducts>
                            <TrProducts>
                                <TdProducts>
                                    <ImgProduct alt="chuot" src="https://genk.mediacdn.vn/2018/7/23/photo-1-1532332293343908811983.jpg" />
                                </TdProducts>
                                <TdProducts>D123</TdProducts>
                                <TdProducts>Chuột không dây ganing Newmen</TdProducts>
                                <TdProducts>300.000</TdProducts>
                                <TdProducts>30.000</TdProducts>
                                <TdProducts>200</TdProducts>
                            </TrProducts>
                            <TrProducts>
                                <TdProducts>
                                    <ImgProduct alt="chuot" src="https://genk.mediacdn.vn/2018/7/23/photo-1-1532332293343908811983.jpg" />
                                </TdProducts>
                                <TdProducts>D123</TdProducts>
                                <TdProducts>Chuột không dây ganing Newmen</TdProducts>
                                <TdProducts>300.000</TdProducts>
                                <TdProducts>30.000</TdProducts>
                                <TdProducts>200</TdProducts>
                            </TrProducts>
                            <TrProducts>
                                <TdProducts>
                                    <ImgProduct alt="chuot" src="https://genk.mediacdn.vn/2018/7/23/photo-1-1532332293343908811983.jpg" />
                                </TdProducts>
                                <TdProducts>D123</TdProducts>
                                <TdProducts>Chuột không dây ganing Newmen</TdProducts>
                                <TdProducts>300.000</TdProducts>
                                <TdProducts>30.000</TdProducts>
                                <TdProducts>200</TdProducts>
                            </TrProducts>
                            <TrProducts>
                                <TdProducts>
                                    <ImgProduct alt="chuot" src="https://genk.mediacdn.vn/2018/7/23/photo-1-1532332293343908811983.jpg" />
                                </TdProducts>
                                <TdProducts>D123</TdProducts>
                                <TdProducts>Chuột không dây ganing Newmen</TdProducts>
                                <TdProducts>300.000</TdProducts>
                                <TdProducts>30.000</TdProducts>
                                <TdProducts>200</TdProducts>
                            </TrProducts>
                            <TrProducts>
                                <TdProducts>
                                    <ImgProduct alt="chuot" src="https://genk.mediacdn.vn/2018/7/23/photo-1-1532332293343908811983.jpg" />
                                </TdProducts>
                                <TdProducts>D123</TdProducts>
                                <TdProducts>Chuột không dây ganing Newmen</TdProducts>
                                <TdProducts>300.000</TdProducts>
                                <TdProducts>30.000</TdProducts>
                                <TdProducts>200</TdProducts>
                            </TrProducts>
                        </TBodyProducts>
                    </TableProducts>
                </ContentProductsPage>
            </MainProductsPage>
        </div>
    )
}

export default ProductsPage;