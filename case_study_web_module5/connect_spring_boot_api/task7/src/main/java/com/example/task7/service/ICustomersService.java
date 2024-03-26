package com.example.task7.service;

import com.example.task7.model.Customers;

import java.util.List;

public interface ICustomersService {
      List<Customers> getAll(String name, String typeName);

      void deleteCustomerByID(int id);

      void editCustomer(Customers customers);

      void saveCustomer(Customers customers);

      Customers getCustomerById(int id);



}
