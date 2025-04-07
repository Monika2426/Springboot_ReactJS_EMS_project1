package net.javaguides.ems.mapper;

import net.javaguides.ems.dto.EmployeeDto;
import net.javaguides.ems.entity.Employee;

public class EmployeeMapper {

    public static EmployeeDto mapToEmployeeDto(Employee employee){
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstname(),
                employee.getLastname(),
                employee.getEmail(),
                employee.getDepartment().getId()
        );
    }

    public static Employee mapToEmployee(EmployeeDto employeeDto){
         Employee employee=new Employee();
         employee.setId(employeeDto.getId());
         employee.setFirstname(employeeDto.getFirstName());
         employee.setLastname(employeeDto.getLastName());
         employee.setEmail(employeeDto.getEmail());
         return employee;
    }
}
