export interface UserSchema {
  body: {
    user_name: string;
    first_name: string;
    last_name: string;
    password: string;
    passwordConfirmation: string;
    bio: string;
    email: string;
    message: string;
    path: string[];
  };
}

export interface CitySchema {
  name: string;
  country: string;
  location: string;
}

export interface FriendSchema {
  FriendId: string;
}

export interface OtherUserInfoSchema {
  userId: string;
}

export interface PlaceSchema {
  name: string;
  description: string;
  tag_list: TagSchema[];
  img: string;
  location: string;
  address: string;
  city: string;
  city_info?: CitySchema;
  country: string;
}

export interface RemovePlaceSchema {
  name: string;
  id: string;
  CityId: string;
}

export interface SearchUserSchema {
  searchValue: string;
}

export interface SessionSchema {
  body: {
    email: string;
    password: string;
  };
}

export interface TagSchema {
  tag_name: string;
}
