import { useState } from 'react';

import { useAddStaffSalaryMutation } from '../../../redux/api/invoice-apli.slice';

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
} from './addPayroll.styyles';

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

const PayRoll = ({ setCheckShowAddPayroll, staffUpdate}) => {
    const [bonus, setBonus] = useState('');
    const [dayOff, setDayOff] = useState('');
    const [deduct, setDeduct] = useState('');
    const [month, setMonth] = useState('');

    const [addNewStaffPayroll] = useAddStaffSalaryMutation()

    const calTotal = () => {
        return Number(staffUpdate.salary) 
        + Number(bonus) 
        - (Number(dayOff) * Number(deduct))
    }

    const getDaysInMonth = (month, year) => {
        const lastDay = new Date(year, month, 0);
        return lastDay.getDate();
    }
    
    
    const handleAddPayRollClick = async () => {
        if(bonus === '' || dayOff === '' || deduct === '' || month === '') {
            alert("Can't be left empty")
            return; 
        }

        const numberOfDays = getDaysInMonth(Number(month), getCurrentYear())

        if(Number(bonus) < 0 
            || Number(dayOff) < 0 
            || Number(dayOff) > numberOfDays
            || Number(deduct) < 0
            || Number(month) < 0
            || Number(month) > 12
        ) {
            alert("Please double check the entered values")
            return;
        }

        try {
            const payRoll = {
                nameStaff: staffUpdate.nameStaff,
                codeStaff: staffUpdate.codeStaff,
                workingTime: staffUpdate.workingTime,
                bonus: Number(bonus),
                dayOff: Number(dayOff),
                deduct: Number(deduct),
                billMonth: month.padStart(2, '0')+"/"+getCurrentYear(),
                date: {
                    day: getCurrentDate(),
                    month: getCurrentMonth(),
                    year: String(getCurrentYear())
                },
                salary: staffUpdate.salary,
                total: calTotal()
            }

            await addNewStaffPayroll(payRoll).unwrap()
            alert('Add payroll successfully!')
            setCheckShowAddPayroll(false)
        } catch (error) {
            if (error.data) {
                alert(error.data.message);
            } else {
                alert('Error!');
            }
        }
    }

    return (
        <DivPayroll>
            <Span>Payroll ( {staffUpdate.codeStaff} )</Span>
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
                    <SpanBody>
                        <Input 
                            type='number'
                            min={1}
                            max={12}
                            value={month}
                            onChange={(e) => setMonth(e.target.value)}
                        />
                    </SpanBody>
                    <SpanBody>{calTotal()}</SpanBody>
                </DivBody>
            </Div>
            <DivBtns>
                <DivBtn>
                    <Btn
                        onClick={handleAddPayRollClick}
                    >Add</Btn>
                </DivBtn>
                <DivBtn>
                    <Btn
                        onClick={() => setCheckShowAddPayroll(false)}
                    >Exist</Btn>
                </DivBtn>

            </DivBtns>
        </DivPayroll>
    )
}

export default PayRoll;