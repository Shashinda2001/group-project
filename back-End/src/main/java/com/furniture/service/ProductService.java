package com.furniture.service;

import com.furniture.dto.ProductDTO;
import com.furniture.entities.Product;
import com.furniture.repositories.ProductRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Data
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product addProduct(ProductDTO productDTO) {
        Product product = new Product();
        product.setName(productDTO.getName());
        product.setPrice(productDTO.getPrice());
        product.setCategory(productDTO.getCategory());
        product.setProductDescription(productDTO.getProductDescription());
        product.setImageName(productDTO.getImageName());
        product.setQuantity(productDTO.getQuantity());
        return productRepository.save(product);
    }
}
