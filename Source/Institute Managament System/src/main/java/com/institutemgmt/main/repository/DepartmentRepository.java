package com.institutemgmt.main.repository;

import com.institutemgmt.main.entites.Classes;
import com.institutemgmt.main.entites.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department,Integer> {
}