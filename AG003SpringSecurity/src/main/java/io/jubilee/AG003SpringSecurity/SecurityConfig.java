//package io.jubilee.AG003SpringSecurity;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.provisioning.InMemoryUserDetailsManager;
//
//import io.jubilee.AG003SpringSecurity.service.UserDetailsServiceImpl;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig {
//
//	@Bean
//	public InMemoryUserDetailsManager userDetailsService() {
//		UserDetails user = User.builder()
//				.username("user")
//				.password(passwordEncoder().encode("password"))
//				.roles("USER")
//				.build();
//		return new InMemoryUserDetailsManager(user);
//	}
//	
//	
////	private final UserDetailsServiceImpl userDetailService;
////	
////	public SecurityConfig( UserDetailsServiceImpl userDetailService) {
////		this.userDetailService = userDetailService;
////	}
////	
////	public void configureGlobal ( AuthenticationManagerBuilder auth) throws Exception {
////		auth.userDetailsService(userDetailService)
////		.passwordEncoder(new BCryptPasswordEncoder());
////		
////	}
//	
//	@Bean
//	public PasswordEncoder passwordEncoder() {
//		return new BCryptPasswordEncoder();
//	}
//}
