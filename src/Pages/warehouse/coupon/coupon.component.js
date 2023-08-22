import { useState } from "react";
import { useEffect } from "react";

import { useGetProductsQuery } from "../../../redux/api/products-api.slice";
import { useUserLoginQuery } from "../../../redux/api/login-api.slice";
import { useAddImportCouponMutation } from "../../../redux/api/warehouse-api.slice";
import { useUpdateProductMutation } from "../../../redux/api/products-api.slice";

import {
    LayoutAdd,
    RightLayoutAdd,
    LeftLayoutAdd,
    SearchLayout,
    SpanName,
    Input,
    InforToAddLayout,
    BtnSearch,
    Span,
    ResultSearch,
    ChildResult,
    DivImg,
    Img,
    NameResult,
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
    TdDelete
} from "./coupon.styles";

import {
    Tr,
    THeader,
    Th,
    Td,
    TBody,
} from "../warehouse.styles";

import { Svg } from "../../generalCss/headerTemplate.styles";

const Coupon = ({ setShowLayout, check, itemDetail }) => {
    const [name, setName] = useState('');
    const [name1, setName1] = useState('');
    const [checkSearch, setCheckSearch] = useState(false);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [notes, setNotes] = useState('');

    const { data: products } = useGetProductsQuery({
        name: name1,
    });
    const { data: userLogin } = useUserLoginQuery();
    const [addImportCoupon] = useAddImportCouponMutation();
    const [updateProduct] = useUpdateProductMutation();

    useEffect(() => {
        if (name === '') {
            setCheckSearch(false)
        }
    }, [name])

    const handleSearch = () => {
        if (name === '') {
            setCheckSearch(false)
        } else {
            setName1(name)
            setCheckSearch(true)
        }
    }

    const handleItemSearchClick = (item) => {
        let exist = selectedProducts.find(i => i.id === item.id);
        if (exist === undefined) {
            setSelectedProducts([...selectedProducts, { ...item, quantity: '0' }]);
        } 
        // else {
        //     alert('This product already exists!')
        // }
    }

    const handleQuantityChange = (productId, newQuantity) => {
        setSelectedProducts(prevProducts => {
            return prevProducts.map(product => {
                const newTotal = Number(newQuantity) * product.cost;
                if (product.id === productId) {
                    return {
                        ...product,
                        quantity: newQuantity,
                        total: newTotal
                    };
                }
                return product;
            });
        });
    };

    const getCurrentDate = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    const calTotalCost = () => {
        let totalCost = 0;
        selectedProducts?.map(item => {
            totalCost = totalCost + (Number(item.quantity) * Number(item.cost))
        })
        return totalCost;
    }


    //Dòng 260 em không hiểu sao type="number" của em 
    //vẫn nhập số thập phân và số bé hơn 1 được
    const handleAddNewImport = async () => {
        if (selectedProducts.length === 0) {
            alert('No products have been imported yet');
            return;
        }

        const emptyProduct = selectedProducts.find(item =>
            item.quantity === '' || item.quantity === '0' || Number(item.quantity) < 0
        );

        if (emptyProduct) {
            alert('Quantity cannot be empty or less than 0');
            return;
        }

        try {
            const coupon = {
                nameUserImport: userLogin?.username,
                status: 'Import',
                note: notes,
                date: getCurrentDate(),
                totalCost: calTotalCost(),
                productsImported: selectedProducts
            };

            await addImportCoupon(coupon).unwrap();

            selectedProducts.forEach(item1 => {
                const productToUpdate = products?.products?.find(item2 => item2.id === item1.id);
                if (productToUpdate) {
                    updateProduct({
                        ...productToUpdate,
                        quantity: Number(productToUpdate.quantity) + Number(item1.quantity)
                    }).unwrap();
                }
            });

            alert('Imported successfully!');
            setShowLayout(false);
        } catch (error) {
            if (error.data) {
                alert(error.data.message);
            } else {
                alert('Error!');
            }
        }
    };


    const handleDeleteItemImportClick = (id) => {
        setSelectedProducts(prevProducts => {
            const updatedProducts = prevProducts.filter(item => item.id !== id);
            return updatedProducts;
        });
    }

    return (
        <LayoutAdd>
            <LeftLayoutAdd>
                {check === 'add'
                    && <NameLayOut>Import Goods</NameLayOut>
                    || <NameLayOut>Detail Import</NameLayOut>
                }
                {check === 'add' &&
                    <SearchLayout>
                        <SpanName>Product Name</SpanName>
                        <Input
                            type="text"
                            placeholder="Product Name..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <BtnSearch
                            onClick={handleSearch}
                        >
                            <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </Svg>
                            <Span>Search</Span>
                        </BtnSearch>
                        {checkSearch === false ||
                            <ResultSearch>
                                {products?.products.length === 0 ? (
                                    <ChildResult>No have product</ChildResult>
                                ) : (
                                    products?.products.map(item => (
                                        <ChildResult
                                            key={item.id}
                                            onClick={() => handleItemSearchClick(item)}
                                        >
                                            <DivImg>
                                                <Img alt={item.name} src={item.img} />
                                            </DivImg>
                                            <NameResult>{item.name}</NameResult>
                                        </ChildResult>
                                    ))
                                )}
                            </ResultSearch>
                        }
                    </SearchLayout>
                }
                <InforToAddLayout>
                    <Table>
                        <THeader>
                            <Tr>
                                {check === 'add' &&
                                    <Th style={{ width: "70px" }}></Th>
                                }
                                <Th>Code</Th>
                                <Th>Name</Th>
                                <Th>Cost</Th>
                                <Th>Total</Th>
                                <Th>Quantity</Th>
                            </Tr>
                        </THeader>
                        <TBody>
                            {check == 'add' &&
                                selectedProducts.map(item => (
                                    <Tr key={item.id}>
                                        {check === 'add' &&
                                            <TdDelete
                                                onClick={() => handleDeleteItemImportClick(item.id)}
                                            >
                                                <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </Svg>
                                            </TdDelete>
                                        }
                                        <Td>{item.code}</Td>
                                        <Td>{item.name}</Td>
                                        <Td>{item.cost}</Td>
                                        <Td>{item.cost * item.quantity}</Td>
                                        <TdQuantity>
                                            <InputQuantity
                                                min={1}
                                                type="number"
                                                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                            />
                                        </TdQuantity>
                                    </Tr>
                                ))
                                ||
                                itemDetail?.productsImported.map(item => (
                                    <Tr key={item.id}>
                                        {check === 'add' &&
                                            <Td>
                                                <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </Svg>
                                            </Td>
                                        }
                                        <Td>{item.code}</Td>
                                        <Td>{item.name}</Td>
                                        <Td>{item.cost}</Td>
                                        <Td>{item.total}</Td>
                                        <Td>{item.quantity}</Td>
                                    </Tr>
                                ))
                            }

                        </TBody>
                    </Table>
                </InforToAddLayout>
            </LeftLayoutAdd>
            <RightLayoutAdd>
                <DivInfo>
                    <DivInfoChild>
                        <DivInfoLeftChild>
                            <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </Svg>
                            {check == 'add'
                                && <SpanInfoChild>{userLogin?.username}</SpanInfoChild>
                                || <SpanInfoChild>{itemDetail?.nameUserImport}</SpanInfoChild>
                            }

                        </DivInfoLeftChild>
                        <DivInfoRightChild>
                            {check === 'add'
                                && <SpanInfoChild>{getCurrentDate()}</SpanInfoChild>
                                || <SpanInfoChild>{itemDetail?.date}</SpanInfoChild>
                            }

                        </DivInfoRightChild>
                    </DivInfoChild>
                    <DivInfoChild>
                        <DivInfoLeftChild>
                            <SpanInfoChild>Status</SpanInfoChild>
                        </DivInfoLeftChild>
                        <DivInfoRightChild>
                            {check === 'add'
                                && <SpanInfoChild>Import</SpanInfoChild>
                                || <SpanInfoChild>{itemDetail?.status}</SpanInfoChild>
                            }
                        </DivInfoRightChild>
                    </DivInfoChild>
                    <DivInfoChild>
                        <DivInfoLeftChild>
                            <SpanInfoChild>Total Cost</SpanInfoChild>
                        </DivInfoLeftChild>
                        <DivInfoRightChild>
                            {check === 'add'
                                && <SpanInfoChild>{calTotalCost()}</SpanInfoChild>
                                || <SpanInfoChild>{itemDetail?.totalCost}</SpanInfoChild>
                            }

                        </DivInfoRightChild>
                    </DivInfoChild>
                </DivInfo>
                <DivNotes>
                    <SpanNotes>Notes</SpanNotes>
                    {check === 'add'
                        && <InputNotes
                            type="text"
                            placeholder="Notes here..."
                            onChange={(e) => setNotes(e.target.value)}
                        />
                        || <DivNote>{itemDetail?.note}</DivNote>
                    }
                </DivNotes>
                <DivButtons>
                    <DivButton>
                        <Button
                            onClick={() => setShowLayout(false)}
                        >
                            Exit
                        </Button>
                    </DivButton>
                    <DivButton>
                        {check === 'add'
                            && <Button
                                onClick={() => handleAddNewImport()}
                            >
                                Import
                            </Button>
                            || <Button

                            >
                                Return
                            </Button>
                        }
                    </DivButton>
                </DivButtons>
            </RightLayoutAdd>
        </LayoutAdd>
    )
}

export default Coupon;