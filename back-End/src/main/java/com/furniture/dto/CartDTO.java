package com.furniture.dto;

import com.furniture.auth.entities.User;
import com.furniture.entities.Product;
import lombok.Data;

@Data
public class CartDTO {

    private Integer userId;

    private int productId;

    private int quantity;

}
