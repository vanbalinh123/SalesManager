import { useState } from "react";

import { useGetStaffsQuery } from "../../redux/api/staffs-api.slice";
import AddStaff from "./addStaff/addStaff.component";
import { useDeleteStaffMutation } from "../../redux/api/staffs-api.slice";
import PayRoll from "./addPayroll/addPayroll.component";

import PaginateProducts from "../products/pagination/pagination.components";
import {
  HeaderProductsPage,
  NameOutlet,
  LayoutSearch,
  DivSearch,
  InputSearch,
  ButtonSearch,
  Svg,
  SpanSearch,
  ButtonAddProduct,
  SpanAddProduct,
  DivAddProduct,
} from "../generalCss/headerTemplate.styles";

import {
  ContentPage,
  Table,
  Tr,
  THeader,
  Th,
  TBody,
  Td,
  TdUpdate,
  TdDelete,
  TdPayroll,
} from "./staffs.styles";

const Staffs = () => {
  const [code, setCode] = useState("");
  const [code1, setCode1] = useState("");
  const [name, setName] = useState("");
  const [name1, setName1] = useState("");
  const [phone, setPhone] = useState("");
  const [phone1, setPhone1] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [check, setCheck] = useState("");
  const [showLayout, setShowLayout] = useState(false);
  const [staffUpdate, setStaffUpdate] = useState({});
  const [checkShowAddPayroll, setCheckShowAddPayroll] = useState(false);

  const { data: staffs } = useGetStaffsQuery({
    codeStaff: code1,
    nameStaff: name1,
    phone: phone1,
    page: currentPage,
  });




  const [deleteStaff] = useDeleteStaffMutation();

  const handleSearch = () => {
    setCode1(code);
    setName1(name);
    setPhone1(phone);

    setCurrentPage(
      name === "" && code === "" && phone === "" ? currentPage : 0
    );
  };

  const handleClearSearch = () => {
    setCode("");
    setCode1("");
    setName("");
    setName1("");
    setPhone("");
    setPhone1("");
  };

  const handleShowLayoutAdd = () => {
    setCheck("add");
    setShowLayout(true);
  };

  const handleDeleteClick = async (item) => {
    const isConfirmed = window.confirm(
      `Do you want to delete staff '${item.name.toUpperCase()}' or not?`
    );
    console.log(item)
    if (isConfirmed) {
      try {
        await deleteStaff(item._id).unwrap();
      } catch (error) {
        if (error.data) {
          alert(error.data.message);
        } else {
          alert("error");
        }
      }
    }
  };

  const handleUpdateItemCick = (item) => {
    setStaffUpdate(item);
    setCheck("update");
    setShowLayout(true);
  };

  const handlePayrollClick = (item) => {
    setCheckShowAddPayroll(true);
    setStaffUpdate(item);
  };

  return (
    <div>
      {showLayout === true && (
        <AddStaff
          check={check}
          setShowLayout={setShowLayout}
          staffUpdate={staffUpdate}
        />
      )}

      {checkShowAddPayroll === true && (
        <PayRoll
          setCheckShowAddPayroll={setCheckShowAddPayroll}
          staffUpdate={staffUpdate}
        />
      )}

      <HeaderProductsPage>
        <NameOutlet>Staffs</NameOutlet>
        <LayoutSearch>
          <DivSearch>
            <InputSearch
              type="text"
              placeholder="Staffs Code..."
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </DivSearch>
          <DivSearch>
            <InputSearch
              type="text"
              placeholder="Staffs Name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </DivSearch>
          <DivSearch>
            <InputSearch
              type="number"
              placeholder="Phone Number..."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </DivSearch>
          <ButtonSearch onClick={handleClearSearch}>
            <SpanSearch>x</SpanSearch>
          </ButtonSearch>
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
          <ButtonAddProduct onClick={handleShowLayoutAdd}>
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
            <SpanAddProduct>Add New Staff</SpanAddProduct>
          </ButtonAddProduct>
        </DivAddProduct>
      </HeaderProductsPage>
      <ContentPage>
        <Table>
          <THeader>
            <Tr>
              <Th>Code</Th>
              <Th>Name</Th>
              <Th>Sex</Th>
              <Th>Phone</Th>
              <Th>Address</Th>
              <Th>Position</Th>
              <Th>Working time</Th>
              <Th>Salary/month</Th>
              <Th style={{ width: "70px" }}></Th>
              <Th style={{ width: "70px" }}></Th>
              <Th style={{ width: "70px" }}></Th>
            </Tr>
          </THeader>
          <TBody>
            {staffs?.staffs?.map((item) => (
              <Tr key={item.id}>
                <Td>{item.codeStaff}</Td>
                <Td>{item.name}</Td>
                <Td>{item.sex}</Td>
                <Td>{item.phone}</Td>
                <Td>{item.address}</Td>
                <Td>{item.position}</Td>
                <Td>{item.workingTime}</Td>
                <Td>{item.salary}</Td>
                <TdPayroll onClick={() => handlePayrollClick(item)}>
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
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                    />
                  </Svg>
                </TdPayroll>
                <TdUpdate onClick={() => handleUpdateItemCick(item)}>
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
                </TdUpdate>
                <TdDelete onClick={() => handleDeleteClick(item)}>
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
                </TdDelete>
              </Tr>
            ))}
          </TBody>
        </Table>
        <PaginateProducts
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          products={staffs}
        />
      </ContentPage>
    </div>
  );
};

export default Staffs;
