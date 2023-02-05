package com.amealio;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserdataController {

    @Autowired
    UserdataRepo userdatarepo;

    @GetMapping("/alluserdata")
    public ResponseEntity<List<Userdata>> getAllUserdata(){

        List<Userdata> accounts = userdatarepo.findAll();
        if(accounts.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(accounts, HttpStatus.OK);
    }

}
