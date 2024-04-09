package web.Q4.model;

import com.fasterxml.jackson.annotation.JsonProperty;

//User class, for handling user information.
public class User {
    //Define all the user characters.
    // username
    private final int user_id;
    private final String f_name;
    private final String l_name;
    private final String email;

    // password
    private final String password;
    // role
    private final String user_role;


    // constructor
    // for each constructor parameter, add a "@JsonProperty()" annotation to map Java object properties to JSON keys.
    // after this annotation, this class can used directly to receive a Json massages or send one.


    // getting methods

    public User(@JsonProperty("user_id") int user_id,
                @JsonProperty("f_name") String f_name,
                @JsonProperty("l_name") String l_name,
                @JsonProperty("email") String email,
                @JsonProperty("password") String password,
                @JsonProperty("user_role") String user_role) {
        this.user_id = user_id;
        this.f_name = f_name;
        this.l_name = l_name;
        this.email = email;
        this.password = password;
        this.user_role = user_role;
    }

    public int getUser_id() {
        return user_id;
    }

    public String getF_name() {
        return f_name;
    }

    public String getL_name() {
        return l_name;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getUser_role() {
        return user_role;
    }
}