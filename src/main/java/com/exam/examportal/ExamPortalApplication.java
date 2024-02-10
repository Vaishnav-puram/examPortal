package com.exam.examportal;

import org.modelmapper.Conditions;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ExamPortalApplication {
	@Bean // equivalent to <bean id ..../> in xml file
	public ModelMapper modelMapper() {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT)
				.setPropertyCondition(Conditions.isNotNull());// only non null properties will be transferred from src
		return modelMapper;
	}

		public static void main(String[] args) {
		System.out.println("Hello Vaishnav!!");

		SpringApplication.run(ExamPortalApplication.class, args);
	}

}
