package io.jubilee.AG004SpringSecurityJWT.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import io.jubilee.AG004SpringSecurityJWT.domain.Vehicle;
import io.jubilee.AG004SpringSecurityJWT.domain.VehicleRepository;

@RestController
public class VehicleController {

	private final VehicleRepository repo;
	
	public VehicleController( VehicleRepository repo) {
		this.repo = repo;
	}
	
	@GetMapping("/vehicles")
	public Iterable<Vehicle> getVehicles() {
		return repo.findAll();
	}
}
