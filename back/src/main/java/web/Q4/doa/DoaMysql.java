package web.Q4.doa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import web.Q4.model.Bicycle_travel_time;
import web.Q4.model.Class_occupancy;
import web.Q4.model.Student_average_age;
import web.Q4.model.User;
import web.Q4.model.Air_quality;
import web.Q4.model.Student_study_performance;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Repository
public class DoaMysql {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public DoaMysql(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<User> getAllUsers() {
        String sql = "SELECT * FROM user";
        List<User> users = jdbcTemplate.query(sql, (resultSet, i) -> {
            int user_id = resultSet.getInt("user_id");
            String f_name = resultSet.getString("f_name");
            String l_name = resultSet.getString("l_name");
            String email = resultSet.getString("email");
            String password = resultSet.getString("password");
            String user_role = resultSet.getString("user_role");
            return new User(user_id, f_name, l_name, email, password, user_role);
        });
        return users;
    }

    public List<Bicycle_travel_time> getAllBikeTime() {
        final String sql = "SELECT * FROM bicycle_travel_time";
        List<Bicycle_travel_time> BikeTime = jdbcTemplate.query(sql, (resultSet, i) -> {
            int row_id = resultSet.getInt("row_id");
            String age_group = resultSet.getString("age_group");
            String gender = resultSet.getString("gender");
            int year = resultSet.getInt("year");
            BigDecimal value = resultSet.getBigDecimal("value");
            return new Bicycle_travel_time(row_id, age_group,  gender, year, value);
        });
        return BikeTime;
    }

    public List<Class_occupancy> getAllClassOccupencie() {
        final String sql = "SELECT * FROM class_occupancy";
        List<Class_occupancy> classOccupancy = jdbcTemplate.query(sql, (resultSet, i) -> {
            int row_id = resultSet.getInt("row_id");
            String room_number = resultSet.getString("room_number");
            int number_of_students = resultSet.getInt("number_of_students");
            String room_type = resultSet.getString("room_type");
            String time = resultSet.getString("time");
            String date = resultSet.getString("date");
            return new Class_occupancy(row_id, room_number, number_of_students, room_type, time, date);
        });
        return classOccupancy;
    }

    
    public List<Student_average_age> getAllStudent_Average() {
        final String sql = "SELECT * FROM student_average_age";
        List<Student_average_age> Student_Average = jdbcTemplate.query(sql, (resultSet, i) -> {
            int row_id = resultSet.getInt("row_id");
            int year = resultSet.getInt("year");
            BigDecimal average_age = resultSet.getBigDecimal("average_age");
            return new Student_average_age(row_id, year, average_age);
        });
        return Student_Average;
    }

    public List<Air_quality> getAllAir_Quality() {
        final String sql = "SELECT * FROM air_quality";
        List<Air_quality> Student_Average = jdbcTemplate.query(sql, (resultSet, i) -> {
            int reading_id = resultSet.getInt("reading_id");
            BigDecimal pm2_5 = resultSet.getBigDecimal("pm2_5");
            BigDecimal pm10 = resultSet.getBigDecimal("pm10");
            BigDecimal temperature = resultSet.getBigDecimal("temperature");
            BigDecimal humidity = resultSet.getBigDecimal("humidity");
            String date = resultSet.getString("date");
            String time = resultSet.getString("time");
            String building = resultSet.getString("building");
            return new Air_quality(reading_id, pm2_5, pm10, temperature, humidity, date, time, building);
        });
        return Student_Average;
    }

    public List<Student_study_performance> getAllStudent_Study() {
        final String sql = "SELECT * FROM student_study_performance";
        List<Student_study_performance> Student_Study = jdbcTemplate.query(sql, (resultSet, i) -> {
            int row_id= resultSet.getInt("row_id");
            String gender = resultSet.getString("gender");
            String race_ethnicity= resultSet.getString("race_ethnicity");
            String parental_level_of_education= resultSet.getString("parental_level_of_education");
            String lunch = resultSet.getString("lunch");
            String test_preparation_course = resultSet.getString("test_preparation_course");
            int math_score = resultSet.getInt("math_score");
            int reading_score = resultSet.getInt("reading_score");
            int writing_score = resultSet.getInt("writing_score");
            return new Student_study_performance(row_id, gender, race_ethnicity, parental_level_of_education, lunch, test_preparation_course, math_score, reading_score, writing_score);
        });
        return Student_Study;
    }


    public Optional<User> getUser(String f_name) {
        final String sql = "SELECT * FROM user WHERE f_name = ?";
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
        return Optional.ofNullable(user);
    }


    public void saveUser(User user) {
        String sql = "INSERT INTO user (f_name, l_name, email, password, user_role) VALUES (?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, user.getF_name(), user.getL_name(), user.getEmail(), user.getPassword(), user.getUser_role());
    }

    public Optional<Bicycle_travel_time> getBikeTime(int row_id) {
        final String sql = "SELECT * FROM bicycle_travel_time WHERE row_id = ?";
        Bicycle_travel_time bicycleTravelTime = jdbcTemplate.queryForObject(
                sql,
                new Object[]{row_id},
                (resultSet, i) -> {
                    int row__id = resultSet.getInt("row_id");
                    String age_group = resultSet.getString("age_group");
                    String gender = resultSet.getString(("gender"));
                    int year = resultSet.getInt("year");
                    BigDecimal value = resultSet.getBigDecimal("value");
                    return new Bicycle_travel_time(row__id, age_group, gender, year, value);
                });
        return Optional.ofNullable(bicycleTravelTime);
    }

    

    public Optional<Class_occupancy> getClassOccupancy(int row_id) {
        final String sql = "SELECT * FROM Class_occupancy WHERE row_id = ?";
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
        return Optional.ofNullable(classOccupancy);
    }

    public Optional<Student_average_age> getStudentAge(int row_id) {
        final String sql = "SELECT * FROM student_average_age WHERE row_id = ?";
        Student_average_age studentAverageAge = jdbcTemplate.queryForObject(
                sql,
                new Object[]{row_id},
                (resultSet, i) -> {
                    int row__id = resultSet.getInt("row_id");
                    int year = resultSet.getInt("year");
                    BigDecimal average_age = resultSet.getBigDecimal("average_age");
                    return new Student_average_age(row__id, year, average_age);
                });
        return Optional.ofNullable(studentAverageAge);
    }
}
