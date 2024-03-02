package com.furniture.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "product")
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int productId;

    private String name;

    private  int price;

    private int quantity;

    private  String imageName;

    private String productDescription;

    private String category;


}