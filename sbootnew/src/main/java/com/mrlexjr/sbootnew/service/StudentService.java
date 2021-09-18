package com.mrlexjr.sbootnew.service;

import com.mrlexjr.sbootnew.model.StudentModel;

import java.util.List;

public interface StudentService {
    public StudentModel saveStudent(StudentModel student);
    public List<StudentModel> getAllStudents();
}
