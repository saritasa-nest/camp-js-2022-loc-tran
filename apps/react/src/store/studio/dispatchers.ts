import { StudioPost } from '@js-camp/core/models/studio';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { StudiosService } from '../../api/services/studioService';

export const fetchStudios = createAsyncThunk(
  'studios/fetch',
  () => StudiosService.fetchStudios(),
);

export const fetchStudiosByKey = createAsyncThunk(
  'studios/fetchByKey',
  (key: string) => StudiosService.getStudiosByKey(key),
);

export const addNewStudio = createAsyncThunk(
  'studios/addNewStudio',
  (data: StudioPost) => StudiosService.addStudio(data),
);
