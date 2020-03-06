package com.example.demo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Fly {
    @Id
    @GeneratedValue
    long id;
    String origin;
    String destination;
    @ManyToOne
    Airplane airPlane;

    public Airplane getAirPlane() {
        return airPlane;
    }

    public void setAirPlane(Airplane airPlane) {
        this.airPlane = airPlane;
    }

    public Fly() {
    }

    public Fly(long id, String origin, String destination, Airplane airPlane) {
        this.id = id;
        this.origin = origin;
        this.destination = destination;
        this.airPlane = airPlane;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }


}
