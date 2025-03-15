[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/gQNXeTiZ)
# FunctionAgents
Call Function from LLM


Hello John -- I worked on this for 6+ hours and couldn't quite get it to be perfectly functional. I think the prompt engineering is quite difficult - for some reason it's not extracting the parametesr that well by interpreting the user's input. 

Currently it is succesful in

(1) Interpreting that an existing function can be used, and executing this. 
- adding numbers
- greeting user (regardless of the user input: eg. user can say "Greet Bella" or "say hello to Bella" and it knows to use this function)

(2) Creating a new function if an existing function does not work 
- test: multiply 2 and 3 
- test: divide 2 and 3


Fails in
- add 2 and 3 and 4. I think the issue is that the parameter extracting AI assistant is not matching the extracted parameters with the function.
