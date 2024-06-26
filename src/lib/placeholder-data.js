export const getAccommodations = () => {
  const accommodations = require('./data/accommodations.json');
  return accommodations;
};

export const getCars = () => {
  const cars = require('./data/cars.json');
  return cars
};

export const getActivities = () => {
  const activities = require('./data/activities.json');
  return activities;
};

export const getRecommendedActivities = () => {
  const activities = require('./data/recommended.json');
  return activities;
}

export const getPromo = () => {
  const promo = require('./data/promo.json');
  return promo;
}

export const getInterestingPlaces = () => {
  const places = require('./data/places.json');
  return places;
};

export const filterAccommodations = (filters) => {
  return filterItems(getAccommodations(), filters);
};

export const filterCars = (filters) => {
  return filterItems(getCars(), filters);
};

export const filterActivities = (filters) => {
  return filterItems(getActivities(), filters);
};

const filterItems = (items, filters) => {
  return items.filter(item => {
    return Object.keys(filters).every(filterKey => {
      if (Array.isArray(filters[filterKey]) && filterKey != 'passengers') {
        return filters[filterKey].some(filterElement => item[filterKey].includes(filterElement));
      } else {
        return String(filters[filterKey]).includes(String(item[filterKey]));
      }
    });
  });
};