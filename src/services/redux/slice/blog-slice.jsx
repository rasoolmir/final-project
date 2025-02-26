import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    selectedBlog: null,
    loading: false,
    error: null,
  },
  reducers: {
    setBlogs: (state, action) => {
      state.loading = true;
      state.blogs = action.payload;
      state.loading = false;
    },
    selectBlog: (state, action) => {
      state.selectedBlog = action.payload;
    },
  },
});

export const { setBlogs, selectBlog } = blogSlice.actions;
export default blogSlice.reducer;
