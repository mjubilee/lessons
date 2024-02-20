package io.jubilee.AG007SpringTest;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import io.jubilee.AG007SpringTest.web.VehicleController;

@SpringBootTest
class Ag007SpringTestApplicationTests {

	@Autowired
    private VehicleController controller;
	
    @Test
    @DisplayName("First example test case")
    void contextLoads() {
        assertThat(controller).isNotNull();
    }

}
