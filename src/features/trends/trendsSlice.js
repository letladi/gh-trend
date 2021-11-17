import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  status: "idle",
  languageResetOption: "All",
  dateRangeResetOption: "All",
  data: [],
};

export const counterSlice = createSlice({
  name: "trends",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setApiData: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
      state.data = [];
    },
    filterLanguage: (state, action) => {
      state.languageFilter = action.payload;
    },
    filterDateRange: (state, action) => {
      state.dateRangeFilter = action.payload;
    },
  },
});

export const { setLoading, setApiData, filterLanguage, filterDateRange } =
  counterSlice.actions;

export const getDateRangesSelector = (state) => {
  return getKeyValues(state.trends.data, "since");
};

export const getLanguagesSelector = (state) => {
  return getKeyValues(state.trends.data, "language");
};

export const filterDataForDisplay = (
  data,
  { languageFilter, dateRangeFilter }
) => {
  return data.filter((item) => {
    if (languageFilter && dateRangeFilter) {
      return item.language === languageFilter && item.since === dateRangeFilter;
    } else if (languageFilter) {
      return item.language === languageFilter;
    } else if (dateRangeFilter) {
      return item.since === dateRangeFilter;
    } else {
      return true;
    }
  });
};

export const getLanguageResetOption = (state) =>
  state.trends.languageResetOption;

export const getLanguageFilter = (state) => state.trends.languageFilter;

export const getDateRangeFilter = (state) => state.trends.dateRangeFilter;

export const getDateRangeResetOption = (state) =>
  state.trends.dateRangeResetOption;

function getKeyValues(list, key) {
  const ret = new Set();
  list.forEach((item) => {
    if (item[key]) ret.add(item[key]);
  });
  return Array.from(ret);
}

export default counterSlice.reducer;
