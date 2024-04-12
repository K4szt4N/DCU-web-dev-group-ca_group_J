package web.Q4.model;

import com.fasterxml.jackson.annotation.JsonProperty;

//User class, for handling user information.
public class Class_occupancy {
    //Define all the user characters.
    // username
    private final int user_id;
    private final String room_number;
    private final int number_of_students;
    private final String room_type;
    private final String time;
    // role
    private final String date;

    public int getUser_id() {
        return user_id;
    }

    public String getRoom_number() {
        return room_number;
    }

    public int getNumber_of_students() {
        return number_of_students;
    }

    public String getRoom_type() {
        return room_type;
    }

    public String getTime() {
        return time;
    }

    public String getDate() {
        return date;
    }

    // constructor
    // for each constructor parameter, add a "@JsonProperty()" annotation to map Java object properties to JSON keys.
    // after this annotation, this class can used directly to receive a Json massages or send one.

    public Class_occupancy(@JsonProperty("user_id") int user_id,
                           @JsonProperty("String room_number") String room_number,
                           @JsonProperty("number_of_students") int number_of_students,
                           @JsonProperty("room_type") String room_type,
                           @JsonProperty("time") String time,
                           @JsonProperty("date") String date) {
        this.user_id = user_id;
        this.room_number = room_number;
        this.number_of_students = number_of_students;
        this.room_type = room_type;
        this.time = time;
        this.date = date;
    }



}