package com.amealio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/api")
public class CuisineController {

    ;
    CuisineRepo cuisineRepo;
    public CuisineController(@Autowired CuisineRepo cuisineRepo){}

    @GetMapping("/cuisine")
    public ResponseEntity<List<Cuisine>> getAllCuisines() {

        List<Cuisine> cuisines = new ArrayList<>(cuisineRepo.findAll());
        if(cuisines.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(cuisines, HttpStatus.OK);
    }

}
