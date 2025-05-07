# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Arul Mathur
Richard James

https://arulster17.github.io/Lab5_Starter/explore.html
https://arulster17.github.io/Lab5_Starter/expose.html

Check Your Understanding
1. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
A. No, as there are many parts of sending a message (user interface, database stuff, network stuff) that are integrated in the process of sending one message. It would be better to set up unit testing for those individual things.

2. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
A. Yes, as the max message length logic will be independent from everything else in the code, we can set up simple tests like checking that inputs are blocked after 80 characters, 80 character messages are accepted, etc.
