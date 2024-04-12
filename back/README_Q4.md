# Q4 Web Application

This application is based on the requirements of Q4 in EE417 Assignment 3. It is a room booking system with a front-end and a back-end that provides endpoints for requiring rooms and hotels information, which are stored in JSON files.

## Getting Started

To run this application locally, follow these steps:

### Prerequisites

- Java Development Kit (JDK) 17 or higher
- Maven 4.0.0 or higher
- SpringBoot 3.2.4 or higher
- IntelliJ IDEA or Eclipse

### Installation

1. Clone this repository to your local machine.
2. Open this project with IntelliJ IDEA or Eclipse.
3. Find the main class from `src/main/java/web/Q4/Q4Application.java`, and run it.

The application will start running at `http://localhost:8081`.

## Usage

1. Start the server
2. Configure application.properties to connect to the right database with the right access info.
3. Configure WebConfig.Java to accept file from your frontEnd (exemple: localHost:8080)
4. the port for registering is `http://localhost:8081/auth/register` and need to received a post json
5. the port for login is `http://localhost:8081/auth/login` and need a json with the name and the password.



## File Structure

The project structure is as follows:

- `src/main/java`: Contains Java source code.
  - `web.Q4.api`: Package containing API controllers.
  - `web.Q4.doa`: Package containing Data Access Object classes.
  - `web.Q4.model`: Package containing model classes.
  - `web.Q4.Q4Application`: Main Spring Boot application class.
- `src/main/resources`: Contains static resources and configuration files.
  - Front-end files.
  - `roomDate.json`: JSON file for storing room data.
  - `hotelDate.json`: JSON file for storing hotel data.
- `pom.xml`: Maven project configuration file.

## Dependencies

This project uses the following dependencies:

- Spring Boot Starter Web: For building web applications.
- Spring Boot Starter Test: For testing Spring Boot applications.
- Jackson Core: For JSON processing.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
