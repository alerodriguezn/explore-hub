import { FilterProp } from "../definitions";

export function handleFilters(prev : FilterProp, category : string, filter : string, checked : boolean){
    const categoryFilters : string[]= prev[category] ? [...prev[category]] : [];
    // if the filter is checked, add it to the category filters
    if (checked) {
      categoryFilters.push(filter);
    } 
    // if the filter is unchecked, remove it from the category filters
    else {
      const filterIndex = categoryFilters.indexOf(filter);
      if (filterIndex > -1) {
        categoryFilters.splice(filterIndex, 1);
      }
    }

    // if there are no filters in the category, remove the category from the filters
    if (categoryFilters.length === 0) {
        const newFilters = {...prev};
        delete newFilters[category];
        return newFilters;
    }

    return {...prev, [category]: categoryFilters};
}