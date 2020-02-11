# Student Password Generator
This is a simple Node JS app that can generate student passwords which are exported to a CSV file for ease of use with relational database SIS systems such as Infinite Campus. The CSV file can be used to load passwords via SQL. It is aimed at K-12 use.

# Password Structure
Passwords take the form of adjective + singular noun + two digit number for memorability. I used short and 'positive' adjectives and animals for the nouns. The number 69 has been excluded from the possible two-digit numbers to be generated.

Example: brightzebra12

# How to use
After downloading npm dependencies, initialize the app in node and run index.js. The resulting CSV file will be outputted as csv/passwords.csv. NOTE: This file will be overwritten every time you run the command, so please copy your files as needed.

# Customization
The variables nounsList and adjectivesList can be modified to include whatever nouns and adjectives you want. Editing the variable resultNumber changes the amount of passwords that will be generated in the csv file. 
