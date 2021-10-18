
import places from "./placesList"
import cities from './allFriendsCities'
/*
How to call nested includes to get all friends places and cities in one call to the backend
https://stackoverflow.com/questions/33941943/nested-include-in-sequelize
*/


const User = {
  id: 1,
  username: 'Pete12',
  bio: 'Here I am, my name is Pete. I like to travel. Also am really into wine and craft coctails. I know lots of good places. Follow me.',
  img: 'https://images.pexels.com/photos/7675867/pexels-photo-7675867.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  following_count: 19,
  followers_count: 1254,
  first_name: 'Pete',
  last_name: 'Hansinson',
  email: 'pete12@hotmail.com',
  password: '^@234234dfw4rewr^%',
  places: places,
  cities: cities
}


export default User;