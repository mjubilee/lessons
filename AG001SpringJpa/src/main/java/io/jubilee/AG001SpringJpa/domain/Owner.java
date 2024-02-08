package io.jubilee.AG001SpringJpa.domain;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Owner {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ownerId;
    private String firstname, lastname;
    
    @OneToMany(cascade=CascadeType.ALL, mappedBy="owner")
    private List<Vehicle> vehicles;
        
    public Owner() {
    }
    
    public Owner(String firstname, String lastname) {
        super();
        this.firstname = firstname;
        this.lastname = lastname;
    }
    
    public Long getOwnerId() {
        return ownerId;
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

	public List<Vehicle> getVehicles() {
		return vehicles;
	}

	public void setVehicles(List<Vehicle> vehicles) {
		this.vehicles = vehicles;
	}

    
    
}
