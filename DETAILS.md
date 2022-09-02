# How it works

1 The first step was creating a function called rendertable that takes in a page number that represents the page we want to fetch
//
2 inside the rendertable function we fetch the APi using promises and using the then method

3 which is first represented in json format but later converted into javascript object

4 After that we map through the array inside the object returned with this code (objectData.results[0][pagenumber].map)

5 Then i use DOM manipulation to fill the table body with its corresponding APi data

6 Then i set the attributes of the table body to match the page number

7 after that i call the rendertable function and pass it page which will reresent our page number and also our api page

8 After which i create a function called GoNext that taks in an argument and increases the argument by 1 and then calls the rendertable function with the increased argument this increased argument represents our pagenumber which is to be fetched from the API

9 then I create another function next page which implements what gonext function did

10 and vice versa for previous page

11 except that for previous function if the page is === 1 then the previous button will dissapear

12 lastly i added the click event listner to the previous page button and next page button and i pass in the corresponding functions

13 The End
