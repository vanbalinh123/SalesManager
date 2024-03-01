import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useState } from "react";

import { useAddStaffMutation } from "../../../redux/api/staffs-api.slice";
import { useUpdateStaffMutation } from "../../../redux/api/staffs-api.slice";

import {
  LayoutAddUpdate,
  Form,
  TitleLayout,
  MainLayout,
  LeftLayout,
  DivImg,
  Img,
  DivInput,
  SpanNameInput,
  InputAdd,
  RightLayout,
  DivInputs,
  DivBtns,
  Button,
  DivSex,
  Div,
  InputSex,
  FileInput,
  CustomButton,
  Error,
  Select
} from "./addStaff.styles";

const AddStaff = ({ check, setShowLayout, staffUpdate }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [sex, setSex] = useState("male");

  const [addStaff] = useAddStaffMutation();
  const [updateStaff] = useUpdateStaffMutation();

  console.log(staffUpdate);

  useEffect(() => {
    if (check === "update" && staffUpdate) {
      setCheckImg(true);
      setValue("name", staffUpdate.name);
      setValue("position", staffUpdate.position);
      setValue("workingTime", staffUpdate.workingTime);
      setValue("salary", staffUpdate.salary);
      setValue("avatar", staffUpdate.avatar);
      setValue("phone", staffUpdate.phone);
      setValue("address", staffUpdate.address);
      // setSrc(staffUpdate.src);
      setValue("img", staffUpdate.img);
      setSex(staffUpdate.sex);
    }
  }, [check, staffUpdate, setValue]);

  const handleCloseLayout = () => {
    setShowLayout(false);
  };

  const [file, setFile] = useState({});
  const [checkImg, setCheckImg] = useState(false);

  function handleChange(e) {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    // setValue("img", e.target.files[0]);
    setCheckImg(true);
  }

  const handleAddStaff = async (data) => {
    console.log("dànmasf");
    if (check === "add") {
      try {
        const newStaff = {
          nameStaff: data.name,
          position: data.position,
          workingTime: data.workingTime,
          salary: data.salary,
          avatar: file,
          phone: data.phone,
          address: data.address,
          sex: sex,
        };

        // console.log(newStaff);

        // await addStaff(newStaff).unwrap();
        // alert("Staff added successfully!");
        // setShowLayout(false);
        const res = await addStaff(newStaff, {
          "Content-Type": "multipart/form-data",
        });

        if (res.data) {
          alert("Staff added successfully!");
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
        const update = {
          id: staffUpdate._id,
          codeStaff: staffUpdate.codeStaff,
          nameStaff: data.name,
          position: data.position,
          workingTime: data.workingTime,
          salary: data.salary,
          avatar: String(file) !== "[object Object]" ? file : staffUpdate.avatar,
          phone: data.phone,
          address: data.address,
          sex: sex,
        };

        const res = await updateStaff(update, {
          "Content-Type": "multipart/form-data",
        });

        if (res.data) {
          alert("Staff updated successfully!");
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

  console.log(staffUpdate)

  return (
    <LayoutAddUpdate>
      <Form
        onSubmit={handleSubmit(handleAddStaff)}
        encType="multipart/form-data"
      >
        {(check === "add" && <TitleLayout>Add New Staff</TitleLayout>) || (
          <TitleLayout>Update Staff ( {staffUpdate.codeStaff} )</TitleLayout>
        )}

        <MainLayout>
          <LeftLayout>
            <FileInput id="file-upload" type="file" onChange={handleChange} />
            {(checkImg && (
              <DivImg>
                <Img
                  id="preview-img"
                  src={
                    file.name
                      ? URL.createObjectURL(file)
                      : `http://localhost:3100/img/${staffUpdate.avatar}`
                  }
                />
              </DivImg>
            )) || (
              <>
                {errors.img && (
                  <div style={{ color: "red", fontStyle: "italic", paddingLeft: '60px'}}>
                    {errors.img.message}
                  </div>
                )}
              </>
            )}
            {(checkImg && (
              <CustomButton htmlFor="file-upload">Thay ảnh</CustomButton>
            )) || (
              <CustomButton
                htmlFor="file-upload"
                {...register("img", {
                  required: "Avatar is required !!!",
                })}
              >
                Chọn ảnh
              </CustomButton>
            )}
          </LeftLayout>
          <RightLayout>
            <DivInputs>
              <DivInput>
                <SpanNameInput>Name</SpanNameInput>
                <InputAdd
                  {...register("name", {
                    required: "Name is required!!!",
                  })}
                  type="text"
                />
                {errors.name && <Error>{errors.name.message}</Error>} 
              </DivInput>
              <DivInput>
                <SpanNameInput>Sex</SpanNameInput>
                <DivSex>
                  <Div>
                    Male
                    <InputSex
                      type="radio"
                      name="sex"
                      value="male"
                      checked={sex === "male"}
                      onChange={() => setSex("male")}
                    />
                  </Div>
                  <Div>
                    Female
                    <InputSex
                      type="radio"
                      name="sex"
                      value="female"
                      checked={sex === "female"}
                      onChange={() => setSex("female")}
                    />
                  </Div>
                </DivSex>
              </DivInput>
              {/* <DivInput>
                <SpanNameInput>Position</SpanNameInput>
                <InputAdd
                  {...register("position", {
                    required: "Position is required!!!",
                  })}
                  type="text"
                />
                {errors.position && <Error>{errors.position.message}</Error>} 
              </DivInput> */}
              {/* <DivInput>
                <SpanNameInput>Working Time</SpanNameInput>
                <InputAdd
                  {...register("workingTime", {
                    required: "Working Time is required!!!",
                  })}
                  type="text"
                />
                {errors.workingTime && <Error>{errors.workingTime.message}</Error>}
              </DivInput> */}
              <DivInput>
                <SpanNameInput>Position</SpanNameInput>
                <Select 
                  {...register("position", {
                    required: "Position is required!!!",
                  })}
                >
                  <option>Manager</option>
                  <option>Salesperson</option>
                  <option>Cashier</option>
                  <option>Security</option>
                </Select>
              </DivInput>
              <DivInput>
                <SpanNameInput>Working Time</SpanNameInput>
                <Select 
                  {...register("workingTime", {
                    required: "Working Time is required!!!",
                  })}
                >
                  <option>Full Time</option>
                  <option>Part Time</option>
                </Select>
              </DivInput>
              <DivInput>
                <SpanNameInput>Salary</SpanNameInput>
                <InputAdd
                  {...register("salary", {
                    required: "Salary is required!!!",
                  })}
                  type="number"
                />
                {errors.salary && <Error>{errors.salary.message}</Error>}
              </DivInput>
              <DivInput>
                <SpanNameInput>Phone</SpanNameInput>
                <InputAdd
                  {...register("phone", {
                    required: "Phone is required!!!",
                  })}
                  type="text"
                />
                {errors.phone && <Error>{errors.phone.message}</Error>}
              </DivInput>
              <DivInput>
                <SpanNameInput>Address</SpanNameInput>
                <InputAdd
                  {...register("address", {
                    required: "Address is required!!!",
                  })}
                  type="text"
                />
                {errors.address && <Error>{errors.address.message}</Error>}
              </DivInput>
            </DivInputs>
            <DivBtns>
              {(check === "add" && <Button>Add</Button>) || (
                <Button>Update</Button>
              )}

              <Button onClick={handleCloseLayout}>Exit</Button>
            </DivBtns>
          </RightLayout>
        </MainLayout>
      </Form>
    </LayoutAddUpdate>
  );
};

export default AddStaff;
