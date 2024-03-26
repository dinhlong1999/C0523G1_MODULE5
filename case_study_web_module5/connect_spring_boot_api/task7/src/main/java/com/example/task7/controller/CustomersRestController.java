package com.example.task7.controller;

import com.example.task7.model.Customers;
import com.example.task7.service.ICustomersService;
import com.example.task7.service.ITypeCustomersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/customers")
public class CustomersRestController {

    @Autowired
    private ICustomersService customersService;

    @GetMapping("")
    public ResponseEntity<List<Customers>> showCustomerList(
            @RequestParam(name = "name_like", defaultValue = "",required = false) String name,
            @RequestParam(name = "typeCustomers.name_like", defaultValue = "",required = false) String typeName
    ){
        List<Customers> customersList = customersService.getAll(name,typeName);
        if (customersList == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(customersList,HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCustomer(@PathVariable int id){
        customersService.deleteCustomerByID(id);
        return ResponseEntity.ok("Xoa thành công");
    }



}
