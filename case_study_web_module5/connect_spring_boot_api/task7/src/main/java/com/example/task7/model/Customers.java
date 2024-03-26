package com.example.task7.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
public class Customers {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String birthday;
    private int gender;
    private String address;
    private String phoneNumber;
    private String email;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "type_id", referencedColumnName = "id")
    private TypeCustomer typeCustomer;

    public Customers() {
    }

    public Customers(int id, String name, String birthday, int gender, String address, String phoneNumber, String email,
                     TypeCustomer typeCustomer) {
        this.id = id;
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.typeCustomer = typeCustomer;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public int getGender() {
        return gender;
    }

    public void setGender(int gender) {
        this.gender = gender;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public TypeCustomer getTypeCustomers() {
        return typeCustomer;
    }

    public void setTypeCustomers(TypeCustomer typeCustomer) {
        this.typeCustomer = typeCustomer;
    }
}
