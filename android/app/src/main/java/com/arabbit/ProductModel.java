package com.arabbit;

import android.graphics.drawable.Drawable;

public class ProductModel {
    String id;
    String name;
    String shop;
    String description;
    Drawable iconShop;
    Drawable image;
    int sold;
    long price;
    int numberStar;

    public ProductModel(String id, String name, String shop, String description, Drawable icon, Drawable image, int sold, long price, int numberStar) {
        this.id = id;
        this.name = name;
        this.shop = shop;
        this.description = description;
        this.iconShop = icon;
        this.image = image;
        this.sold = sold;
        this.price = price;
        this.numberStar = numberStar;
    }
}
