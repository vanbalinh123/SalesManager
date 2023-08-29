import { useState } from 'react';

import { useUpdateStaffSalaryMutation } from '../../../redux/api/invoice-apli.slice';

import {
    DivPayroll,
    Span,
    Div,
    DivHeader,
    DivBody,
    SpanHeader,
    SpanBody,
    DivBtns,
    Btn,
    Input,
    DivBtn
} from './updatePayrollStaff.styles';

const UpdatePayrollStaff = ({setCheckStaff, staffUpdate}) => {
    const [bonus, setBonus] = useState(staffUpdate.bonus);
    const [dayOff, setDayOff] = useState(staffUpdate.dayOff);
    const [deduct, setDeduct] = useState(staffUpdate.deduct);

    const [updateStaffSalary] = useUpdateStaffSalaryMutation();
    
    const calTotal = () => {
        return Number(staffUpdate.salary) 
        + Number(bonus) 
        - (Number(dayOff) * Number(deduct))
    }

    const getDaysInMonth = (month, year) => {
        const lastDay = new Date(year, month, 0);
        return lastDay.getDate();
    }

    const handleUpdatePayRollClick = async () => {
        if(bonus === '' || dayOff === '' || deduct === '') {
            alert("Can't be left empty")
            return; 
        }
        const month = staffUpdate.billMonth.substring(0, 2);
        const year = staffUpdate.billMonth.substring(3);
        const numberOfDays = getDaysInMonth(Number(month), Number(year))

        console.log(month)
        console.log(year)

        if(Number(bonus) < 0 
            || Number(dayOff) < 0 
            || Number(dayOff) > numberOfDays
            || Number(deduct) < 0
        ) {
            alert("Please double check the entered values")
            return;
        }

        try {
            const updatePayRoll = {
                id: staffUpdate.id,
                nameStaff: staffUpdate.nameStaff,
                codeStaff: staffUpdate.codeStaff,
                workingTime: staffUpdate.workingTime,
                bonus: Number(bonus),
                dayOff: Number(dayOff),
                deduct: Number(deduct),
                billMonth: staffUpdate.billMonth,
                date: staffUpdate.date,
                salary: staffUpdate.salary,
                total: calTotal()
            }

            await updateStaffSalary(updatePayRoll).unwrap();
            alert("Update successful")
            setCheckStaff(false)
        } catch(error) {
            if (error.data) {
                alert(error.data.message)
            } else {
                alert('Errors')
            }
        }
    }

    return(
        <DivPayroll>
            <Span>Update Payroll ( {staffUpdate.codeStaff} )</Span>
            <Div>
                <DivHeader>
                    <SpanHeader>Name</SpanHeader>
                    <SpanHeader>Work time</SpanHeader>
                    <SpanHeader>Salary</SpanHeader>
                    <SpanHeader>Bonus</SpanHeader>
                    <SpanHeader>Day off</SpanHeader>
                    <SpanHeader>Deduct/day</SpanHeader>
                    <SpanHeader>Month</SpanHeader>

                    <SpanHeader>Total</SpanHeader>
                </DivHeader>
                <DivBody>
                    <SpanBody>{staffUpdate.nameStaff}</SpanBody>
                    <SpanBody>{staffUpdate.workingTime}</SpanBody>
                    <SpanBody>{staffUpdate.salary}</SpanBody>
                    <SpanBody>
                        <Input 
                            type='number'
                            min={0}
                            value={bonus}
                            onChange={(e) => setBonus(e.target.value)}
                        />
                    </SpanBody>
                    <SpanBody>
                        <Input 
                            type='number'
                            min={0}
                            value={dayOff}
                            onChange={(e) => setDayOff(e.target.value)}
                        />
                    </SpanBody>
                    <SpanBody>
                        <Input 
                            type='number'
                            min={0}
                            value={deduct}
                            onChange={(e) => setDeduct(e.target.value)}
                        />
                    </SpanBody>
                    <SpanBody>{staffUpdate.billMonth}</SpanBody>
                    <SpanBody>{calTotal()}</SpanBody>
                </DivBody>
            </Div>
            <DivBtns>
                <DivBtn>
                    <Btn
                        onClick={handleUpdatePayRollClick}
                    >Update</Btn>
                </DivBtn>
                <DivBtn>
                    <Btn
                        onClick={() => setCheckStaff(false)}
                    >Exist</Btn>
                </DivBtn>

            </DivBtns>
        </DivPayroll>
    )
}

export default UpdatePayrollStaff;