package web.Q4.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import web.Q4.doa.DoaMysql;
import web.Q4.model.Bicycle_travel_time;
import web.Q4.model.Class_occupancy;
import web.Q4.model.Student_average_age;
import web.Q4.model.User;
import web.Q4.model.Air_quality;
import web.Q4.model.Student_study_performance;
import java.io.IOException;
import java.util.Optional;
import java.util.List;



// This class serves as the API controller for handling HTTP requests related to requiring rooms and hotels
// add @RequestMapping() annotation to map HTTP requests.
@RequestMapping("/require")
@RestController
// add @RestController annotation to define the controller of this service, which would handle the HTTP requests.
public class Controller {
    // Doa object, for data operation.
    private final DoaMysql doaMysql;

    // constructor
    // add @Autowired annotation to inject dependencies, which is the Doa object bean here.
    @Autowired
    public Controller(DoaMysql doaMysql) {
        this.doaMysql = doaMysql;
    }

    // define a method to handle HTTP Get requests of room information, which is directly use the method of Doa class.
    // add @PostMapping annotation to mapping the requests with the endpoint of '/room/{room_id}'.
    @GetMapping( path = "/user/{f_name}")
    public Optional<User> getUser(@PathVariable("f_name") String f_name) throws IOException {
        System.out.println("receive the get information");
        return doaMysql.getUser(f_name);
    }

    @GetMapping(path = "/BikeTime/all")
    public List<Bicycle_travel_time> getAllBikeTime() throws IOException {
        System.out.println("Receive the get all bike time information");
        return doaMysql.getAllBikeTime();
    }

    @GetMapping( path = "/BikeTime/{row_id}")
    public Optional<Bicycle_travel_time> getBikeTime(@PathVariable("row_id") int row_id) throws IOException {
        System.out.println("receive the get information");
        return doaMysql.getBikeTime(row_id);
    }

    @GetMapping(path = "/classOccupancy/all")
    public List<Class_occupancy> getAllClassOccupencie() throws IOException {
        System.out.println("Receive the get all class occupancy information");
        return doaMysql.getAllClassOccupencie();
    }

    @GetMapping( path = "/classOccupancy/{row_id}")
    public Optional<Class_occupancy> getClassOccupancy(@PathVariable("row_id") int row_id) throws IOException {
        System.out.println("receive the get information");
        return doaMysql.getClassOccupancy(row_id);
    }

    @GetMapping(path = "/StudentAge/all")
    public List<Student_average_age> getAllStudent_Average() throws IOException {
        System.out.println("Receive the get all Studen Average information");
        return doaMysql.getAllStudent_Average();
    }

    @GetMapping( path = "/StudentAge/{row_id}")
    public Optional<Student_average_age> getStudentAge(@PathVariable("row_id") int row_id) throws IOException {
        System.out.println("receive the get information");
        return doaMysql.getStudentAge(row_id);
    }

    @GetMapping(path = "/AirQuality/all")
    public List<Air_quality> getAllAir_Quality() throws IOException {
        System.out.println("Receive the get all Air Quality information");
        return doaMysql.getAllAir_Quality();
    }

    @GetMapping(path = "/StudentStudy/all")
    public List<Student_study_performance> getAllStudent_Study() throws IOException {
        System.out.println("Receive the get all Student Study information");
        return doaMysql.getAllStudent_Study();
    }
}
