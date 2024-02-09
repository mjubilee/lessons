package io.jubilee.AG004SpringSecurityJWT.web;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import io.jubilee.AG004SpringSecurityJWT.domain.AccountCredentials;
import io.jubilee.AG004SpringSecurityJWT.service.JwtService;
import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
public class LoginController {
	private final JwtService jwtService;
	private final AuthenticationManager authManager;
	
	public LoginController(JwtService jwtService, AuthenticationManager authManager) {
		this.jwtService = jwtService;
		this.authManager = authManager;
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> getToken(@RequestBody AccountCredentials cred) {
		UsernamePasswordAuthenticationToken creds = new UsernamePasswordAuthenticationToken(cred.username()
				, cred.password());
		Authentication auth = authManager.authenticate(creds);
		
		// Generate token
		String jwts = jwtService.getToken(auth.getName());
		// Build response with the generated token
		
		return ResponseEntity
				.ok()
				.header(HttpHeaders.AUTHORIZATION, "Bearer" + jwts)
				.header(HttpHeaders.ACCESS_CONTROL_EXPOSE_HEADERS,"Authorization")
				.build();
	}
}
