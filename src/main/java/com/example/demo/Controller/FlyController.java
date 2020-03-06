package com.example.demo.Controller;

import com.example.demo.models.Fly;
import com.example.demo.repositories.FlyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/flights")

public class FlyController {


    @Autowired
    private FlyRepository flyRepository;


    @GetMapping
    public  List<Fly> getFly(){
        return flyRepository.findAll();
    }

      @PostMapping

      public void addFly(@RequestBody Fly fly){
        flyRepository.save(fly);
      }


    @DeleteMapping("{id}")
    public void deleteFly(@PathVariable Long id){
      flyRepository.deleteById(id);
    }


}
