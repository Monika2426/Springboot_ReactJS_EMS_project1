package net.javaguides.ems.service.impl;

import lombok.AllArgsConstructor;
import net.javaguides.ems.dto.DepartmentDto;
import net.javaguides.ems.entity.Department;
import net.javaguides.ems.exception.ResourceNotFoundException;
import net.javaguides.ems.mapper.DepartmentMapper;
import net.javaguides.ems.repository.DepartmentRepository;
import net.javaguides.ems.service.DepartmentService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {

    private DepartmentRepository departmentRepository;

    @Override
    public DepartmentDto createDepartment(DepartmentDto departmentDto) {
        Department department=DepartmentMapper.mapToDepartment(departmentDto);
        Department savedDepartment=departmentRepository.save(department);
        return DepartmentMapper.mapToDepartmentDto(savedDepartment);
    }

    @Override
    public DepartmentDto getDepartmentById(Long departmentId) {
        Department department=departmentRepository.findById(departmentId).orElseThrow(()->new ResourceNotFoundException("Department not exists with a given id"+departmentId));
        return DepartmentMapper.mapToDepartmentDto(department);
    }

    @Override
    public List<DepartmentDto> getAllDepartments() {
        List<Department> allDepartments=departmentRepository.findAll();
        return allDepartments.stream().map((Department department)->DepartmentMapper.mapToDepartmentDto(department)).collect(Collectors.toList());
    }

    @Override
    public DepartmentDto updateDepartment(Long departmentId, DepartmentDto savedDepartment) {
        Department department=departmentRepository.findById(departmentId).orElseThrow(()->new ResourceNotFoundException("Department does not exists"+departmentId));
        department.setDepartmentName(savedDepartment.getDepartmentName());
        department.setDepartmentDescription(savedDepartment.getDepartmentDescription());
        Department updatedDepartment=departmentRepository.save(department);
        return DepartmentMapper.mapToDepartmentDto(updatedDepartment);
    }

    @Override
    public void deleteDepartment(Long departmentId) {
        Department department=departmentRepository.findById(departmentId).orElseThrow(()->new ResourceNotFoundException("Department does not exists with given Id"+departmentId));
        departmentRepository.deleteById(departmentId);
    }
}
