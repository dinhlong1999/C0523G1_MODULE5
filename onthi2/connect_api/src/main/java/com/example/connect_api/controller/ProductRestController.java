package com.example.connect_api.controller;

import com.example.connect_api.model.Product;
import com.example.connect_api.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/product")
public class ProductRestController {

    @Autowired
    private IProductService productService;

    @GetMapping("")
    public ResponseEntity<List<Product>> getAllProduct(
            @RequestParam(name = "name_like", defaultValue = "",required = false) String name,
            @RequestParam(name = "typeProduct.name_like",defaultValue = "", required = false) String nameType
    )
    {
        List<Product> getAllProduct = productService.getAllProduct(name,nameType);
        if (getAllProduct.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(getAllProduct,HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductByID(@PathVariable int id){
        Product product = productService.getProductByID(id);
        if (product == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(product,HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<?> saveProduct(@RequestBody Product product){
        if (product == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        productService.saveProduct(product);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable int id){
        Product product = productService.getProductByID(id);
        if (product == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        productService.deleteProduct(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> editProduct(@PathVariable int id,@RequestBody Product product){
        Product productSearch = productService.getProductByID(id);
        if (productSearch == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        productService.updateProduct(product);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
