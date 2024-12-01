# Find My Contacts

A simple React application that allows users to filter contacts based on various fields such as first name, last name, email, phone number, street address, and more. The app uses **React** for the frontend, **Bootstrap** for responsive styling, and a **JSON dataset** for contact data.

## Features

- **Filter Contacts**: Allows users to filter contacts based on fields like first name, last name, email, phone number, and more.
- **Responsive Design**: Built with **Bootstrap**, ensuring the application is responsive and works well on different screen sizes (desktop, tablet, mobile).
- **Case-Insensitive Search**: Search filters are case-insensitive for improved user experience.
- **Dynamic Data**: Filters update in real-time as the user types.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Bootstrap**: A CSS framework for responsive design and styling.
- **JavaScript (ES6+)**: For the application logic, including filtering contacts.
- **JSON**: Used for storing and retrieving sample contact data.

## How It Works

1. **Responsive Layout**: The layout adapts to different screen sizes using Bootstrap's grid system.
2. **Dynamic Filtering**: As the user enters filter criteria (e.g., first name, last name, etc.), the contact list is filtered in real time.
3. **JSON Dataset**: The contact data is stored in a JSON format, and the app uses this data to display contacts and apply filters.

## Setup and Installation

To run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/YugBandhara/find-my-contacts.git

```

### 2. Navigate to the project directory
```bash
cd contact-filter-app
```
### 3. Install dependencies
Make sure you have Node.js installed. Then, run:

```bash
npm install
```
This will install all the required dependencies, including React and Bootstrap.

### 4. Start the application
After the dependencies are installed, start the development server with:

```bash
npm start
```
This will run the app in development mode and open it in your default browser at http://localhost:3000.

## Sample Data

The following array of objects is used for testing the functionality:
`src/utils/SampleData.js`
```Javascript
[
  {
    "id": "a1b2c3d4-e5f6-7890-1234-56789abcdef0",
    "firstName": "Liam",
    "lastName": "Wilson",
    "dateOfBirth": "1990-05-15",
    "email": "liamwilson@example.com",
    "phoneNumber": "416-555-1234",
    "streetAddress": "123 Maple Street",
    "state": "ON",
    "zipCode": "M5G 1Z2",
    "city": "Toronto"
  },
  {
    "id": "f2e3d4c5-b6a7-8901-2345-67890abcdef1",
    "firstName": "Olivia",
    "lastName": "Miller",
    "dateOfBirth": "1985-03-20",
    "email": "oliviamiller@example.com",
    "phoneNumber": "604-555-5678",
    "streetAddress": "456 Oak Avenue",
    "state": "BC",
    "zipCode": "V6E 2H2",
    "city": "Vancouver"
  },
  {
    "id": "g3h4i5j6-k7l8-9012-3456-78901abcdef2",
    "firstName": "Noah",
    "lastName": "Davis",
    "dateOfBirth": "1992-08-10",
    "email": "noahdavis@example.com",
    "phoneNumber": "403-555-9012",
    "streetAddress": "789 Pine Road",
    "state": "AB",
    "zipCode": "T2P 3H7",
    "city": "Calgary"
  },
  {
    "id": "h5i6j7k8-l9m0-1234-5678-90123abcdef3",
    "firstName": "Emma",
    "lastName": "Taylor",
    "dateOfBirth": "1995-11-25",
    "email": "emmataylor@example.com",
    "phoneNumber": "780-555-2345",
    "streetAddress": "101 Birch Lane",
    "state": "AB",
    "zipCode": "T5J 1Z1",
    "city": "Edmonton"
  },
  {
    "id": "i7j8k9l0-m1n2-3456-7890-12345abcdef4",
    "firstName": "Sophia",
    "lastName": "Anderson",
    "dateOfBirth": "1994-07-30",
    "email": "sophiaanderson@example.com",
    "phoneNumber": "613-555-1122",
    "streetAddress": "303 Spruce Avenue",
    "state": "ON",
    "zipCode": "K1P 5T3",
    "city": "Ottawa"
  },
  {
    "id": "j8k9l0m1-n2o3-4567-8901-23456abcdef5",
    "firstName": "Benjamin",
    "lastName": "White",
    "dateOfBirth": "1993-04-18",
    "email": "benjaminwhite@example.com",
    "phoneNumber": "250-555-5566",
    "streetAddress": "606 Redwood Terrace",
    "state": "BC",
    "zipCode": "V8W 2B5",
    "city": "Victoria"
  },
  {
    "id": "k9l0m1n2-o3p4-5678-9012-34567abcdef6",
    "firstName": "Charlotte",
    "lastName": "Harris",
    "dateOfBirth": "1996-06-22",
    "email": "charlotteharris@example.com",
    "phoneNumber": "306-555-6677",
    "streetAddress": "707 Cypress Court",
    "state": "SK",
    "zipCode": "S4P 3Y3",
    "city": "Regina"
  },
  {
    "id": "l0m1n2o3-p4q5-6789-0123-45678abcdef7",
    "firstName": "Elijah",
    "lastName": "Lewis",
    "dateOfBirth": "1990-02-11",
    "email": "elijahlewis@example.com",
    "phoneNumber": "709-555-7788",
    "streetAddress": "808 Aspen Drive",
    "state": "NL",
    "zipCode": "A1B 2C3",
    "city": "St. John's"
  },
  {
    "id": "m1n2o3p4-q5r6-7890-1234-56789abcdef8",
    "firstName": "Ava",
    "lastName": "Clark",
    "dateOfBirth": "1998-12-05",
    "email": "avaclark@example.com",
    "phoneNumber": "867-555-8899",
    "streetAddress": "909 Birch Hill",
    "state": "NT",
    "zipCode": "X0E 1A0",
    "city": "Yellowknife"
  },
  {
    "id": "n2o3p4q5-r6s7-8901-2345-67890abcdef9",
    "firstName": "James",
    "lastName": "Martinez",
    "dateOfBirth": "1997-09-18",
    "email": "jamesmartinez@example.com",
    "phoneNumber": "902-555-9900",
    "streetAddress": "101 Cedar Cove",
    "state": "NS",
    "zipCode": "B3J 2Z9",
    "city": "Halifax"
  },
  {
    "id": "o3p4q5r6-s7t8-9012-3456-78901abcdef10",
    "firstName": "Mason",
    "lastName": "Roberts",
    "dateOfBirth": "1994-01-30",
    "email": "masonroberts@example.com",
    "phoneNumber": "514-555-1010",
    "streetAddress": "202 Rosewood Avenue",
    "state": "QC",
    "zipCode": "H2X 1J5",
    "city": "Montreal"
  },
  {
    "id": "p4q5r6s7-t8u9-0123-4567-89012abcdef11",
    "firstName": "Isabella",
    "lastName": "Lopez",
    "dateOfBirth": "1993-02-24",
    "email": "isabellalopez@example.com",
    "phoneNumber": "416-555-1123",
    "streetAddress": "303 Oak Street",
    "state": "ON",
    "zipCode": "M5V 1J4",
    "city": "Toronto"
  },
  {
    "id": "q5r6s7t8-u9v0-1234-5678-90123abcdef12",
    "firstName": "Ethan",
    "lastName": "Scott",
    "dateOfBirth": "1992-06-10",
    "email": "ethanscott@example.com",
    "phoneNumber": "778-555-1345",
    "streetAddress": "404 Birch Place",
    "state": "BC",
    "zipCode": "V7A 2B1",
    "city": "Richmond"
  },
  {
    "id": "r6s7t8u9-v0w1-2345-6789-01234abcdef13",
    "firstName": "Amelia",
    "lastName": "King",
    "dateOfBirth": "1995-09-12",
    "email": "ameliaking@example.com",
    "phoneNumber": "905-555-1456",
    "streetAddress": "505 Willow Street",
    "state": "ON",
    "zipCode": "L6S 1P9",
    "city": "Brampton"
  },
  {
    "id": "s7t8u9v0-w1x2-3456-7890-12345abcdef14",
    "firstName": "Jackson",
    "lastName": "Walker",
    "dateOfBirth": "1997-10-05",
    "email": "jacksonwalker@example.com",
    "phoneNumber": "204-555-1567",
    "streetAddress": "606 Cedar Street",
    "state": "MB",
    "zipCode": "R3L 0K2",
    "city": "Winnipeg"
  },
  {
    "id": "t8u9v0w1-x2y3-4567-8901-23456abcdef15",
    "firstName": "Chloe",
    "lastName": "Allen",
    "dateOfBirth": "1998-07-23",
    "email": "chloeallen@example.com",
    "phoneNumber": "403-555-1678",
    "streetAddress": "707 Maple Avenue",
    "state": "AB",
    "zipCode": "T2N 4N4",
    "city": "Calgary"
  },
  {
    "id": "u9v0w1x2-y3z4-5678-9012-34567abcdef16",
    "firstName": "Lucas",
    "lastName": "Young",
    "dateOfBirth": "1991-04-14",
    "email": "lucasyoung@example.com",
    "phoneNumber": "514-555-1789",
    "streetAddress": "808 Oak Street",
    "state": "QC",
    "zipCode": "H2L 1P7",
    "city": "Montreal"
  },
  {
    "id": "v0w1x2y3-z4a5-6789-0123-45678abcdef17",
    "firstName": "Mia",
    "lastName": "Hernandez",
    "dateOfBirth": "1996-05-17",
    "email": "miahernandez@example.com",
    "phoneNumber": "647-555-1890",
    "streetAddress": "909 Elm Street",
    "state": "ON",
    "zipCode": "M4Y 2C6",
    "city": "Toronto"
  },
  {
    "id": "w1x2y3z4-a5b6-7890-1234-56789abcdef18",
    "firstName": "Henry",
    "lastName": "Martinez",
    "dateOfBirth": "1999-03-21",
    "email": "henrymartinez@example.com",
    "phoneNumber": "902-555-1901",
    "streetAddress": "101 Maple Lane",
    "state": "NS",
    "zipCode": "B3K 4R7",
    "city": "Halifax"
  },
  {
    "id": "x2y3z4a5-b6c7-8901-2345-67890abcdef19",
    "firstName": "Lily",
    "lastName": "Lopez",
    "dateOfBirth": "1995-06-30",
    "email": "lilylopez@example.com",
    "phoneNumber": "905-555-2012",
    "streetAddress": "202 Pine Place",
    "state": "ON",
    "zipCode": "L5B 3K1",
    "city": "Mississauga"
  },
  {
    "id": "y3z4a5b6-c7d8-9012-3456-78901abcdef20",
    "firstName": "Henry",
    "lastName": "Nelson",
    "dateOfBirth": "1992-04-12",
    "email": "henrynelson@example.com",
    "phoneNumber": "604-555-2123",
    "streetAddress": "303 Cedar Avenue",
    "state": "BC",
    "zipCode": "V5K 3L8",
    "city": "Vancouver"
  },
  {
    "id": "z4a5b6c7-d8e9-0123-4567-89012abcdef21",
    "firstName": "Zoe",
    "lastName": "Wright",
    "dateOfBirth": "1990-01-20",
    "email": "zoewright@example.com",
    "phoneNumber": "418-555-2233",
    "streetAddress": "404 Maple Hill",
    "state": "QC",
    "zipCode": "G1R 2Y2",
    "city": "Quebec City"
  },
  {
    "id": "a5b6c7d8-e9f0-1234-5678-90123abcdef22",
    "firstName": "Grace",
    "lastName": "Evans",
    "dateOfBirth": "1992-02-15",
    "email": "graceevans@example.com",
    "phoneNumber": "778-555-3344",
    "streetAddress": "505 Pine Place",
    "state": "BC",
    "zipCode": "V5N 4K9",
    "city": "Surrey"
  },
  {
    "id": "b6c7d8e9-f0a1-2345-6789-01234abcdef23",
    "firstName": "Evan",
    "lastName": "Adams",
    "dateOfBirth": "1995-11-10",
    "email": "evanadams@example.com",
    "phoneNumber": "705-555-4455",
    "streetAddress": "606 Birch Hill",
    "state": "ON",
    "zipCode": "K7K 2P4",
    "city": "Barrie"
  },
  {
    "id": "c7d8e9f0-a1b2-3456-7890-12345abcdef24",
    "firstName": "Charlotte",
    "lastName": "Robinson",
    "dateOfBirth": "1991-09-07",
    "email": "charlotterobinson@example.com",
    "phoneNumber": "902-555-5566",
    "streetAddress": "707 Cedar Terrace",
    "state": "NS",
    "zipCode": "B3M 4N6",
    "city": "Dartmouth"
  },
  {
    "id": "d8e9f0a1-b2c3-4567-8901-23456abcdef25",
    "firstName": "Lucas",
    "lastName": "Thompson",
    "dateOfBirth": "1994-05-04",
    "email": "lucasthompson@example.com",
    "phoneNumber": "250-555-6677",
    "streetAddress": "808 Oak Avenue",
    "state": "BC",
    "zipCode": "V9T 4A1",
    "city": "Nanaimo"
  },
  {
    "id": "e9f0a1b2-c3d4-5678-9012-34567abcdef26",
    "firstName": "Amelia",
    "lastName": "Martinez",
    "dateOfBirth": "1993-10-11",
    "email": "ameliamartinez@example.com",
    "phoneNumber": "604-555-7788",
    "streetAddress": "909 Elm Road",
    "state": "BC",
    "zipCode": "V6B 3R3",
    "city": "Burnaby"
  },
  {
    "id": "f0a1b2c3-d4e5-6789-0123-45678abcdef27",
    "firstName": "Mason",
    "lastName": "Lee",
    "dateOfBirth": "1997-07-19",
    "email": "masonlee@example.com",
    "phoneNumber": "705-555-8899",
    "streetAddress": "101 Birch Road",
    "state": "ON",
    "zipCode": "P4P 5Q1",
    "city": "Sudbury"
  },
  {
    "id": "g1b2c3d4-e5f6-7890-1234-56789abcdef28",
    "firstName": "Isabella",
    "lastName": "Gonzalez",
    "dateOfBirth": "1999-06-27",
    "email": "isabellagonzalez@example.com",
    "phoneNumber": "250-555-9900",
    "streetAddress": "202 Birch Lane",
    "state": "BC",
    "zipCode": "V8M 3L2",
    "city": "Victoria"
  },
  {
    "id": "h2c3d4e5-f6g7-8901-2345-67890abcdef29",
    "firstName": "David",
    "lastName": "Scott",
    "dateOfBirth": "1994-01-02",
    "email": "davidscott@example.com",
    "phoneNumber": "905-555-1122",
    "streetAddress": "303 Oak Place",
    "state": "ON",
    "zipCode": "L4T 1K6",
    "city": "Mississauga"
  },
  {
    "id": "i3d4e5f6-a7b8-0123-4567-89012abcdef30",
    "firstName": "Lily",
    "lastName": "Morris",
    "dateOfBirth": "1996-11-22",
    "email": "lilymorris@example.com",
    "phoneNumber": "204-555-1123",
    "streetAddress": "404 Maple Street",
    "state": "MB",
    "zipCode": "R3T 2Z7",
    "city": "Winnipeg"
  },
  {
    "id": "j4e5f6g7-b8c9-2345-6789-01234abcdef31",
    "firstName": "Zachary",
    "lastName": "Carter",
    "dateOfBirth": "1998-03-13",
    "email": "zacharycarter@example.com",
    "phoneNumber": "519-555-2234",
    "streetAddress": "505 Oak Ridge",
    "state": "ON",
    "zipCode": "N2K 3Y2",
    "city": "Kitchener"
  },
  {
    "id": "k5f6g7h8-c9d0-3456-7890-12345abcdef32",
    "firstName": "Harper",
    "lastName": "Mitchell",
    "dateOfBirth": "1994-09-21",
    "email": "harpermitchell@example.com",
    "phoneNumber": "416-555-3345",
    "streetAddress": "606 Cedar Lane",
    "state": "ON",
    "zipCode": "M6H 2J4",
    "city": "Toronto"
  },
  {
    "id": "l6g7h8i9-d0e1-4567-8901-23456abcdef33",
    "firstName": "Jackson",
    "lastName": "Cameron",
    "dateOfBirth": "1991-02-03",
    "email": "jacksoncameron@example.com",
    "phoneNumber": "705-555-4455",
    "streetAddress": "707 Birch Avenue",
    "state": "ON",
    "zipCode": "L4N 1B8",
    "city": "Barrie"
  },
  {
    "id": "m7h8i9j0-e1f2-5678-9012-34567abcdef34",
    "firstName": "Ella",
    "lastName": "Cameron",
    "dateOfBirth": "1993-05-14",
    "email": "ellacameron@example.com",
    "phoneNumber": "514-555-5566",
    "streetAddress": "808 Willow Street",
    "state": "QC",
    "zipCode": "H3A 2G3",
    "city": "Montreal"
  },
  {
    "id": "n8i9j0k1-f2a3-6789-0123-45678abcdef35",
    "firstName": "Aiden",
    "lastName": "Hughes",
    "dateOfBirth": "1996-10-28",
    "email": "aidenhughes@example.com",
    "phoneNumber": "403-555-6677",
    "streetAddress": "909 Maple Grove",
    "state": "AB",
    "zipCode": "T5A 4M7",
    "city": "Edmonton"
  },
  {
    "id": "o9j0k1l2-g3a4-7890-1234-56789abcdef36",
    "firstName": "Madison",
    "lastName": "Collins",
    "dateOfBirth": "1994-01-10",
    "email": "madisoncollins@example.com",
    "phoneNumber": "905-555-7788",
    "streetAddress": "101 Pine Street",
    "state": "ON",
    "zipCode": "L1V 1X6",
    "city": "Ajax"
  },
  {
    "id": "p0k1l2m3-h4b5-9012-3456-78901abcdef37",
    "firstName": "Evelyn",
    "lastName": "Wood",
    "dateOfBirth": "1992-04-19",
    "email": "evelynwood@example.com",
    "phoneNumber": "613-555-8899",
    "streetAddress": "202 Birchwood Crescent",
    "state": "ON",
    "zipCode": "K2C 3Y8",
    "city": "Ottawa"
  },
  {
    "id": "q1l2m3n4-i5c6-2345-6789-01234abcdef38",
    "firstName": "Caleb",
    "lastName": "Scott",
    "dateOfBirth": "1993-08-02",
    "email": "calebscott@example.com",
    "phoneNumber": "604-555-9900",
    "streetAddress": "303 Cedar Ridge",
    "state": "BC",
    "zipCode": "V5X 1A2",
    "city": "Vancouver"
  },
  {
    "id": "r2m3n4o5-j6d7-3456-7890-12345abcdef39",
    "firstName": "Ava",
    "lastName": "Parker",
    "dateOfBirth": "1995-11-09",
    "email": "avaparker@example.com",
    "phoneNumber": "819-555-1010",
    "streetAddress": "404 Maple Terrace",
    "state": "QC",
    "zipCode": "G1P 5L1",
    "city": "Quebec City"
  }
  
  ]
  ```
