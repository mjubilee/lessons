package io.jubilee.AG003SpringSecurity.domain;

import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;

@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Driver {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long driverId;
    private String firstname, lastname;
        
    @JsonIgnore
    @ManyToMany(cascade=CascadeType.PERSIST)
    @JoinTable(name="vehicle_driver",joinColumns = 
            {
            @JoinColumn(name="driverId") },
            inverseJoinColumns = 
            {
            @JoinColumn(name="vehicleId") }
    )
    private Set<Vehicle> vehicles = new HashSet<Vehicle>();
    
	public Driver() {
		super();
	}	
	
	public Driver(String firstname, String lastname) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
	}

    public Long getDriverid() {
        return driverId;
    }
    
	public String getFirstname() {
		return firstname;
	}
	
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	
	public String getLastname() {
		return lastname;
	}
	
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public Set<Vehicle> getVehicles() {
		return vehicles;
	}

	public void setVehicles(Set<Vehicle> vehicles) {
		this.vehicles = vehicles;
	}
    
    
}
