package web.Q4.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ContactController {

    @GetMapping("/contact")
    public String showContact() {
        return "contact"; // Return the name of your HTML template file (without the extension)
    }
}
