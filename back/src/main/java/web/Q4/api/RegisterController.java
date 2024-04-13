package web.Q4.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RegisterController {

    @GetMapping("/register")
    public String showRegister() {
        return "register"; // Return the name of your HTML template file (without the extension)
    }
}
