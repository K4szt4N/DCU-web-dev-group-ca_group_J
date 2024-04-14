package web.Q4.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.Map;
import java.util.Optional;


import web.Q4.doa.DoaMysql;
import web.Q4.model.User;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final DoaMysql doaMysql;

    @Autowired
    public AuthController(DoaMysql doaMysql) {
        this.doaMysql = doaMysql;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody Map<String, String> userData) {
        // Extract user data from the map
        int user_id = 1;
        String fName = userData.get("f_name");
        String lName = userData.get("l_name");
        String email = userData.get("email");
        String password = userData.get("password");
        String userRole = userData.get("user_role");

        // Create a new User object
        User user = new User(user_id, fName, lName, email, password, userRole);

        // Perform user registration logic here, such as saving the user to the database
        // For demonstration purposes, let's just return a success message
        doaMysql.saveUser(user);
        return new ResponseEntity<>("User registered successfully", HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestParam String f_name, @RequestParam String password) {
        // Retrieve the user from the database based on the provided email
        Optional<User> optionalUser = doaMysql.getUser(f_name);

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            // Check if the provided password matches the user's password
            if (user.getPassword().equals(password)) {
                // Passwords match, user logged in successfully
                return new ResponseEntity<>("User logged in successfully", HttpStatus.OK);
            } else {
                // Passwords don't match, return unauthorized status
                return new ResponseEntity<>("Incorrect password", HttpStatus.UNAUTHORIZED);
            }
        } else {
            // User with the provided email not found, return unauthorized status
            return new ResponseEntity<>("User not found", HttpStatus.UNAUTHORIZED);
        }
    }
}