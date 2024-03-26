package com.example.connect_api.controller;

import com.example.connect_api.model.TypeProduct;
import com.example.connect_api.service.ITypeProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/typeproduct")
public class TypeProductRestController {

    @Autowired
    private ITypeProductService typeProductService;

    @GetMapping
    private ResponseEntity<List<TypeProduct>> getAllType(

    ){
        List<TypeProduct> getAllType = typeProductService.getAllType();
        if (getAllType.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(getAllType,HttpStatus.OK);
    }
}
