package com.example.connect_api.service;

import com.example.connect_api.model.TypeProduct;
import com.example.connect_api.repository.ITypeProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeProductService implements ITypeProductService{

    @Autowired
    private ITypeProductRepository typeProductRepository;

    @Override
    public List<TypeProduct> getAllType() {
        return typeProductRepository.findAll();
    }
}
