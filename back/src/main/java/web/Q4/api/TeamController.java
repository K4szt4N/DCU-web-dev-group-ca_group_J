package web.Q4.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TeamController {

    @GetMapping("/team")
    public String showTeam() {
        return "team"; // Return the name of your HTML template file (without the extension)
    }
}
