function makeItAnObject(input: string) {
  const str1 = input.split(':')[1].split(',')[0];
  const str2 = input.split(':')[2].split('}')[0];
  const obj = {
    lat: str1,
    lng: str2,
  };
  return obj;
}

export default makeItAnObject;
