import { useState } from "react";

import { useGetStaffsSalaryQuery } from "../../redux/api/invoice-apli.slice";
import PaginateProducts from "../products/pagination/pagination.components";
import UpdatePayrollStaff from "./updatePayrollStaff/updatePayrollStaff.component";
import { useDeleteStaffInvoiceMutation } from "../../redux/api/invoice-apli.slice";

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
    UlActive,
    ItemActive,
    ContentPage,
    Table,
    Tr,
    THeader,
    Th,
    TBody,
    Td,
    TdUpdate,
    TdDelete
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

    const [deleteInvoice] = useDeleteStaffInvoiceMutation();


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

    const handleDeleteClick = async (item) => {
        const isConfirmed = window.confirm(`Do you want to delete invoice '${item.nameStaff.toUpperCase()}' or not?`);
        if (isConfirmed) {
            try {
                await deleteInvoice(item.id).unwrap();
            } catch (error) {
                if (error.data) {
                    alert(error.data.message)
                } else {
                    alert('error')
                }
            }
        }
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
                                    <Th style={{ width: "70px" }}></Th>
                                    <Th style={{ width: "70px" }}></Th>
                                </Tr>
                            </THeader>
                            <TBody>
                                {staffsSalary?.staffs.map(item => (
                                    <Tr key={item.id}>
                                        <Td>{item.codeStaff}</Td>
                                        <Td>{item.nameStaff}</Td>
                                        <Td>{item.billMonth}</Td>
                                        <Td>{item.bonus}</Td>
                                        <Td>{item.dayOff}</Td>
                                        <Td>{item.deduct}</Td>
                                        <Td>{item.date.year}-{item.date.month}-{item.date.day}</Td>
                                        <Td>{item.salary}</Td>
                                        <Td>{item.total}</Td>
                                        <TdUpdate
                                            onClick={() => handleItemClick(item)}
                                        >
                                            <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                            </Svg>
                                        </TdUpdate>
                                        <TdDelete
                                            onClick={() => handleDeleteClick(item)}
                                        >
                                            <Svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                            </Svg>
                                        </TdDelete>
                                    </Tr>
                                ))}
                            </TBody>
                        </Table>
                        ||
                        <div style={{ color: 'red' }}>Hoá đơn bán hàng sẽ cập nhập từ giao diện bán hàng</div>
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