package io.jubilee.AG005SpringSecurityCORS.domain;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface VehicleRepository extends CrudRepository<Vehicle,Long> {
	
	@Query("select c from Vehicle c where c.brand = ?1")
	List<Vehicle> findByBrand(String brand);

	@Query("select c from Vehicle c where c.brand like %?1")
    List<Vehicle> findByBrandEndsWith(String brand);
	
	List<Vehicle> findByColor(String color);

    List<Vehicle> findByModelYear(int modelYear);
    
    List<Vehicle> findByBrandAndModel(String brand, String model);

    List<Vehicle> findByBrandOrColor(String brand, String color);
    
    List<Vehicle> findByBrandOrderByModelYearAsc(String brand);
    
}
