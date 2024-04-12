package web.Q4.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping; // Import added here
import web.Q4.doa.DoaMysql;
import web.Q4.model.User;
import java.util.List;

@Controller
@RequestMapping("/users")
public class UserController {

    private final DoaMysql doaMysql;

    @Autowired
    public UserController(DoaMysql doaMysql) {
        this.doaMysql = doaMysql;
    }

    @GetMapping("/all")
    public String getAllUsers(Model model) {
        // Call your DAO method to retrieve all users
        List<User> users = doaMysql.getAllUsers();
        // Add the list of users to the model
        model.addAttribute("users", users);
        // Return the name of the HTML template without the extension
        return "user";
    }
}
