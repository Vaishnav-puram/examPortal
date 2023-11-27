//package com.exam.examportal.service;
//
//import org.apache.catalina.filters.CorsFilter;
//import org.springframework.boot.web.servlet.FilterRegistrationBean;
//import org.springframework.context.annotation.Bean;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//
//
//public class SecuirtyConfig {
//    @Bean
//    public FilterRegistrationBean coresFilter(){
//        UrlBasedCorsConfigurationSource source=new UrlBasedCorsConfigurationSource();
//        CorsConfiguration corsConfiguration=new CorsConfiguration();
//        corsConfiguration.setAllowCredentials(true);
//        corsConfiguration.addAllowedOriginPattern("*");
//        corsConfiguration.addAllowedHeader("Authorization");
//        corsConfiguration.addAllowedHeader("Content-Type");
//        corsConfiguration.addAllowedHeader("Accept");
//        corsConfiguration.addAllowedMethod("POST");
//        corsConfiguration.addAllowedMethod("GET");
//        corsConfiguration.addAllowedMethod("PUT");
//        corsConfiguration.addAllowedMethod("DELETE");
//        corsConfiguration.addAllowedMethod("OPTIONS");
//        corsConfiguration.setMaxAge(3600L);
//        source.registerCorsConfiguration("/**",corsConfiguration);
//        CorsFilter corsFilter = new CorsFilter(source);
//        FilterRegistrationBean bean=new FilterRegistrationBean();
//        return bean;
//    }
//}
