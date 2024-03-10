import { useState } from "react";
import { useEffect } from "react";

import PaginateProducts from "../products/pagination/pagination.components";
import Coupon from "./coupon/coupon.component";
import ReturnCoupon from "./returnCoupon/returnCoupon.component";

import {
    useGetImportCouponQuery,
    useGetReturnCouponQuery
} from "../../redux/api/warehouse-api.slice";

import {
    HeaderProductsPage,
    NameOutlet,
    LayoutSearch,
    DivSearch,
    InputSearch,
    ButtonSearch,
    Svg,
    SpanSearch,
} from "../generalCss/headerTemplate.styles";

import {
    DivAdd,
    ButtonAdd,
    SpanAdd,
    MainPage,
    SideBarPage,
    ChildOfSidebar,
    Active,
    Time,
    UlActive,
    UlTime,
    ItemActive,
    ItemTime,
    ContentPage,
    Table,
    Tr,
    THeader,
    Th,
    TBody,
    Td,
} from "./warehouse.styles";

const getCurrentDate = () => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    return day;
}

const getCurrentMonth = () => {
    const currentDate = new Date();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    return month;
}

const getCurrentYear = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return year;
}

const WareHouse = () => {
    const [showLayout, setShowLayout] = useState(false);
    const [showLayoutReturn, setShowLayoutReturn] = useState(false)
    const [statusSearch, setStatusSearch] = useState('Import');
    const [codeSearch, setCodeSearch] = useState('');
    const [codeSearch1, setCodeSearch1] = useState('');
    const [codeSearch2, setCodeSearch2] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [check, setCheck] = useState('');
    const [checkReturn, setCheckReturn] = useState('');
    const [itemDetail, setItemDetail] = useState({})
    // const [all, setAll] = useState(true)
    // const [day, setDay] = useState('');
    // const [month, setMonth] = useState('');
    // const [year, setYear] = useState('');

    const [dateBefore, setDateBefore] = useState('');
    const [dateAfter, setDateAfter] = useState('');
    const [dateBefore1, setDateBefore1] = useState('');
    const [dateAfter1, setDateAfter1] = useState('');
    const [dateBefore2, setDateBefore2] = useState('');
    const [dateAfter2, setDateAfter2] = useState('');

    const { data: importedCoupon } = useGetImportCouponQuery({
        code: codeSearch1,
        page: currentPage,
        dateBefore: dateBefore1,
        dateAfter: dateAfter1
        // day: day,
        // month: month,
        // year: year

    });
    // const { data: importedCoupon } = useGetImportCouponQuery();

    // const { data: importedCoupon } = useGetImportCouponQuery();
    console.log(importedCoupon)
    const { data: returnedCoupon } = useGetReturnCouponQuery({
        code: codeSearch2,
        page: currentPage,
        dateBefore: dateBefore2,
        dateAfter: dateAfter2
    });

    const handleStatusImportClick = () => {
        setStatusSearch('Import');
        setCodeSearch('');
        setCodeSearch2('');
        setDateBefore('');
        setDateBefore2('');
        setDateAfter('');
        setDateAfter2('');
        setCurrentPage(0);
    }

    const handleStatusReturnClick = () => {
        setStatusSearch('Return');
        setCodeSearch('');
        setCodeSearch1('');
        setDateBefore('');
        setDateBefore1('');
        setDateAfter('');
        setDateAfter1('');
        setCurrentPage(0);
    }

    const handleSearch = () => {
        if (statusSearch === 'Import') {
            setCodeSearch1(codeSearch);
            setDateBefore1(dateBefore);
            setDateAfter1(dateAfter)
            if (codeSearch === '' && dateBefore === '' && dateAfter === '') {
                setCurrentPage(currentPage)
            } else {
                setCurrentPage(0)
            }
        } else {
            setCodeSearch2(codeSearch);
            setDateBefore2(dateBefore);
            setDateAfter2(dateAfter)
            if (codeSearch === '' && dateBefore === '' && dateAfter === '') {
                setCurrentPage(currentPage)
            } else {
                setCurrentPage(0)
            }
        }

    }

    const handleLayoutAddClick = () => {
        setShowLayout(true);
        setCheck('add')
    }

    const handleItemImportClick = (item) => {
        setShowLayout(true);
        setCheck('detail');
        setItemDetail(item)
    }

    const handleItemReturnClick = (item) => {
        console.log('ccs', item)
        setShowLayoutReturn(true)
        setCheckReturn('detail')
        setItemDetail(item)
    } 

    // const handleAllTimeClick = () => {
    //     setDay('')
    //     setMonth('')
    //     setYear('')
    //     setAll(true)
    //     setCurrentPage(0)
    // }

    // const handleThisMonthClick = () => {
    //     setMonth(getCurrentMonth())
    //     setDay('')
    //     setYear('')
    //     setAll(false)
    //     setCurrentPage(0);
    // }

    // const handleThisDayClick = () => {
    //     setDay(getCurrentDate())
    //     setMonth('')
    //     setYear('')
    //     setAll(false)
    //     setCurrentPage(0);
    // }

    // const handleThisYearClick = () => {
    //     setYear(String(getCurrentYear()))
    //     setDay('')
    //     setMonth('')
    //     setAll(false)
    //     setCurrentPage(0);
    // }

    console.log('hehehe', returnedCoupon)

    return (
        <div>
            {showLayout &&
                <Coupon
                    setShowLayout={setShowLayout}
                    check={check}
                    itemDetail={itemDetail}
                    setShowLayOutReturn={setShowLayoutReturn}
                    setCheckReturn={setCheckReturn}
                />
            }

            {showLayoutReturn &&
                <ReturnCoupon
                    setShowLayoutReturn={setShowLayoutReturn}
                    checkReturn={checkReturn}
                    itemDetail={itemDetail}
                />
            }

            <HeaderProductsPage>
                <NameOutlet>Warehouse</NameOutlet>
                <LayoutSearch>
                    <DivSearch>
                        <InputSearch
                            type="text"
                            placeholder="Code..."
                            value={codeSearch}
                            onChange={(e) => setCodeSearch(e.target.value)}
                        />
                    </DivSearch>
                    <DivSearch>
                        <InputSearch
                            type="date"
                            placeholder="..."
                            value={dateBefore}
                            onChange={(e) => setDateBefore(e.target.value)}
                        />
                    </DivSearch>
                    <DivSearch>
                        <InputSearch
                            type="date"
                            placeholder="..."
                            value={dateAfter}
                            onChange={(e) => setDateAfter(e.target.value)}
                        />
                    </DivSearch>
                    <ButtonSearch
                        onClick={() => handleSearch()}
                    >
                        <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </Svg>
                        <SpanSearch>Search</SpanSearch>
                    </ButtonSearch>
                </LayoutSearch>
                {statusSearch === 'Import' &&
                    <DivAdd>
                        <ButtonAdd
                            onClick={handleLayoutAddClick}
                        >
                            <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </Svg>
                            <SpanAdd>Import</SpanAdd>
                        </ButtonAdd>
                    </DivAdd>
                }
            </HeaderProductsPage>
            <MainPage>
                <SideBarPage>
                    <ChildOfSidebar>
                        <Active>Status</Active>
                        <UlActive>
                            <ItemActive
                                active={statusSearch === 'Import'}
                                onClick={() => handleStatusImportClick()}
                            >
                                Import
                            </ItemActive>
                            <ItemActive
                                active={statusSearch === 'Return'}
                                onClick={() => handleStatusReturnClick()}
                            >
                                Return
                            </ItemActive>
                        </UlActive>
                    </ChildOfSidebar>
                    {/* <ChildOfSidebar>
                        <Time>Time</Time>
                        <UlTime>
                            <ItemTime
                                onClick={() => handleAllTimeClick()}
                                active={all}
                            >
                                All
                            </ItemTime>
                            <ItemTime
                                onClick={() => handleThisDayClick()}
                                active={day}
                            >
                                This Day
                            </ItemTime>
                            <ItemTime
                                onClick={() => handleThisMonthClick()}
                                active={month}
                            >
                                This month
                            </ItemTime>
                            <ItemTime
                                onClick={() => handleThisYearClick()}
                                active={year}
                            >
                                This Year
                            </ItemTime>
                        </UlTime>
                    </ChildOfSidebar> */}
                </SideBarPage>
                <ContentPage>
                    <Table>
                        <THeader>
                            <Tr>
                                <Th>Code</Th>
                                <Th>Implementation date</Th>
                                <Th>Total Cost</Th>
                                <Th>Status</Th>
                            </Tr>
                        </THeader>
                        <TBody>
                            {statusSearch === 'Import'
                                && importedCoupon?.import.map(item => (
                                    <Tr
                                        key={item._id}
                                        onClick={() => handleItemImportClick(item)}
                                    >
                                        <Td>{item.code}</Td>
                                        <Td>{item.year}-{item.month}-{item.day}</Td>
                                        <Td>{item.totalCost}</Td>
                                        <Td>{item.status}</Td>
                                    </Tr>
                                )) ||
                                returnedCoupon?.return.map(item => (
                                    <Tr 
                                        key={item._id}
                                        onClick={() => handleItemReturnClick(item)}
                                    >
                                        <Td>{item.code}</Td>
                                        <Td>{item.year}-{item.month}-{item.day}</Td>
                                        <Td>{item.totalCost}</Td>
                                        <Td>{item.status}</Td>
                                    </Tr>
                                ))
                            }
                        </TBody>
                    </Table>
                    <PaginateProducts
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        products={statusSearch === 'Import' ? importedCoupon : returnedCoupon}
                    />
                </ContentPage>
            </MainPage>
        </div>
    )
}

export default WareHouse;