package com.arabbit;

public class EventNative {
    private String type;
    private String idProduct;
    static public final String typeView = "view";
    static public final String typeAddToCart = "add";
    static public final String typeDetected = "detect";
    EventNative(String event, String idProduct){
        this.type = type;
        this.idProduct = idProduct;
    }
}
