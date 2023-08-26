import { useForm } from "react-hook-form"
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
    InputSex
} from "./addStaff.styles"

const AddStaff = ({ check, setShowLayout, staffUpdate }) => {
    const { register, handleSubmit, setValue } = useForm();
    const [src, setSrc] = useState('');
    const [sex, setSex] = useState("male");

    const [addStaff] = useAddStaffMutation();
    const [updateStaff] = useUpdateStaffMutation();

    console.log(staffUpdate)

    useEffect(() => {
        if(check === 'update' && staffUpdate) {
            setValue('name', staffUpdate.nameStaff);
            setValue('position', staffUpdate.position);
            setValue('workingTime', staffUpdate.workingTime);
            setValue('salary', staffUpdate.salary);
            setValue('src', staffUpdate.src);
            setValue('phone', staffUpdate.phone);
            setValue('address', staffUpdate.address);
            setSrc(staffUpdate.src)
            setSex(staffUpdate.sex)
        }
    }, [check, staffUpdate, setValue])

    const handleCloseLayout = () => {
        setShowLayout(false)
    }

    const handleAddStaff = async (data) => {
        if (check === 'add') {
            try {
                const newStaff = {
                    nameStaff: data.name,
                    position: data.position,
                    workingTime: data.workingTime,
                    salary: data.salary,
                    src: data.src,
                    phone: data.phone,
                    address: data.address,
                    sex: sex
                }

                await addStaff(newStaff).unwrap();
                alert('Staff added successfully!')
                setShowLayout(false);
            } catch (error) {
                if (error.data) {
                    alert(error.data.message)
                } else {
                    alert('Errors')
                }
            }
        } else {
            try {
                const update = {
                    id: staffUpdate.id,
                    codeStaff: staffUpdate.codeStaff,
                    nameStaff: data.name,
                    position: data.position,
                    workingTime: data.workingTime,
                    salary: data.salary,
                    src: data.src,
                    phone: data.phone,
                    address: data.address,
                    sex: sex
                }

                await updateStaff(update).unwrap()
                alert('Staff updated successfully!')
                setShowLayout(false);
            } catch (error) {
                if (error.data) {
                    alert(error.data.message)
                } else {
                    alert('Errors')
                }
            }
        }
    }


    return (
        <LayoutAddUpdate>
            <Form
                onSubmit={handleSubmit(handleAddStaff)}
            >
                {check === 'add'
                    && <TitleLayout>Add New Staff</TitleLayout>
                    || <TitleLayout>Update Staff ( {staffUpdate.codeStaff} )</TitleLayout>
                }
                
                <MainLayout>
                    <LeftLayout>
                        <DivImg>
                            {src === ''
                                && <Img src="https://media.istockphoto.com/id/1016744004/vector/profile-placeholder-image-gray-silhouette-no-photo.jpg?s=612x612&w=0&k=20&c=mB6A9idhtEtsFXphs1WVwW_iPBt37S2kJp6VpPhFeoA=" />
                                || <Img src={src} />
                            }
                        </DivImg>
                    </LeftLayout>
                    <RightLayout>
                        <DivInputs>
                            <DivInput>
                                <SpanNameInput>Name</SpanNameInput>
                                <InputAdd
                                    {...register("name", {
                                        required: "Name is required"
                                    })}
                                    type="text"
                                />

                                {/* {errors.name && <div>{errors.name.message}</div>}  */}
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
                            <DivInput>
                                <SpanNameInput>Position</SpanNameInput>
                                <InputAdd
                                    {...register("position", {
                                        required: "Position is required"
                                    })}
                                    type="text"
                                />
                            </DivInput>
                            <DivInput>
                                <SpanNameInput>Working Time</SpanNameInput>
                                <InputAdd
                                    {...register("workingTime", {
                                        required: "Working Time is required"
                                    })}
                                    type="text"
                                />
                            </DivInput>
                            <DivInput>
                                <SpanNameInput>Salary</SpanNameInput>
                                <InputAdd
                                    {...register("salary", {
                                        required: "Salary is required"
                                    })}
                                    type="number"
                                />
                            </DivInput>
                            <DivInput>
                                <SpanNameInput>Image</SpanNameInput>
                                <InputAdd
                                    {...register("src", {
                                        required: "Image is required"
                                    })}
                                    type="text"
                                    value={src}
                                    onChange={(e) => setSrc(e.target.value)}
                                />
                            </DivInput>
                            <DivInput>
                                <SpanNameInput>Phone</SpanNameInput>
                                <InputAdd
                                    {...register("phone", {
                                        required: "Phone is required"
                                    })}
                                    type="text"
                                />
                            </DivInput>
                            <DivInput>
                                <SpanNameInput>Address</SpanNameInput>
                                <InputAdd
                                    {...register("address", {
                                        required: "Address is required"
                                    })}
                                    type="text"
                                />
                            </DivInput>
                        </DivInputs>
                        <DivBtns>
                            {check === 'add' 
                                && <Button>Add</Button>
                                || <Button>Update</Button>
                            }
                            
                            <Button
                                onClick={handleCloseLayout}
                            >Exist</Button>
                        </DivBtns>
                    </RightLayout>
                </MainLayout>
            </Form>
        </LayoutAddUpdate>
    )
}

export default AddStaff