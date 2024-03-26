package com.example.connect_api.repository;

import com.example.connect_api.model.TypeProduct;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITypeProductRepository extends JpaRepository<TypeProduct,Integer> {
}
