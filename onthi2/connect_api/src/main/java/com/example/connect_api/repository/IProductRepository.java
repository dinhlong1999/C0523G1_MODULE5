package com.example.connect_api.repository;

import com.example.connect_api.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IProductRepository extends JpaRepository<Product,Integer> {
    @Query(value = "select product.* from product join type_product on product.typeid = type_product.id where product.name like :name and type_product.name like :nameType",nativeQuery = true)
    List<Product> findAllProduct (@Param("name") String name, @Param("nameType") String nameType);
}
