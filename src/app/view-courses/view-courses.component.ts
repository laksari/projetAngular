import {Component, OnDestroy, OnInit} from '@angular/core';
import {CourseService} from '../services/course.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.scss']
})
export class ViewCoursesComponent implements OnInit, OnDestroy {

  courses: any[];
  coursesSubscription: Subscription;



constructor(private courseService: CourseService) { }

  ngOnInit(): void {

    this.coursesSubscription = this.courseService.courseSubjetc.subscribe(
      (cours:any[])=>{
          this.courses = cours;
      }
    );

    //this.courseService.emisCoursesSubject();
    this.courseService.getCourses();
  }

  ngOnDestroy(): void {
    this.coursesSubscription.unsubscribe();
  }



}
