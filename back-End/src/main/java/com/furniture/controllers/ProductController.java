package com.furniture.controllers;

import com.furniture.dto.ProductDTO;
import com.furniture.entities.Product;
import com.furniture.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/add")
//    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<Product> addProduct(@RequestBody ProductDTO productDTO) {
        Product product = productService.addProduct(productDTO);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }

    // Other endpoints can be added similarly
}

