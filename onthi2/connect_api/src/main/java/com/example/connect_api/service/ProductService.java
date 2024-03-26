package com.example.connect_api.service;

import com.example.connect_api.model.Product;
import com.example.connect_api.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {

    @Autowired
    private IProductRepository productRepository;
    @Override
    public List<Product> getAllProduct(String name, String nameType) {
        return productRepository.findAllProduct("%"+name+"%","%"+nameType+"%");
    }

    @Override
    public Product getProductByID(int id) {
        return productRepository.findById(id).get();
    }

    @Override
    public void updateProduct(Product product) {
        productRepository.save(product);
    }

    @Override
    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }

    @Override
    public void saveProduct(Product product) {
        productRepository.save(product);
    }
}
