package com.mrlexjr.sbootnew.service;

import com.mrlexjr.sbootnew.model.StudentModel;
import com.mrlexjr.sbootnew.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService{
    @Autowired
    private StudentRepository studentRepository;

    @Override
    public StudentModel saveStudent(StudentModel student) {
        return studentRepository.save(student);
    }

    @Override
    public List<StudentModel> getAllStudents() {
        return studentRepository.findAll();
    }
}
