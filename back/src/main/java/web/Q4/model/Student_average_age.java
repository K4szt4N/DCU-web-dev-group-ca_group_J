package web.Q4.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.math.BigDecimal;

//User class, for handling user information.
public class Student_average_age {
    //Define all the user characters.
    // username
    private final int row_id;
    private final int year;
    private final BigDecimal average_age;


    // constructor
    // for each constructor parameter, add a "@JsonProperty()" annotation to map Java object properties to JSON keys.
    // after this annotation, this class can used directly to receive a Json massages or send one.
    public Student_average_age(@JsonProperty("row_id") int row_id,
                               @JsonProperty("year") int year,
                               @JsonProperty("average_age") BigDecimal average_age) {
        this.row_id = row_id;
        this.year = year;
        this.average_age = average_age;
    }

    public int getRow_id() {
        return row_id;
    }

    public int getYear() {
        return year;
    }

    public BigDecimal getAverage_age() {
        return average_age;
    }
}