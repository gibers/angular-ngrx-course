import {Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AppState} from '../../reducers';
import {select, Store} from '@ngrx/store';
import {selectAllCourses} from '../course.selectors';
import {AllCoursesRequested} from '../course.actions';
import {CoursesService} from '../services/courses.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    promoTotal$: Observable<number>;

    beginnerCourses$: Observable<Course[]>;

    advancedCourses$: Observable<Course[]>;

    constructor( private store: Store<AppState>, private coursesService: CoursesService) {

    }

  ngOnInit() {

    this.store.dispatch(new AllCoursesRequested());

    const allCourses: Observable<Course> = this.store.pipe(select(selectAllCourses));

    console.log("liste des courses : " , allCourses);

    allCourses.subscribe(x => console.log(" mon X => ", x));


    const courses$ = this.coursesService.findAllCourses();

    this.beginnerCourses$ = courses$.pipe(
      map(courses => courses.filter(course => course.category === 'BEGINNER') )
    );

    this.advancedCourses$ = courses$.pipe(
      map(courses => courses.filter(course => course.category === 'ADVANCED') )
    );

    this.promoTotal$ = courses$.pipe(
      map(courses => courses.filter(course => course.promo).length)
    );

  }

}
