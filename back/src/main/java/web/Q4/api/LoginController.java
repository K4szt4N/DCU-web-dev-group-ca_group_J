package web.Q4.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {

    @GetMapping("/login")
    public String showLogin() {
        return "login"; // Return the name of your HTML template file (without the extension)
    }
}
