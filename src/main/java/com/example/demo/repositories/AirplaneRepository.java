package com.example.demo.repositories;

import com.example.demo.models.Airplane;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AirplaneRepository extends JpaRepository<Airplane,Long> {
}
