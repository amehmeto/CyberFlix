import { AppDispatch, Dependencies, RootState } from './createStore'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppDispatch
  extra: Dependencies
}>()
