package com.example.task7.service;

import com.example.task7.model.TypeCustomer;
import com.example.task7.repository.ITypeCustomersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeCustomersService implements ITypeCustomersService {

    @Autowired
    private ITypeCustomersRepository typeCustomersRepository;
    @Override
    public List<TypeCustomer> getAllType() {
        return typeCustomersRepository.findAll();
    }
}
