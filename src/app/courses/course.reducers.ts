import {Course, CoursePerso} from './model/course';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {CourseActions, CourseActionTypes} from './course.actions';

export interface CoursesState extends EntityState<Course> {
  // coursesEntities: {[key:number]: Course};
  // coursesOrder: number[];
}


export interface CoursesStatePerso extends EntityState<CoursePerso> {}

export const adapter: EntityAdapter<Course> = createEntityAdapter<Course>();
export const initialCoursesState: CoursesState = adapter.getInitialState();

export const adapterPerso: EntityAdapter<CoursePerso> = createEntityAdapter<CoursePerso>();
export const initialCoursesStatePerso: CoursesStatePerso = adapterPerso.getInitialState();


export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors();


export function coursesReducer(state = initialCoursesState, action: CourseActions): CoursesState {
  switch (action.type) {
    case CourseActionTypes.CourseLoaded:
      return adapter.addOne(action.payload.course, state);
    default: {
      return state;
    }
  }
}


export function coursesReducerPerso(state = initialCoursesStatePerso, action: CourseActions): CoursesStatePerso {
  switch (action.type) {
    case CourseActionTypes.BibiRequested:
      return adapterPerso.addOne(action.payload.coursePerso , state);
    default: {
      return state;
    }
  }

}


