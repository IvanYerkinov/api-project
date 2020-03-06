This is a simple API used to store and retrieve strings from a database.

Commands:
Call the following urls in order to do various things with the database.

"/text"
Returns all the string objects currently in the data base as a Json excerpt.


"/text/:id"
Returns one string object as a Json as specified by the :id token.
When you call this url replace ':id' with the id value of whatever string object you want to view.

"text/new/:string"
Creates a new string object and saves it to the database.
When you call this url replace ':string' with whatever string you want the object to store.

"/text/:id/update/:string"
Replaces the current string within an object with a new string specified by the user.
When you call this url replace ':id' with the id of whatever object you want to update, and replace ':string' a string you want to update the object with.

"/text/:id/delete"
Deletes an object from the database.
When you call this url, replace ':id' with the id of the object you want to delete.
