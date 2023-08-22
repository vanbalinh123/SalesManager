import { useState } from "react";
import { useEffect } from "react";

import PaginateProducts from "../products/pagination/pagination.components";
import Coupon from "./coupon/coupon.component";

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

const WareHouse = () => {
    const [showLayout, setShowLayout] = useState(false);
    const [checkStatus, setCheckStatus] = useState(true);
    const [statusSearch, setStatusSearch] = useState('Import');
    const [codeSearch, setCodeSearch] = useState('');
    const [codeSearch1, setCodeSearch1] = useState('');
    const [codeSearch2, setCodeSearch2] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [check, setCheck] = useState('');
    const [itemDetail, setItemDetail] = useState({})

    const { data: importedCoupon } = useGetImportCouponQuery({
        code: codeSearch1,
        page: currentPage
    });
    const { data: returnedCoupon } = useGetReturnCouponQuery({
        code: codeSearch2,
        page: currentPage
    });

    const handleStatusImportClick = () => {
        setStatusSearch('Import');
        setCodeSearch('');
        setCodeSearch2('');
        setCurrentPage(0);
    }

    const handleStatusReturnClick = () => {
        setStatusSearch('Return');
        setCodeSearch('');
        setCodeSearch1('');
        setCurrentPage(0);
    }

    const handleSearch = () => {
        if (statusSearch === 'Import') {
            setCodeSearch1(codeSearch);
            if (codeSearch === '') {
                setCurrentPage(currentPage)
            } else {
                setCurrentPage(0)
            }
        } else {
            setCodeSearch2(codeSearch);
            if (codeSearch === '') {
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
 
    return (
        <div>
            {showLayout && 
                <Coupon 
                    setShowLayout={setShowLayout}
                    check={check}
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
                                Returns
                            </ItemActive>
                        </UlActive>
                    </ChildOfSidebar>
                    <ChildOfSidebar>
                        <Time>Time</Time>
                        <UlTime>
                            <ItemTime>
                                This month
                            </ItemTime>
                        </UlTime>
                    </ChildOfSidebar>
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
                                    key={item.id}
                                    onClick={() => handleItemImportClick(item)}
                                >
                                    <Td>{item.codeImport}</Td>
                                    <Td>{item.date}</Td>
                                    <Td>{item.totalCost}</Td>
                                    <Td>{item.status}</Td>
                                </Tr>
                            )) ||
                                returnedCoupon?.return.map(item => (
                                    <Tr key={item.id}>
                                        <Td>{item.codeReturn}</Td>
                                        <Td>{item.date}</Td>
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
                        products={statusSearch ==='Import' ? importedCoupon : returnedCoupon}
                    />
                </ContentPage>
            </MainPage>
        </div>
    )
}

export default WareHouse;