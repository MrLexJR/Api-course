package com.mrlexjr.sbootnew.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "student")
public class StudentModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String address;


}
