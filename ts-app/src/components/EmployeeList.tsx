import React from 'react';

// interface EmployeeListProps {
//     employees: {
//         name: string;
//         age: number;
//         department: string;
//         emoji?: string;
//     }[]
// }

// interface Employees {
//         name: string;
//         age: number;
//         department: string;
//         emoji: string;
    
// }

interface Employee {
        name: string;
        age: number;
        department: string;
        emoji?: string;
}
interface EmployeeEmoji extends Employee{
        emoji?: string;
}
type EmployeeListProps = {
    employees: (Employee | EmployeeEmoji)[];
}

const EmployeeList: React.FC<EmployeeListProps> = ({employees}) => {
    return (
        <div>
            <h2>EmployeeList!!!</h2>
            <ul>
                {
                    employees.map((employee) => (
                    <li>
                        {employee.name}
                        {employee.age}
                        {employee.department}
                        {'emoji' in employee && employee.emoji}
                    </li>
                    ))

                }
            </ul>
        </div>
    );
}

export default EmployeeList;