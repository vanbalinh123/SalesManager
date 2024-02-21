import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useState } from "react";

import { useAddProductMutation } from "../../../redux/api/products-api.slice";
import { useUpdateProductMutation } from "../../../redux/api/products-api.slice";
import { useGetTrademarkQuery } from "../../../redux/api/trademark-api.slice";
import { useGetProductGroupsQuery } from "../../../redux/api/productGroups-api.slice";

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
  Button,
  DivImg,
  Box,
  Img,
  Error,
  FileInput,
  CustomButton,
} from "./addProduct.styles";

const AddProduct = ({ setShowLayout, check, productUpdate }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [addProduct] = useAddProductMutation();
  const { data: productGroups } = useGetProductGroupsQuery();
  const { data: trademark } = useGetTrademarkQuery();
  const [update] = useUpdateProductMutation();

  const [file, setFile] = useState({});
  const [checkImg, setCheckImg] = useState(false);

  function handleChange(e) {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    // setValue("img", e.target.files[0]);
    setCheckImg(true);
  }

  useEffect(() => {
    if (check === "update" && productUpdate) {
      setCheckImg(true);
      setValue("name", productUpdate.name);
      setValue("code", productUpdate.code);
      setValue(
        "productGroups",
        productUpdate.productGroup ? productUpdate.productGroup._id : ""
      );
      setValue(
        "trademark",
        productUpdate.trademark ? productUpdate.trademark._id : ""
      );
      setValue("quantity", productUpdate.quantity);
      setValue("describe", productUpdate.describe);
      setValue("cost", productUpdate.cost);
      setValue("price", productUpdate.price);
      setValue("img", productUpdate.img);
      // setFile(productUpdate.img)
    }
  }, [check, productUpdate, setValue]);

  const handleCloseLayoutAdd = () => {
    setShowLayout(false);
  };

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
          img: file,
        };
        const res = await addProduct(productData, {
          "Content-Type": "multipart/form-data",
        });

        if (res.data) {
          alert("Product added successfully!");
          setShowLayout(false);
        } else {
          console.log(res);
          alert(res.error.data.message);
        }
      } catch (error) {
        if (error.data) {
          alert(error.data.message);
        } else {
          alert("Errors");
        }
      }
    } else {
      try {
        const productData = {
          id: productUpdate._id,
          name: data.name,
          code: data.code,
          productGroups: data.productGroups,
          trademark: data.trademark,
          quantity: data.quantity,
          describe: data.describe,
          cost: data.cost,
          price: data.price,
          // img: file,
          img: String(file) !== "[object Object]" ? file : productUpdate.img,
        };

        console.log(productData);

        console.log(String(file) === "[object Object]");

        const res = await update(productData, {
          "Content-Type": "multipart/form-data",
        });

        if (res.data) {
          alert("Product updated successfully!");
          setShowLayout(false);
        } else {
          console.log(res);
          alert(res.error.data.message);
        }
      } catch (error) {
        if (error.data) {
          alert(error.data.message);
        } else {
          alert("Errors");
        }
      }
    }
  };

  return (
    <LayoutAddProduct>
      <FormAdd
        onSubmit={handleSubmit(handleAddProduct)}
        encType="multipart/form-data"
      >
        {(check === "add" && <TitleLayoutAdd>New Product</TitleLayoutAdd>) || (
          <TitleLayoutAdd>Update Product</TitleLayoutAdd>
        )}

        <MainLayoutAdd>
          <LeftLayoutAdd>
            <DivInput>
              <SpanNameInput>Mã hàng</SpanNameInput>
              <InputAdd
                {...register("code", {
                  required: "Code is required !!!",
                })}
                type="text"
              />
              {errors.code && <Error>{errors.code.message}</Error>}
            </DivInput>
            <DivInput>
              <SpanNameInput>Tên hàng</SpanNameInput>
              <InputAdd
                {...register("name", {
                  required: "Name is required !!!",
                })}
                type="text"
              />
              {errors.name && <Error>{errors.name.message}</Error>}
            </DivInput>
            <DivInput>
              <SpanNameInput>Nhóm hàng</SpanNameInput>
              <SelectProductsGroup
                {...register("productGroups", {
                  required: "Product Groups is required !!!",
                })}
              >
                <Option></Option>
                {productGroups?.map((item) => (
                  <Option key={item._id} value={item._id}>
                    {item.name}
                  </Option>
                ))}
              </SelectProductsGroup>
              {errors.productGroups && (
                <Error>{errors.productGroups.message}</Error>
              )}
            </DivInput>
            <DivInput>
              <SpanNameInput>Trademark</SpanNameInput>
              <SelectProductsGroup
                {...register("trademark", {
                  required: "Trademark is required !!!",
                })}
              >
                <Option></Option>
                {trademark?.map((item) => (
                  <Option key={item.id} value={item._id}>
                    {item.name}
                  </Option>
                ))}
              </SelectProductsGroup>
              {errors.trademark && <Error>{errors.trademark.message}</Error>}
            </DivInput>

            <DivInputRight>
              <SpanNameInputRight>Quantity</SpanNameInputRight>
              <InputAddRight
                {...register("quantity", {
                  required: "Quantity is required !!!",
                })}
                type="number"
              />
              {errors.quantity && <Error>{errors.quantity.message}</Error>}
            </DivInputRight>
          </LeftLayoutAdd>
          <RightLayoutAdd>
            <FourDivInput>
              {/* <DivInputRight>
                <SpanNameInputRight>Image</SpanNameInputRight>
                <InputAddRight
                  // {...register("img", {
                  //   required: "Image is required",
                  // })}
                  //   type="text"
                  type="file"
                  onChange={handleChange}
                />
              </DivInputRight> */}
              <DivInputRight>
                <SpanNameInputRight>Cost</SpanNameInputRight>
                <InputAddRight
                  {...register("cost", {
                    required: "Cost is required !!!",
                  })}
                  type="number"
                />
                {errors.cost && <Error>{errors.cost.message}</Error>}
              </DivInputRight>
              <DivInputRight>
                <SpanNameInputRight>Price</SpanNameInputRight>
                <InputAddRight
                  {...register("price", {
                    required: "Price is required !!!",
                  })}
                  type="number"
                />
                {errors.price && <Error>{errors.price.message}</Error>}
              </DivInputRight>
              <DivDescribeInput>
                <SpanNameInput>Desribe</SpanNameInput>
                <InputDescribeAdd
                  {...register("describe", {
                    required: "Desribe is required !!!",
                  })}
                  type="text"
                />
                {errors.describe && <Error>{errors.describe.message}</Error>}
              </DivDescribeInput>
            </FourDivInput>
          </RightLayoutAdd>
          <DivImg>
            {/* <input
              // {...register("img", {
              //   required: "Image is required",
              // })}
              //   type="text"
              type="file"
              onChange={handleChange}
            /> */}
            {(checkImg && (
              <CustomButton htmlFor="file-upload">Thay ảnh</CustomButton>
            )) || (
              <CustomButton
                htmlFor="file-upload"
                {...register("img", {
                  required: "Image is required !!!",
                })}
              >
                Chọn ảnh
              </CustomButton>
            )}

            <FileInput id="file-upload" type="file" onChange={handleChange} />
            {(checkImg && (
              <Box>
                <Img
                  id="preview-img"
                  src={
                    file.name
                      ? URL.createObjectURL(file)
                      : `http://localhost:3100/img/${productUpdate.img}`
                  }
                />
                {/* <Img src={"http://localhost:3100/img/" + productUpdate.img} /> */}
              </Box>
            )) || (
              <>
                {errors.img && (
                  <div style={{ color: "red", fontStyle: "italic" }}>
                    {errors.img.message}
                  </div>
                )}
              </>
            )}

            <DivButton>
              {check === "add" ? (
                <Button type="submit">Add</Button>
              ) : (
                <Button type="submit">Update</Button>
              )}

              <Button onClick={handleCloseLayoutAdd} type="button">
                Close
              </Button>
            </DivButton>
          </DivImg>
        </MainLayoutAdd>
      </FormAdd>
    </LayoutAddProduct>
  );
};

export default AddProduct;
