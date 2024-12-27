import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Place } from '../utils/types';

interface PlacesState {
  places: Place[];
  searchTerm: string;
}

const initialState: PlacesState = {
  places: [],
  searchTerm: '',
};

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    initializePlaces(state, action: PayloadAction<Place[]>) {
      state.places = action.payload;
    },
    toggleVisited(state, action: PayloadAction<number>) {
      const place = state.places.find((p) => p.id === action.payload);
      if (place) {
        place.visited = !place.visited;
      }
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload; // Update search term
    },
  },
});

export const { initializePlaces, toggleVisited, setSearchTerm } = placesSlice.actions;

export const selectFilteredPlaces = (state: PlacesState) => {
  const { places, searchTerm } = state;
  return places.filter((place) =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export default placesSlice.reducer;
