import React from "react";
import { useState } from "react";

import { useGetTrademarkQuery } from "../../redux/api/trademark-api.slice";
import { useGetProductsQuery } from "../../redux/api/products-api.slice";
import { useDeletedProductMutation } from "../../redux/api/products-api.slice";
import { useGetProductGroupsQuery } from "../../redux/api/productGroups-api.slice";

import AddProduct from "./addProduct/addProduct.component";
import PaginateProducts from "./pagination/pagination.components";

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
  ChildOfSidebar,
  NameProductsGroup,
  UlProductsGroup,
  UlTrademark,
  ItemProductGroups,
  ItemTrademark,
  TableProducts,
  TrProducts,
  THeaderProducts,
  ThProducts,
  TBodyProducts,
  TdProducts,
  ImgProduct,
  NameTrademark,
  TdProductsDelete,
  TdProductsUpdate,
} from "./product.styles";

const ProductsPage = () => {
  const [showLayout, setShowLayout] = useState(false);
  const [check, setCheck] = useState("");
  const [productUpdate, setProductUpdate] = useState({});

  const [currentPage, setCurrentPage] = useState(0);

  const [name, setName] = useState("");
  const [name1, setName1] = useState("");
  const [code, setCode] = useState("");
  const [code1, setCode1] = useState("");
  const [productGroupSearch, setProductGroupSearch] = useState("");
  const [trademarkSearch, setTradeMarkSearch] = useState("");

  const { data: productGroups } = useGetProductGroupsQuery();
  const { data: trademark } = useGetTrademarkQuery();
  const { data: products } = useGetProductsQuery({
    name: name1,
    code: code1,
    productGroups: productGroupSearch,
    trademark: trademarkSearch,
    page: currentPage,
  });
  const [deletedProduct] = useDeletedProductMutation();
  console.log(products);

  const handleLayoutAddProductClick = () => {
    setShowLayout(true);
    setCheck("add");
  };

  const handleLayoutUpdateProductClick = (item) => {
    setShowLayout(true);
    setCheck("update");
    setProductUpdate(item);
  };

  const handleSearch = () => {
    setName1(name);
    setCode1(code);
    if (name === "" && code === "") {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(0);
    }
  };

  const handleTradeMarkAllClick = () => {
    setTradeMarkSearch("");
    setCurrentPage(0);
  };

  const handleTradeMarkItemClick = (item) => {
    setTradeMarkSearch(item.name);
    setCurrentPage(0);
  };

  const handleProductGroupsAlClick = () => {
    setProductGroupSearch("");
    setCurrentPage(0);
  };

  const handleProductGroupItemClick = (item) => {
    setProductGroupSearch(item.name);
    setCurrentPage(0);
  };

  const handleDeleteProductClick = async (item) => {
    const isConfirmed = window.confirm(
      `Do you want to delete product '${item.name.toUpperCase()}' or not?`
    );
    if (isConfirmed) {
      try {
        await deletedProduct(item._id).unwrap();
      } catch (error) {
        if (error.data) {
          alert(error.data.message);
        } else {
          alert("error");
        }
      }
    }
  };

  return (
    <div>
      {showLayout && (
        <AddProduct
          setShowLayout={setShowLayout}
          check={check}
          productUpdate={productUpdate}
        />
      )}
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
          <ButtonSearch onClick={handleSearch}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </Svg>
            <SpanSearch>Search</SpanSearch>
          </ButtonSearch>
        </LayoutSearch>
        <DivAddProduct>
          <ButtonAddProduct onClick={handleLayoutAddProductClick}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </Svg>
            <SpanAddProduct>Add New Product</SpanAddProduct>
          </ButtonAddProduct>
        </DivAddProduct>
      </HeaderProductsPage>
      <MainProductsPage>
        <SideBarProductsPage>
          <ChildOfSidebar>
            <NameProductsGroup>Products Group</NameProductsGroup>
            <UlProductsGroup>
              <ItemProductGroups
                onClick={() => handleProductGroupsAlClick()}
                active={productGroupSearch === ""}
              >
                All
              </ItemProductGroups>
              {productGroups?.map((item) => (
                <ItemProductGroups
                  key={item.id}
                  onClick={() => handleProductGroupItemClick(item)}
                  active={productGroupSearch === item.name}
                >
                  {item.name}
                </ItemProductGroups>
              ))}
            </UlProductsGroup>
          </ChildOfSidebar>
          <ChildOfSidebar>
            <NameTrademark>Trademark</NameTrademark>
            <UlTrademark>
              <ItemTrademark
                onClick={() => handleTradeMarkAllClick()}
                active={trademarkSearch === ""}
              >
                All
              </ItemTrademark>
              {trademark?.map((item) => (
                <ItemTrademark
                  key={item.id}
                  onClick={() => handleTradeMarkItemClick(item)}
                  active={trademarkSearch === item.name}
                >
                  {item.name}
                </ItemTrademark>
              ))}
            </UlTrademark>
          </ChildOfSidebar>
        </SideBarProductsPage>
        <ContentProductsPage>
          <TableProducts>
            <THeaderProducts>
              <TrProducts>
                <ThProducts></ThProducts>
                <ThProducts>Code</ThProducts>
                <ThProducts>Product name</ThProducts>
                <ThProducts>Trademark</ThProducts>
                <ThProducts>Product Groups</ThProducts>
                <ThProducts>Price</ThProducts>
                <ThProducts>Cost of capital</ThProducts>
                <ThProducts>Quantity</ThProducts>
                <ThProducts style={{ width: "70px" }}></ThProducts>
                <ThProducts style={{ width: "70px" }}></ThProducts>
              </TrProducts>
            </THeaderProducts>
            <TBodyProducts>
              {products?.products?.map((item) => (
                <TrProducts key={item.id}>
                  <TdProducts>
                    <ImgProduct alt={item.name} src={item.img} />
                  </TdProducts>
                  <TdProducts>{item.code}</TdProducts>
                  <TdProducts>{item.name}</TdProducts>
                  <TdProducts>{item.trademark}</TdProducts>
                  <TdProducts>{item.productGroups}</TdProducts>
                  <TdProducts>{item.price}</TdProducts>
                  <TdProducts>{item.cost}</TdProducts>
                  <TdProducts>{item.quantity}</TdProducts>
                  <TdProductsUpdate
                    onClick={() => handleLayoutUpdateProductClick(item)}
                  >
                    <Svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </Svg>
                  </TdProductsUpdate>
                  <TdProductsDelete
                    onClick={() => handleDeleteProductClick(item)}
                  >
                    <Svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </Svg>
                  </TdProductsDelete>
                </TrProducts>
              ))}
            </TBodyProducts>
          </TableProducts>
          {productGroups?.length === 0 && (
            <div style={{ paddingTop: "20px", color: "red" }}>
              Let's add Product Group!!
            </div>
          )}
          {trademark?.length === 0 && (
            <div style={{ paddingTop: "20px", color: "red" }}>
              Let's add Trademark!!
            </div>
          )}
          {products?.length > 0 && (
            <PaginateProducts
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              products={products}
            />
          )}
        </ContentProductsPage>
      </MainProductsPage>
    </div>
  );
};

export default ProductsPage;
