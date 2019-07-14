import {Injectable} from '@angular/core';
import {Actions, Effect, EffectsModule, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {CourseActionTypes, CourseLoaded, CourseRequested} from './course.actions';
import {map, mergeMap} from 'rxjs/operators';
import {CoursesService} from './services/courses.service';


@Injectable()
export class CourseEffects {

  @Effect()
  loadCourse$ = this.action$.pipe (
    ofType<CourseRequested>(CourseActionTypes.CourseRequested),
    mergeMap(action => this.coursesService.findCourseById(action.payload.courseId)),
    map(course => new CourseLoaded({course}))
  );

  constructor(private action$: Actions, private coursesService: CoursesService) {
  }


}
