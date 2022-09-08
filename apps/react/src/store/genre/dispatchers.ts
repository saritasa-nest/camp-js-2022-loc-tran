import { GenrePost } from '@js-camp/core/models/genre';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { GenresService } from '../../api/services/genreService';

export const fetchGenres = createAsyncThunk(
  'genres/fetch',
  () => GenresService.fetchGenres(),
);

export const fetchGenresByKey = createAsyncThunk(
  'genres/fetchByKey',
  (key: string) => GenresService.getGenresByKey(key),
);

export const addNewGenre = createAsyncThunk(
  'genres/addNewGenre',
  (data: GenrePost) => GenresService.addGenre(data),
);
