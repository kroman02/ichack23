package com.amealio;

import javax.persistence.*;

@Entity
@Table(name="Userdata")
public class Userdata {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(name="calories_ideal")
    private int caloriesIdeal;
    @Column(name="calories_avg")
    private int caloriesAvg;
    @Column(name="activity_score")
    private int activityScore;
    @Column(name="name")
    private String name;

    @Column(name="surname")
    private String surname;

    @Column(name="age")
    private int age;

    @Column(name="height")
    private int height;

    @Column(name="weight")
    private int weight;

    @Column(name="email")
    private int email;

    @Column(name="password")
    private int password;

    public int getCaloriesIdeal() {
        return caloriesIdeal;
    }

    public void setCaloriesIdeal(int caloriesIdeal) {
        this.caloriesIdeal = caloriesIdeal;
    }

    public int getCaloriesAvg() {
        return caloriesAvg;
    }


    public void setCaloriesAvg(int caloriesAvg) {
        this.caloriesAvg = caloriesAvg;
    }

    public int getActivityScore() {
        return activityScore;
    }

    public void setActivityScore(int activityScore) {
        this.activityScore = activityScore;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getHeight() {
        return height;
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public int getEmail() {
        return email;
    }

    public void setEmail(int email) {
        this.email = email;
    }

    public int getPassword() {
        return password;
    }

    public void setPassword(int password) {
        this.password = password;
    }

    public void setContent(Userdata userdata){
        this.id = userdata.getId();
        this.name = userdata.getName();
        this.surname = userdata.getSurname();
        this.age = userdata.getAge();
        this.email = userdata.getEmail();
        this.height = userdata.getHeight();
        this.weight = userdata.getWeight();
        this.password = userdata.getPassword();
        this.caloriesIdeal = userdata.getCaloriesIdeal();
        this.caloriesAvg = userdata.getCaloriesAvg();
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
