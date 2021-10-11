


/*
How to call nested includes to get all friends places and cities in one call to the backend
https://stackoverflow.com/questions/33941943/nested-include-in-sequelize
*/


const User = {
  id: 1,
  username: 'Pete12',
  bio: 'Here I am, my name is Pete',
  profile_pic: '../assets/dummy-photos/nerd.jpg',
  following_count: 19,
  followers_count: 1254,
  first_name: 'Pete',
  last_name: 'Hansinson',
  email: 'pete12@hotmail.com',
  password: '^@234234dfw4rewr^%',
  following: []
}






/*

getUser include following 
for each following get user Id
send request to get all places and cities for user ids

 */
