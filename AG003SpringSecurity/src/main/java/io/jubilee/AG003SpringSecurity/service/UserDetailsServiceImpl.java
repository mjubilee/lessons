package io.jubilee.AG003SpringSecurity.service;

import java.util.Optional;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.User.UserBuilder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import io.jubilee.AG003SpringSecurity.domain.AppUser;
import io.jubilee.AG003SpringSecurity.domain.AppUserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	private final AppUserRepository repo;
	
	public UserDetailsServiceImpl(AppUserRepository repository) {
		this.repo = repository;
	}
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<AppUser> user = repo.findByUsername(username);
		UserBuilder builder = null;
		
		if ( user.isPresent() ) {
			AppUser currentUser = user.get();
			builder = User.withUsername(username);
			builder.password(currentUser.getPassword());
			builder.roles(currentUser.getRole());
		} else {
			throw new UsernameNotFoundException("User not found.");
		}
		
		return builder.build();
	}

}
