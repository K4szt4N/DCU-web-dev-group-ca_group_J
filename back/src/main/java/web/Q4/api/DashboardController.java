package web.Q4.api;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DashboardController {

    @GetMapping("/dashboard")
    public String showDashboard() {
        return "dashboard"; // Return the name of your HTML template file (without the extension)
    }

    @GetMapping("/airQuality")
    public String showAirQuality() {
        return "airQuality";
    }

    @GetMapping("/classOccupancy")
    public String showClassOccupancy() {
        return "classOccupancy";
    }

    @GetMapping("/bikeTime")
    public String showBikeTime() {
        return "bikeTime";
    }

    @GetMapping("/studentAge")
    public String showStudentAge() {
        return "studentAge";
    }

    @GetMapping("/performance")
    public String showPerformance() {
        return "performance";
    }
}
