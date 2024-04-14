# Web Application


## Getting Started

To run this application locally, follow these steps:

### Prerequisites

- Java Development Kit (JDK) 17 or higher
- Maven 4.0.0 or higher
- SpringBoot 3.2.4 or higher
- IntelliJ IDEA or Eclipse

### Local execution of program

1. Open the project folder with an IDE of your choice.
3. Find the main class from `src/main/java/web/Q4/Q4Application.java`, and run it.

The application will start running at `http://localhost:8081` , so navigate to this address in your browser.



## File Structure

The project structure is as follows:

- `src/main/java`: Contains Java source code.
  - `web.Q4.api`: Package containing API controllers.
  - `web.Q4.doa`: Package containing Data Access Object classes.
  - `web.Q4.model`: Package containing model classes.
  - `web.Q4.Q4Application`: Main Spring Boot application class.
- `src/main/resources`: Contains static resources and configuration files.
  - Front-end files.
- `pom.xml`: Maven project configuration file.
- DCU-web-dev-g-ca\back\src\main\resources\application.properties - this file contains database connection details


The program is connected to a remote database, provided for us by Annop. The addrerss to the database is: 
db-instance.c56ysm0wax1n.eu-north-1.rds.amazonaws.com:3306/web_group_ca_group_j

Connection to the remote database is established automatically.



## Dependencies

This project uses the following dependencies:

- Spring Boot Starter Web: For building web applications.
- Spring Boot Starter Test: For testing Spring Boot applications.
- Jackson Core: For JSON processing.

