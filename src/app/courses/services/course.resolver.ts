


import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Course, CoursePerso} from '../model/course';
import {Observable} from "rxjs";
import {CoursesService} from "./courses.service";
import {AppState} from "../../reducers";
import {select, Store} from "@ngrx/store";
import {filter, first, tap} from "rxjs/operators";
import {selectCourseById} from '../course.selectors';
import {BibiRequested, CourseRequested} from '../course.actions';



@Injectable()
export class CourseResolver implements Resolve<Course> {

    constructor(
        private coursesService: CoursesService,
        private store: Store<AppState>) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {

        const courseId = route.params['id'];
        console.log("courseId => " + courseId);

        return this.store.pipe(
          select(selectCourseById(courseId)),
          tap((course) => {
            if (!course) {
              this.store.dispatch(new CourseRequested({courseId: courseId}));
            }
          }),
          filter(course => !!course),
          first()
        );

    }

  loadCoursePerso() {
    const courseP: CoursePerso = {
      idBibi: 123,
      description: 'description',
      iconUrl: 'iconUrl',
      courseListIcon: 'courseListIcon',
      longDescription: 'longDescription',
      category: 'category',
      lessonsCount: 44,
      promo: false,
    };

    // this.store.pipe(
    //   select(fromCoursePerso.selectEntities)
    // );

    this.store.dispatch(new BibiRequested({coursePerso: courseP}));
  }

}

