package com.example.connect_api.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String codeProduct;
    private String name;
    private int quantity;
    private int cost;
    private String date;
    private String describer;

    @ManyToOne
    @JoinColumn(name = "typeID", referencedColumnName = "id")
    private TypeProduct typeProduct;

    public Product() {
    }

    public Product(int id, String codeProduct, String name, int quantity, int cost, String date, String describer, TypeProduct typeProduct) {
        this.id = id;
        this.codeProduct = codeProduct;
        this.name = name;
        this.quantity = quantity;
        this.cost = cost;
        this.date = date;
        this.describer = describer;
        this.typeProduct = typeProduct;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCodeProduct() {
        return codeProduct;
    }

    public void setCodeProduct(String codeProduct) {
        this.codeProduct = codeProduct;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDescriber() {
        return describer;
    }

    public void setDescriber(String describer) {
        this.describer = describer;
    }

    public TypeProduct getTypeProduct() {
        return typeProduct;
    }

    public void setTypeProduct(TypeProduct typeProduct) {
        this.typeProduct = typeProduct;
    }
}
