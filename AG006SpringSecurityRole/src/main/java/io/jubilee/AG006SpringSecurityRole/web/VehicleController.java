package io.jubilee.AG006SpringSecurityRole.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import io.jubilee.AG006SpringSecurityRole.domain.Vehicle;
import io.jubilee.AG006SpringSecurityRole.domain.VehicleRepository;

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
