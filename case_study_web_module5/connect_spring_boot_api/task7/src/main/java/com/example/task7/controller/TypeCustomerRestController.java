package com.example.task7.controller;

import com.example.task7.model.Customers;
import com.example.task7.model.TypeCustomer;
import com.example.task7.service.ITypeCustomersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/typeCustomer")
public class TypeCustomerRestController {

    @Autowired
    private ITypeCustomersService typeCustomersService;

    @GetMapping
    public ResponseEntity<List<TypeCustomer>> showListType(){
        List<TypeCustomer> typeCustomerList = typeCustomersService.getAllType();
        if (typeCustomerList == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(typeCustomerList,HttpStatus.OK);
        }
    }

