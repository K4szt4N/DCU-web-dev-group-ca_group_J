package web.Q4.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.math.BigDecimal;

//User class, for handling user information.
public class Bicycle_travel_time {
    //Define all the user characters.
    private final int row_id;
    private final String age_group;
    private final String gender;
    private final int year;
    private final BigDecimal value;


    // constructor
    // for each constructor parameter, add a "@JsonProperty()" annotation to map Java object properties to JSON keys.
    // after this annotation, this class can used directly to receive a Json massages or send one.
    public Bicycle_travel_time(@JsonProperty("rowId") int row_id,
                               @JsonProperty("ageGroup") String age_group,
                               @JsonProperty("gender") String gender,
                               @JsonProperty("year") int year,
                               @JsonProperty("value") BigDecimal value) {
        this.row_id = row_id;
        this.age_group = age_group;
        this.gender = gender;
        this.year = year;
        this.value = value;
    }

    // getting method

    public int getRow_id() {
        return row_id;
    }

    public String getAge_group() {
        return age_group;
    }

    public String getGender() {
        return gender;
    }

    public int getYear() {
        return year;
    }

    public BigDecimal getValue() {
        return value;
    }
}