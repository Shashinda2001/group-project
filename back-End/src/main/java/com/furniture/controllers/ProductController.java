package com.furniture.controllers;

import com.furniture.entities.Product;
import com.furniture.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    ProductRepository productRepository;

    @GetMapping("/product")
    List<Product> showAllProducts(){
        return productRepository.findAll();
    }

    @PostMapping("/product/add")
    public  void  addProduct(@RequestBody Product product){
        productRepository.save(product);
    }

    @PutMapping("/product/update")
    public void updateProduct(@RequestBody Product product){
        productRepository.save(product);
    }

    public void deleteProduct(@RequestParam int productId){
        productRepository.deleteById(productId);
    }

}
