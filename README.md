# IoT-SpeechToText-and-esp32Algorithm
This repository contains the deliverables for week 2 task 1 for smart methods summer training.

This project has two parts, the first part is a web app that is a speech to text converter, using JavaScript and HTML.
for running the web app:
1- please make sure that the html file and the script.js file are put together
2- please make sure to choose the language you want to convert before starting, if nothing is chosen, it will use your default system language. 
3- the application supports both English and Arabic languages.

As mentioned above, the app has two files. first, I did the html code to design the website and put a text box for the text to appear and a button to start recording, then I linked this html code to a JavaScript code to make it function.
this JavaScript code uses the web API speech to text recognition library. I used some of its functions for this app.

--------------------------------------

***

As for part 2, here is the necessary Algorithm to run the Wasdom ESP32 hardware.

1. Download the Arduino IDE on your operating system. the IDE is an open source platform for electronics hardware and software.
2. Download the required file to make the IDE support the esp32 board, we can do this by going in the IDE and go to File -> Preferences. then paste the link of the website that has the files for the board in the "Additional board manager URLs" field. 
3. In the IDE, go to Tools -> Board "Arduino Uno" -> Board Manager, a new window will pop up, type esp32 in the search bar and download its library. after installing you will find a new option for the esp32 in the  Tools -> Board "Arduino Uno" tap.
4. Now that the esp32 is supported and its library installed, connect it to the computer via the USP cable, enter the command (compmgmt.msc) if you're on windows or open the computer management window if you're on another system. find the name of the port the board is connected to in your system(for example com10)
5. in the IDE, check that you're connecting to the right port and it has a checked mark on it.
6. from now on, you're ready to start programming the board, there are many examples that you can test, for example the blink program which controls the lights of the board, you can find them under the File -> Examples -> 01. Basics -> Blink. a page of code will open that controls the lights, we can see there are two main functions here, the setup function which is for initializing things you want and it'll execute when pressing the power or the reset button in the board. the other function is the loop function which contains the actual code that you want to make and it will keep running continuously in a loop. 
