/****************************************************
1. Create an array called movieQueue with at least two Movie Names as strings
****************************************************/
var movieQueue = ["5th Wave","Home Alone"];


/****************************************************
2. Create a function called addMovieToEnd
- Your function should take one parameter, the name of the movie to add
- It should add the new movie name to the end of your movieQueue array
- Finally it should return the movie name it just added
****************************************************/
function addMovieToEnd(Movie){

movieQueue.push(Movie);  
   
return Movie 
   
}



/****************************************************
3. Create a function called addMovieToFront
- Your function should take one parameter, the name of the movie to add
- It should add the new movie name to the front of your movieQueue array
- Finally it should return the movie name it just added
****************************************************/

function addMovieToFront(Movie){
  
movieQueue.unshift(Movie);

return Movie
  
  
  
}



/****************************************************
4. Create a function called changeMovie
- Your function should take two parameters. The first parameter should be an index, 
  and the second should be the name of the movie to add
- It should add the new movie name to the movieQueue array at the given index.
- Finally it should return the movie name it just added
****************************************************/

function changeMovie(Index,Movie){
 
 
movieQueue[Index]=Movie;

return Movie  
  
}





/****************************************************
5. Create a function called getMovie
- Your function should take one parameter, the index of the movie you want to get
- If the index is valid (meaning that it's less than the number of items in the array), 
  it should return the name of the movie at that index in the array movieQueue
- If the index is not valid (meaning that it's larger than the number of items in the array),
  it should return the string "not a valid index"
****************************************************/

function getMovie(Index){
  
  movieQueue[Index]=Index;
  
  return index;
  
 
  
  
  
}
/**************************
 PASTE YOUR CODE FROM LAST WEEK ABOVE THIS COMMENT BLOCK
 ***************************/
/****************************************************
6. Create a function called isLengthGreaterThan
- Your function should take one parameter, a number (call it "length")
- If movieQueue's length is greater than length, return true
- If movieQueue's length is less than or equal to length, return false
****************************************************/



/****************************************************
7. Create a function called addMoviesToEnd()
- Your function should take no parameters.
- Create an array with three movie names (strings) in it
- Loop over this array, and add each movie in it to the queue using addMovieToEnd()
- Return the array you created
****************************************************/

 
/****************************************************
8. Create a function called findMovie
- Your function should take one parameter, the name of the movie you want to look for
- If the movie is in the array, it should return true
- If the movie is not in the array, it should return false
****************************************************/


 
 /****************************************************
 9. Create a function called listMovies
- Your function should take no parameters
- It should loop over all of the movies in the movieQueue, and return the string:
 "Here are the current movies: <value of movieQueue[0]>, <value of movieQueue[1]>, "
****************************************************/

 

 
