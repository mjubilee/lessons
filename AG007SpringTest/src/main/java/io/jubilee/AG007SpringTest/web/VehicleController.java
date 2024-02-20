package io.jubilee.AG007SpringTest.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import io.jubilee.AG007SpringTest.domain.Vehicle;
import io.jubilee.AG007SpringTest.domain.VehicleRepository;

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
