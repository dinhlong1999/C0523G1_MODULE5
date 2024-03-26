package com.example.task7.service;

import com.example.task7.model.Customers;
import com.example.task7.repository.ICustomersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomersService implements ICustomersService {

    @Autowired
    private ICustomersRepository customersRepository;

    @Override
    public List<Customers> getAll(String name, String typeName) {
        return customersRepository.findAllCustomer("%"+ name +"%","%"+ typeName +"%");
    }

    @Override
    public void deleteCustomerByID(int id) {
        customersRepository.deleteById(id);
    }

    @Override
    public void editCustomer(Customers customers) {
        customersRepository.save(customers);
    }

    @Override
    public void saveCustomer(Customers customers) {
        customersRepository.save(customers);
    }

    @Override
    public Customers getCustomerById(int id) {
        return customersRepository.findById(id).get();
    }
}
