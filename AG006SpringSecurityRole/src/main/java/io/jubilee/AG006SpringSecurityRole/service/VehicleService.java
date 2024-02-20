package io.jubilee.AG006SpringSecurityRole.service;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import io.jubilee.AG006SpringSecurityRole.domain.Vehicle;

@Service
public class VehicleService {

    @PreAuthorize("hasRole('USER')")
    public void updateCar(Vehicle vehicle) {
        // This method can be invoked by user with USER role.
    }
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteOwner(Vehicle vehicle) {
        // This method can be invoked by user with ADMIN role.
    }
}
