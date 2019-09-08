import {Action} from '@ngrx/store';
import {Course, CoursePerso} from './model/course';


export enum CourseActionTypes {

  CourseRequested = '[View Course Page] Course Requested',

  CourseLoaded = '[Courses API] Course Loaded',

  BibiRequested = '[Mon action perso]',

  AllCoursesRequested = '[Courses Home Page] All Courses Requested',

  AllCoursesLoaded = '[Courses APi] All Courses Loaded',

}

export class BibiRequested implements Action {
  readonly type = CourseActionTypes.BibiRequested;
  constructor(public payload: {coursePerso: CoursePerso} ) {}
}

export class CourseRequested implements Action {
  readonly type = CourseActionTypes.CourseRequested;
  constructor(public payload: {courseId: number} ) {}
}

export class CourseLoaded implements Action {
  readonly type = CourseActionTypes.CourseLoaded;
  constructor(public payload: {course: Course}) {}
}


export class AllCoursesRequested implements Action {
  readonly type = CourseActionTypes.AllCoursesRequested;
  // constructor(public payload: {courseId: number} ) {}
}

export class AllCourseLoaded implements Action {
  readonly type = CourseActionTypes.AllCoursesLoaded;
  constructor(public payload: {courses: Course[]}) {}
}


export type CourseActions = CourseRequested | CourseLoaded | BibiRequested
  | AllCoursesRequested | AllCourseLoaded ;

