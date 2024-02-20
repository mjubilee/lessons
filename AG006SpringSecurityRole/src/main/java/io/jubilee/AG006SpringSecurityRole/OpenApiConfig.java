package io.jubilee.AG006SpringSecurityRole;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;

@Configuration
public class OpenApiConfig {

	@Bean
	public OpenAPI vehicleDbOpenAPI() {
		return new OpenAPI()
				.info(new Info()
						.title("Vehicle REST API")
						.description("My vehicle stock")
						.version("1.0")						
						);
	}
}
