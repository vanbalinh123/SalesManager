import { useState } from "react";

import { useGetStaffsSalaryQuery } from "../../redux/api/invoice-apli.slice";
import PaginateProducts from "../products/pagination/pagination.components";
import UpdatePayrollStaff from "./updatePayrollStaff/updatePayrollStaff.component";

import {
    HeaderProductsPage,
    NameOutlet,
    LayoutSearch,
    DivSearch,
    InputSearch,
    ButtonSearch,
    Svg,
    SpanSearch,
    DivAddProduct,
    ButtonAddProduct,
    SpanAddProduct
} from "../generalCss/headerTemplate.styles";

import {
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
} from "./invoice.styles";

const Invoice = () => {
    const [invoiceSearch, setInvoiceSearch] = useState('staff');
    const [codeSearch, setCodeSearch] = useState('');
    const [codeSearch1, setCodeSearch1] = useState('');
    const [nameSearch, setNameSearch] = useState('');
    const [nameSearch1, setNameSearch1] = useState('');
    const [monthSearch, setMonthSearch] = useState('');
    const [monthSearch1, setMonthSearch1] = useState('');
    const [yearSearch, setYearSearch] = useState('');
    const [yearSearch1, setYearSearch1] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [staffUpdate, setStaffUpdate] = useState({})
    const [checkStaff, setCheckStaff] = useState(false);

    const { data: staffsSalary } = useGetStaffsSalaryQuery({
        codeStaff: codeSearch1,
        nameStaff: nameSearch1,
        month: monthSearch1,
        year: yearSearch1,
        page: currentPage
    })


    const handleStaffInvoiceClick = () => {
        setInvoiceSearch('staff')
    }

    const handleSalesInvoiceClick = () => {
        setInvoiceSearch('sales')
    }

    const handleSearch = () => {
        setCodeSearch1(codeSearch)
        setNameSearch1(nameSearch)
        setMonthSearch1(monthSearch)
        setYearSearch1(yearSearch)
    }

    const handleItemClick = (item) => {
        setCheckStaff(true)
        setStaffUpdate(item)
    }

    const handleClearSearch = () => {
        setCodeSearch('')
        setNameSearch('')
        setMonthSearch('')
        setYearSearch('')
        setCodeSearch1('')
        setNameSearch1('')
        setMonthSearch1('')
        setYearSearch1('')
    }

    return (
        <div>
            {checkStaff === true &&
                <UpdatePayrollStaff
                    setCheckStaff={setCheckStaff}
                    staffUpdate={staffUpdate}
                />
            }

            <HeaderProductsPage>
                <NameOutlet>Invoice</NameOutlet>
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
                            type="text"
                            placeholder="Name..."
                            value={nameSearch}
                            onChange={(e) => setNameSearch(e.target.value)}
                        />
                    </DivSearch>
                    <DivSearch>
                        <InputSearch
                            type="number"
                            min={1}
                            max={12}
                            placeholder="Month..."
                            value={monthSearch}
                            onChange={(e) => setMonthSearch(e.target.value)}
                        />
                    </DivSearch>
                    <DivSearch>
                        <InputSearch
                            type="number"
                            placeholder="Year..."
                            value={yearSearch}
                            onChange={(e) => setYearSearch(e.target.value)}
                        />
                    </DivSearch>
                    <ButtonSearch onClick={handleClearSearch}>X</ButtonSearch>
                    <ButtonSearch
                        onClick={handleSearch}
                    >
                        <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </Svg>
                        <SpanSearch>Search</SpanSearch>
                    </ButtonSearch>
                </LayoutSearch>
            </HeaderProductsPage>
            <MainPage>
                <SideBarPage>
                    <ChildOfSidebar>
                        <Active>Invoice</Active>
                        <UlActive>
                            <ItemActive
                                active={invoiceSearch === 'staff'}
                                onClick={() => handleStaffInvoiceClick()}
                            >
                                Staff Salary
                            </ItemActive>
                            <ItemActive
                                active={invoiceSearch === 'sales'}
                                onClick={() => handleSalesInvoiceClick()}
                            >
                                Sales
                            </ItemActive>
                        </UlActive>
                    </ChildOfSidebar>
                </SideBarPage>
                <ContentPage>
                    {invoiceSearch === 'staff'
                        &&
                        <Table>
                            <THeader>
                                <Tr>
                                    <Th>Code</Th>
                                    <Th>Name</Th>
                                    <Th>Month</Th>
                                    <Th>Bonus</Th>
                                    <Th>Day Off</Th>
                                    <Th>Deduct</Th>
                                    <Th>Date Added</Th>
                                    <Th>Salary</Th>
                                    <Th>Total Salary</Th>
                                </Tr>
                            </THeader>
                            <TBody>
                                {staffsSalary?.staffs.map(item => (
                                    <Tr
                                        key={item.id}
                                        onClick={() => handleItemClick(item)}
                                    >
                                        <Td>{item.codeStaff}</Td>
                                        <Td>{item.nameStaff}</Td>
                                        <Td>{item.billMonth}</Td>
                                        <Td>{item.bonus}</Td>
                                        <Td>{item.dayOff}</Td>
                                        <Td>{item.deduct}</Td>
                                        <Td>{item.date.year}-{item.date.month}-{item.date.day}</Td>
                                        <Td>{item.salary}</Td>
                                        <Td>{item.total}</Td>
                                    </Tr>
                                ))}
                            </TBody>
                        </Table>
                        ||
                        <div style={{color:'red'}}>Hoá đơn bán hàng sẽ cập nhập từ giao diện bán hàng</div>
                    }

                    <PaginateProducts
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        products={staffsSalary}
                    />
                </ContentPage>
            </MainPage>
        </div>
    )
}

export default Invoice;