package io.jubilee.AG007SpringTest.domain;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface OwnerRepository extends CrudRepository<Owner, Long> {
//	List<Owner> findByFirstname(@Param("firstname") String firstname);
    List<Owner> findByLastname(@Param("lastname") String lastname);
    
    Optional<Owner> findByFirstname(String firstName);

}