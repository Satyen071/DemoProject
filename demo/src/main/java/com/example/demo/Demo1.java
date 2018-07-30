package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Demo1 {

	public static void main(String[] args) {
		System.out.println("hello spring boot");
		SpringApplication.run(Demo1.class, args);
	}

}
