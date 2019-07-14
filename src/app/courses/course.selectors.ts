import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CoursesState} from './course.reducers';


export const selectedCoursesState = createFeatureSelector<CoursesState>('courses');


export const selectCourseById = (courseId: number) => createSelector(
  selectedCoursesState,
  coursesState => coursesState.entities[courseId]
);
