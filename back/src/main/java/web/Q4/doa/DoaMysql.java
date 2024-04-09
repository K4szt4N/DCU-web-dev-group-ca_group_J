package web.Q4.doa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import web.Q4.model.Bicycle_travel_time;
import web.Q4.model.Class_occupancy;
import web.Q4.model.Student_average_age;
import web.Q4.model.User;

import java.math.BigDecimal;
import java.util.Optional;

// DOA (Data Access Object) class for Data operation.
// add @Repository annotation, to tell the spring boot this class need to generate a bean in the bean factory.
@Repository
public class DoaMysql {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public DoaMysql(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // define a getRoom() method for find and return a room information by its room_id
    // return type is Optional<Room>, in case the room wasn't in the roomDate.json. if so, return null.

    public Optional<User> getUser(String f_name) {

        // define the sql order to find the user information by their username
        final String sql = "select * from user where f_name = ?";

        // if user exit, assignment the user information to a User object.
        User user = jdbcTemplate.queryForObject(
                sql,
                new Object[]{f_name},
                (resultSet, i) -> {
                    int user_id = resultSet.getInt("user_id");
                    String f__name = resultSet.getString("f_name");
                    String l_name = resultSet.getString("l_name");
                    String email = resultSet.getString("email");
                    String password = resultSet.getString("password");
                    String user_role = resultSet.getString("user_role");

                    return new User(user_id, f__name, l_name, email, password, user_role);
                });

        // return the User object if it exit, or return null.
        return Optional.ofNullable(user);
    }

    public Optional<Bicycle_travel_time> getBikeTime(int row_id) {

        // define the sql order to find the user information by their username
        final String sql = "select * from bicycle_travel_time where row_id = ?";

        // if user exit, assignment the user information to a User object.
        Bicycle_travel_time bicycleTravelTime = jdbcTemplate.queryForObject(
                sql,
                new Object[]{row_id},
                (resultSet, i) -> {
                    int row__id = resultSet.getInt("row_id");
                    String age_group = resultSet.getString("age_group");
                    String gender = resultSet.getString(("gender"));
                    int year= resultSet.getInt("year");
                    BigDecimal value = resultSet.getBigDecimal("value");

                    return new Bicycle_travel_time(row__id, age_group, gender, year, value);
                });

        // return the User object if it exit, or return null.
        return Optional.ofNullable(bicycleTravelTime);
    }

    public Optional<Class_occupancy> getClassOccupancy(int row_id) {

        // define the sql order to find the user information by their username
        final String sql = "select * from Class_occupancy where row_id = ?";

        // if user exit, assignment the user information to a User object.
        Class_occupancy classOccupancy = jdbcTemplate.queryForObject(
                sql,
                new Object[]{row_id},
                (resultSet, i) -> {
                    int row__id = resultSet.getInt("row_id");
                    String room_number = resultSet.getString("room_number");
                    int number_of_students = resultSet.getInt("number_of_students");
                    String room_type = resultSet.getString("room_type");
                    String time = String.valueOf(resultSet.getTime("time"));
                    String date = String.valueOf(resultSet.getDate("date"));

                    return new Class_occupancy(row__id, room_number, number_of_students, room_type, time, date);
                });

        // return the User object if it exit, or return null.
        return Optional.ofNullable(classOccupancy);
    }

    public Optional<Student_average_age> getStudentAge(int row_id) {

        // define the sql order to find the user information by their username
        final String sql = "select * from student_average_age where row_id = ?";

        // if user exit, assignment the user information to a User object.
        Student_average_age studentAverageAge = jdbcTemplate.queryForObject(
                sql,
                new Object[]{row_id},
                (resultSet, i) -> {
                    int row__id = resultSet.getInt("row_id");
                    int year = resultSet.getInt("year");
                    BigDecimal average_age = resultSet.getBigDecimal("average_age");

                    return new Student_average_age(row__id, year, average_age);
                });

        // return the User object if it exit, or return null.
        return Optional.ofNullable(studentAverageAge);
    }

}
