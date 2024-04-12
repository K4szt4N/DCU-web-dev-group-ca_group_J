package web.Q4;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan
public class Q4Application extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(Q4Application.class, args);
	}

}