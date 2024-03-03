package com.furniture.controllers;

import com.furniture.dto.CartDTO;
import com.furniture.dto.ProductDTO;
import com.furniture.entities.CartItem;
import com.furniture.entities.Product;
import com.furniture.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Cart")
@CrossOrigin("http://localhost:3000")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/add")
    public ResponseEntity<CartItem> addCartItem(@RequestBody CartDTO cartDTO){
        CartItem cartItem = cartService.addCartItem(cartDTO);
        return new ResponseEntity<>(cartItem, HttpStatus.CREATED);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<CartItem>> findCartItemsByUserId(@PathVariable Long userId){
        List<CartItem> cartItems = cartService.findCartItemsByUserId(userId);
        return new ResponseEntity<>(cartItems, HttpStatus.OK);}





}
