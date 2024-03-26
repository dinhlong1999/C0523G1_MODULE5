package com.example.connect_api.service;

import com.example.connect_api.model.Product;

import java.util.List;

public interface IProductService {

    List<Product> getAllProduct(String name, String nameType);

    Product getProductByID (int id);

    void updateProduct(Product product);

    void deleteProduct(int id);

    void saveProduct(Product product);
}
