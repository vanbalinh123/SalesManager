import { useState } from "react";
import { useEffect } from "react";

import { useUserLoginQuery } from "../../../redux/api/login-api.slice";
import { useAddReturnCouponMutation } from "../../../redux/api/warehouse-api.slice";
import { useUpdateProductMutation } from "../../../redux/api/products-api.slice";
import { useGetProductsQuery } from "../../../redux/api/products-api.slice";


import {
  LayoutAdd,
  RightLayoutAdd,
  LeftLayoutAdd,
  InforToAddLayout,
  Table,
  TdQuantity,
  InputQuantity,
  NameLayOut,
  DivInfo,
  DivInfoChild,
  DivInfoLeftChild,
  DivInfoRightChild,
  SpanInfoChild,
  DivNotes,
  SpanNotes,
  InputNotes,
  DivButtons,
  Button,
  DivButton,
  DivNote,
  DivCodeImport,
  SpanInfoCode,
  InputCode,
} from "./returnCoupon.styles";

import { Tr, THeader, Th, Td, TBody } from "../warehouse.styles";

import { Svg } from "../../generalCss/headerTemplate.styles";

const getCurrentDate = () => {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  return day;
};

const getCurrentMonth = () => {
  const currentDate = new Date();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  return month;
};

const getCurrentYear = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return year;
};

const ReturnCoupon = ({ setShowLayoutReturn, checkReturn, itemDetail }) => {
  const [productsChange, setProductsChange] = useState([]);
  const [notes, setNotes] = useState("");
  const { data: userLogin } = useUserLoginQuery();
  const [addReturnCoupon] = useAddReturnCouponMutation();
  const [updateProduct] = useUpdateProductMutation();
  const { data: products } = useGetProductsQuery();
  const [code, setCode] = useState("");


  const handleQuantityChange = (item, newQuantity) => {
    console.log('cc', item)
    if (
      newQuantity === "" ||
      Number(newQuantity) === 0 ||
      newQuantity === null
    ) {
      const updatedProducts = productsChange.filter(
        (product) => product.code !== item.code
      );
      setProductsChange(updatedProducts);
    } else {
      const existingProductIndex = productsChange.findIndex(
        (product) => product.code === item.code
      );

      if (existingProductIndex !== -1) {
        const updatedProducts = [...productsChange];
        updatedProducts[existingProductIndex] = {
          ...updatedProducts[existingProductIndex],
          quantity: newQuantity,
        };
        setProductsChange(updatedProducts);
      } else {
        setProductsChange([
          ...productsChange,
          { ...item, quantity: newQuantity },
        ]);
      }
    }
  };



  const calTotalCostReturn = () => {
    let totalCost = 0;

    productsChange?.forEach((item) => {
      totalCost = totalCost + Number(item.quantity) * Number(item.cost);
    });

    return totalCost;
  };

  const calTotalCostEachProduct = (code) => {
    let totalCost = 0;

    productsChange?.forEach((item) => {
      if (item.code === code) {
        totalCost = Number(item.quantity) * Number(item.cost);
      }
    });

    return totalCost;
  };

  const handleAddNewReturn = async (e) => {
    e.preventDefault();
    if (productsChange.length === 0) {
      alert("No product have been returned yet");
      return;
    }

    const hasInvalidQuantity = productsChange.some((item) => {
        if (item.quantity === 0 || item.quantity === "" || Number(item.quantity) < 0) {
          return true; 
        }
        const importedItem = itemDetail.productsImported.find((i) => i.code === item.code);
      
        if (!importedItem || Number(item.quantity) > Number(importedItem.quantity)) {
          return true; 
        }
        return false; 
      });
      
      if (hasInvalidQuantity) {
        alert(
          "Quantity cannot be empty, less than 0, or greater than available stock"
        );
        return;
      }
      


    const hello = [];

    productsChange.map((item) => {
      hello.push({
        code: item.code,
        name: item.name,
        quantity: Number(item.quantity),
        cost: item.cost,
        total: item.total,
        productGroup: item.productGroup,
        trademark: item.trademark,
      });
    });

    console.log(productsChange)

    try {
      const couponReturn = {
        // nameUserReturn: userLogin?.username,
        codeImported: itemDetail.code,
        status: "Return",
        note: notes,
        code: code,
        day: Number(getCurrentDate()),
        month: Number(getCurrentMonth()),
        year: Number(getCurrentYear()),
        totalCost: Number(calTotalCostReturn()),
        productsReturned: hello,
      };

      await addReturnCoupon(couponReturn).unwrap();

      alert("Returned successfully!");
      setShowLayoutReturn(false);
      //setStatusSearch('Return')
    } catch (error) {
      console.log(error)
      if (error.data) {
        alert(error.data.data.message);
      } else {
        alert("Error!");
      }
    }
  };


  return (
    <LayoutAdd>
      <LeftLayoutAdd>
        {(checkReturn == "detail" && (
          <NameLayOut>Detail Return</NameLayOut>
        )) || <NameLayOut>Return Goods</NameLayOut>}
        {/* <DivCodeImport>Import Code: {itemDetail?.code}</DivCodeImport> */}
        <InforToAddLayout>
          <Table>
            <THeader>
              <Th>Code</Th>
              <Th>Name</Th>
              <Th>Cost</Th>
              <Th>Total</Th>
              <Th>Quantity</Th>
              {checkReturn === "detail" || <Th>Current Quantity</Th>}
              {checkReturn === "detail" || <Th>Tien tra lai</Th>}
              {checkReturn === "detail" || <Th>Return</Th>}
            </THeader>
            <TBody>
              {(checkReturn === "detail" &&
                itemDetail?.productsReturned.map((item) => (
                  <Tr key={item.id}>
                    <Td>{item.code}</Td>
                    <Td>{item.name}</Td>
                    <Td>{item.cost}</Td>
                    <Td>{item.total}</Td>
                    <Td>{item.quantity}</Td>
                  </Tr>
                ))) ||
                itemDetail?.productsImported.map((item) => (
                  <Tr key={item.code}>
                    <Td>{item.code}</Td>
                    <Td>{item.name}</Td>
                    <Td>{item.cost}</Td>
                    <Td>{item.total}</Td>
                    <Td>{item.quantity}</Td>
                    <Td>{item.currentQuantity}</Td>
                    <Td>{calTotalCostEachProduct(item.code)}</Td>
                    <TdQuantity>
                      <InputQuantity
                        min={0}
                        max={Number(item.quantity)}
                        type="number"
                        onChange={(e) =>
                          handleQuantityChange(item, e.target.value)
                        }
                      />
                    </TdQuantity>
                  </Tr>
                ))}
            </TBody>
          </Table>
        </InforToAddLayout>
      </LeftLayoutAdd>
      <RightLayoutAdd>
        <DivInfo>
          <DivInfoChild>
            <DivInfoLeftChild>
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
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </Svg>
              {(checkReturn === "detail" && (
                <SpanInfoChild>{userLogin?.data.user.username}</SpanInfoChild>
              )) || (
                <SpanInfoChild>{userLogin?.data.user.username}</SpanInfoChild>
              )}
            </DivInfoLeftChild>
            <DivInfoRightChild>
              {(checkReturn == "detail" && (
                <SpanInfoChild>
                  {itemDetail?.year}-{itemDetail?.month}-
                  {itemDetail?.day}
                </SpanInfoChild>
              )) || (
                <SpanInfoChild>
                  {getCurrentYear() +
                    "-" +
                    getCurrentMonth() +
                    "-" +
                    getCurrentDate()}
                </SpanInfoChild>
              )}
            </DivInfoRightChild>
          </DivInfoChild>
          <DivInfoChild>
            <DivInfoLeftChild>
              <SpanInfoChild>Status</SpanInfoChild>
            </DivInfoLeftChild>
            <DivInfoRightChild>
              <SpanInfoChild>Return</SpanInfoChild>
            </DivInfoRightChild>
          </DivInfoChild>
          {checkReturn === "detail" || (
            <DivInfoChild>
              <DivInfoLeftChild>
                <SpanInfoChild>Total Cost</SpanInfoChild>
              </DivInfoLeftChild>
              <DivInfoRightChild>
                <SpanInfoChild>{itemDetail?.totalCost}</SpanInfoChild>
              </DivInfoRightChild>
            </DivInfoChild>
          )}
          <DivInfoChild>
            <DivInfoLeftChild>
              <SpanInfoChild>Total payment</SpanInfoChild>
            </DivInfoLeftChild>
            <DivInfoRightChild>
              {(checkReturn === "detail" && (
                <SpanInfoChild>{itemDetail?.totalCost}</SpanInfoChild>
              )) || <SpanInfoChild>{calTotalCostReturn()}</SpanInfoChild>}
            </DivInfoRightChild>
          </DivInfoChild>
          <DivInfoChild>
            <DivInfoLeftChild>
              <SpanInfoCode>Code</SpanInfoCode>
            </DivInfoLeftChild>
            <DivInfoRightChild>
              {(checkReturn === "detail" && (
                <SpanInfoChild>{itemDetail?.code}</SpanInfoChild>
              )) || (
                <InputCode
                  type="text"
                  placeholder="Code here..."
                  onChange={(e) => setCode(e.target.value)}
                />
              )}
            </DivInfoRightChild>
          </DivInfoChild>
        </DivInfo>
        <DivNotes>
          <SpanNotes>Notes</SpanNotes>
          {(checkReturn === "detail" && (
            <DivNote>{itemDetail?.note}</DivNote>
          )) || (
            <InputNotes
              type="text"
              placeholder="Notes here..."
              onChange={(e) => setNotes(e.target.value)}
            />
          )}
        </DivNotes>
        <DivButtons>
          <DivButton>
            <Button onClick={() => setShowLayoutReturn(false)}>Exit</Button>
          </DivButton>
          {checkReturn === "detail" || (
            <DivButton>
              <Button onClick={(e) => handleAddNewReturn(e)}>Ok</Button>
            </DivButton>
          )}
        </DivButtons>
      </RightLayoutAdd>
    </LayoutAdd>
  );
};

export default ReturnCoupon;
