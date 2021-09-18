package com.mrlexjr.sbootnew.controller;

import com.mrlexjr.sbootnew.model.StudentModel;
import com.mrlexjr.sbootnew.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody StudentModel student ){
        studentService.saveStudent(student);
        return "New student is add";
    }
    @GetMapping("/getAll")
    public List<StudentModel> getAllStudents(){
        return studentService.getAllStudents();
    }
}
