package com.example.demo.repositories;

import com.example.demo.models.Fly;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FlyRepository extends JpaRepository<Fly,Long> {
}
