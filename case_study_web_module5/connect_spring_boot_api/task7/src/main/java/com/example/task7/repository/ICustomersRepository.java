package com.example.task7.repository;

import com.example.task7.model.Customers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ICustomersRepository extends JpaRepository<Customers,Integer> {
 @Query(value = "SELECT customers.* FROM customers join type_customer on type_customer.id = customers.type_id " +
         "where customers.name like :name and type_customer.name like :typeName",nativeQuery = true)
    List<Customers> findAllCustomer(@Param("name") String name,@Param("typeName") String typeName);


}
