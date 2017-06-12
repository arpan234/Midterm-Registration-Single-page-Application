# Midterm Registration using NodeJS with Angular for UI

----> Main View:
Your main view should be located at the root path of your application. 
Upon clicking on the Sign-Up button, the view should change to the signup view. 

----> Sign-Up View:
The signup view should consist of an Add Module Form, Sign-Up Form, and a Modules & Groups list.

----> Add a Module:
Before a student can join a group, we must first add their desired module to our application. 
Upon submitting the Add Module form, a representation of the newly added module should
appear under the Modules & Groups section of your page. 

----> Sign-Up (Join a group):
Once your application contains one or more modules, a student can Sign-Up to present on a module. To do so, you should display a Sign-Up form that collects the student’s first and last names, e-mail address, and the module they’d like to present. To select a modules, you should dynamically update a drop-down field with all modules that have been added to your application. As a new module is added, the drop-down should automatically update with the new option.

Upon submitting the Sign-Up form, the student should be added to the corresponding module in the Modules and Groups list. 
Since group sizes are limited to 3-4 students, we will need to support multiple groups for the same module. To do so, we will automatically assign a Group Number to each module that has more than one team. For example if a student wants to prevent on the chalk module, but a group already exists, that student would simply add the chalk module again.

Upon submitting, your application will add a new entry in your list of Modules and Groups. Now, each entry will have a Group Number automatically appended to the name. 
But, when we add a second Chalk module, the drop-down list should be automatically updated to include the Group Numbers as well.
Now, when another student signs up, they can select the second Chalk group.

Upon submitting the Sign-Up form, Mary is added to Chalk - Group 2.
To continue outlining the naming behavior, if a module is added with a new, unique name, it should be added to the list without a group number.

It is also important to note that the list of modules appears in alphabetical order.

--> View all Modules and Groups:
The list of modules and groups should clearly outline all students who are part of a group, and what module they will be presenting. The title of each panel should be a hyperlink to the npm website for the module. Additionally, the list should allow a User to remove students from groups, and delete entire groups.

Keep in mind, if you have two modules with the same name, they will be displayed with an added group number. But, if you delete one of the two modules, the name should return to just the module name without the group number.

Each form should contain an obvious way of showing/hiding the form to make room on the screen.

