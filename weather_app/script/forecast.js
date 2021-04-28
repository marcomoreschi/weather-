const key = '	jy2NAHLmxVplQjReS57l8MLmuWkfb5Gi';

// get weather information
const getWeather = async (id) => {
  
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
  
    const response = await fetch(base + query);
    const data = await response.json();
  
    //console.log(data);
    return data[0];

};

// get city information
const getCity = async (city) => {

  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;//q lo troviamo sul sito del tempo sotto url in city search api reference

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];

};


//testing
/* getCity('rome').then(data => {
    return getWeather(data.Key);
  }).then(data => {
    console.log(data);
  }).catch(err => console.log(err));
 */