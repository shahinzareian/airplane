package com.example.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
@Entity
public class Airplane {
    @Id
    @GeneratedValue
    long id;
    String airPlaneName;
    double fuel;

    public String getAirPlaneName() {
        return airPlaneName;
    }

    public void setAirPlaneName(String airPlaneName) {
        this.airPlaneName = airPlaneName;
    }

    public Airplane() {
    }

    public Airplane(long id, String airPlaneName, double fuel) {
        this.id = id;
        this.airPlaneName = airPlaneName;
        this.fuel = fuel;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }



    public double getFuel() {
        return fuel;
    }

    public void setFuel(double fuel) {
        this.fuel = fuel;
    }
}
