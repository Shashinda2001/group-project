package com.furniture.service;

import com.furniture.dto.CartDTO;
import com.furniture.dto.ProductDTO;
import com.furniture.entities.CartItem;
import com.furniture.entities.Product;
import com.furniture.repositories.CartItemRepository;
import jakarta.transaction.Transactional;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Data
public class CartService {

    @Autowired
    private CartItemRepository cartItemRepository;

    public CartItem addCartItem(CartDTO cartDTO){
        CartItem cartItem = new CartItem();
        cartItem.setUserId(cartDTO.getUserId());
        cartItem.setProductId(cartDTO.getProductId());
        cartItem.setQuantity(cartDTO.getQuantity());
        return cartItemRepository.save(cartItem);
    }


    public List<CartItem> findCartItemsByUserId(Long userId) {
        return cartItemRepository.findByUserId(userId);
    }
}
