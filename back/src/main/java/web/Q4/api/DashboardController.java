package web.Q4.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DashboardController {

    @GetMapping("/dashboard")
    public String showDashboard() {
        return "dashboard"; // Return the name of your HTML template file (without the extension)
    }
}
