package web.Q4.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.math.BigDecimal;

//User class, for handling user information.
public class Student_study_performance {
    //Define all the user characters.
    private final int row_id;
    private final String gender;
    private final String race_ethnicity;
    private final String parental_level_of_education;
    private final String lunch;
    private final String test_preparation_course;
    private final int math_score;
    private final int reading_score;
    private final int writing_score;

    // constructor
    // for each constructor parameter, add a "@JsonProperty()" annotation to map Java object properties to JSON keys.
    // after this annotation, this class can used directly to receive a Json massages or send one.
    public Student_study_performance(@JsonProperty("rowId") int row_id,
                                     @JsonProperty("gender") String gender,
                                     @JsonProperty("race_ethnicity") String race_ethnicity,
                                     @JsonProperty("parental_level_of_education") String parental_level_of_education,
                                     @JsonProperty("lunch") String lunch,
                                     @JsonProperty("test_preparation_course") String test_preparation_course,
                                     @JsonProperty("math_score") int math_score,
                                     @JsonProperty("reading_score") int reading_score,
                                     @JsonProperty("writing_score") int writing_score) {
        this.row_id = row_id;
        this.race_ethnicity = race_ethnicity;
        this.parental_level_of_education = parental_level_of_education;
        this.lunch = lunch;
        this.test_preparation_course = test_preparation_course;
        this.math_score = math_score;
        this.reading_score = reading_score;
        this.writing_score = writing_score;
        this.gender = gender;
    }

    // getting method


    public int getRow_id() {
        return row_id;
    }

    public String getGender() {
        return gender;
    }

    public String getRace_ethnicity() {
        return race_ethnicity;
    }

    public String getParental_level_of_education() {
        return parental_level_of_education;
    }

    public String getLunch() {
        return lunch;
    }

    public String getTest_preparation_course() {
        return test_preparation_course;
    }

    public int getMath_score() {
        return math_score;
    }

    public int getReading_score() {
        return reading_score;
    }

    public int getWriting_score() {
        return writing_score;
    }
}