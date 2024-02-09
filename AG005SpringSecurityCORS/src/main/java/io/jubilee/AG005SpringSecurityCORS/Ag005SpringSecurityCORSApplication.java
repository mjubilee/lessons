package io.jubilee.AG005SpringSecurityCORS;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.jubilee.AG005SpringSecurityCORS.domain.AppUser;
import io.jubilee.AG005SpringSecurityCORS.domain.AppUserRepository;
import io.jubilee.AG005SpringSecurityCORS.domain.Driver;
import io.jubilee.AG005SpringSecurityCORS.domain.DriverRepository;
import io.jubilee.AG005SpringSecurityCORS.domain.Owner;
import io.jubilee.AG005SpringSecurityCORS.domain.OwnerRepository;
import io.jubilee.AG005SpringSecurityCORS.domain.Vehicle;
import io.jubilee.AG005SpringSecurityCORS.domain.VehicleRepository;

@SpringBootApplication
public class Ag005SpringSecurityCORSApplication implements CommandLineRunner {
	

	
	private static final Logger logger = LoggerFactory.getLogger(Ag005SpringSecurityCORSApplication.class);
	private final VehicleRepository repository;
	private final OwnerRepository ownerRepository;
	private final DriverRepository driverRepository;
	private final AppUserRepository appUserrepository;
	
	public Ag005SpringSecurityCORSApplication(VehicleRepository repo
			, OwnerRepository ownerRepo
			, DriverRepository driverRepo
			, AppUserRepository apRepo) {
		this.repository = repo;
		this.ownerRepository = ownerRepo;
		this.driverRepository = driverRepo;
		this.appUserrepository = apRepo;
	}

	public static void main(String[] args) {
		SpringApplication.run(Ag005SpringSecurityCORSApplication.class, args);
		logger.info("Application started");
	}
	
//		The CommandLineRunner interface allows us to execute additional code 
//		before the application has fully started.
	
    @Override
    public void run(String... args) throws Exception {
    	Owner owner1 = new Owner("John" , "Johnson");
    	Owner owner2 = new Owner("Mary" , "Robinson");
    	ownerRepository.saveAll(Arrays.asList(owner1, owner2));

    	Driver driver1 = new Driver("Agus" , "Budi");
    	Driver driver2 = new Driver("Maman" , "Kampung");
    	Driver driver3 = new Driver("Udin" , "Salahudin");
    	
    	driverRepository.saveAll(Arrays.asList(driver1, driver2, driver3));

    	Vehicle vehicle1 = new Vehicle("Ford", "Mustang", "Red", "ADF-1121", 2023, 59000, owner1);
    	Vehicle vehicle2 = new Vehicle("Nissan", "Leaf", "White", "SSJ-3002", 2020, 29000, owner2);
    	Vehicle vehicle3 = new Vehicle("Toyota", "Prius", "Silver", "KKO-0212", 2022, 39000, owner1);
    	
        repository.save(vehicle1);
        repository.save(vehicle2);
        repository.save(vehicle3);

        Set<Vehicle> vehicleD1 = new HashSet<Vehicle>();
        vehicleD1.add(vehicle1);
        vehicleD1.add(vehicle3);

    	Set<Vehicle> vehicleD2 = new HashSet<Vehicle>();
    	vehicleD2.add(vehicle2);
    	vehicleD2.add(vehicle1);

    	Set<Vehicle> vehicleD3 = new HashSet<Vehicle>();
    	vehicleD3.add(vehicle3);
    	vehicleD3.add(vehicle2);
    	
        driver1.setVehicles(vehicleD1);
        driver2.setVehicles(vehicleD2);
        driver3.setVehicles(vehicleD3);
    	driverRepository.saveAll(Arrays.asList(driver1, driver2, driver3));

        // Fetch all vehicles and log to console
        for (Vehicle vehicle : repository.findAll()) {
            logger.info("brand: {}, model: {}", vehicle.getBrand(), vehicle.getModel());
        }
        
        // Username: user, password: user
        appUserrepository.save(new AppUser("user", "$2a$10$NVM0n8ElaRgg7zWO1CxUdei7vWoPg91Lz2aYavh9.f9q0e4bRadue","USER"));
        // Username: admin, password: admin
        appUserrepository.save(new AppUser("admin","$2a$10$8cjz47bjbR4Mn8GMg9IZx.vyjhLXR/SKKMSZ9.mP9vpMu0ssKi8GW", "ADMIN"));
    }

}


