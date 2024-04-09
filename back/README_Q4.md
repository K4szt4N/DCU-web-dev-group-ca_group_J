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

1. Open the web page at `http://localhost:8081`
2. Moving the mouse over the left navigator button "Administer" will reveal the left side navigator bar.
3. Click on "Manage Rooms".
4. Click on "Rooms Information Inquire" to room information by input it room_id. Check the `roomData.json` in the resource file to get the room_id.
5. After the room information is show, Click on "Hotel name" to inquire this hotel's information.
6. After the add operation, check the files `hotelData.json` or `roomData.json` in the resource file to see if the information show was correctly.

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
