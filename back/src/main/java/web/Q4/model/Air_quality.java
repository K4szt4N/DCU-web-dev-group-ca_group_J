package web.Q4.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.math.BigDecimal;

//User class, for handling user information.
public class Air_quality {
    //Define all the user characters.
    private final int reading_id;
    private final BigDecimal pm2_5;
    private final BigDecimal pm10;
    private final BigDecimal temperature;
    private final BigDecimal humidity;
    private final String date;
    private final String time;
    private final String building;

    // constructor
    // for each constructor parameter, add a "@JsonProperty()" annotation to map Java object properties to JSON keys.
    // after this annotation, this class can used directly to receive a Json massages or send one.
    public Air_quality(@JsonProperty("rowId") int reading_id,
                       @JsonProperty("pm2_5") BigDecimal pm2_5,
                       @JsonProperty("pm10") BigDecimal pm10,
                       @JsonProperty("temperature") BigDecimal temperature,
                       @JsonProperty("humidity") BigDecimal humidity,

                       @JsonProperty("date") String date,
                       @JsonProperty("time") String time,
                       @JsonProperty("building") String building) {
        this.reading_id = reading_id;
        this.pm2_5 = pm2_5;
        this.pm10 = pm10;
        this.temperature = temperature;
        this.humidity = humidity;
        this.date = date;
        this.time = time;
        this.building = building;
    }

    // getting method
    public int getReading_id() {
        return reading_id;
    }

    public BigDecimal getPm2_5() {
        return pm2_5;
    }

    public BigDecimal getPm10() {
        return pm10;
    }

    public BigDecimal getTemperature() {
        return temperature;
    }

    public BigDecimal getHumidity() {
        return humidity;
    }

    public String getDate() {
        return date;
    }

    public String getTime() {
        return time;
    }

    public String getBuilding() {
        return building;
    }



}