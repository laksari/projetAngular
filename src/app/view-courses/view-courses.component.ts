import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CourseService} from '../services/course.service';
import {Subscription} from 'rxjs';
import {Course} from '../models/course.model';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.scss']
})
export class ViewCoursesComponent implements OnInit, OnDestroy {

  courses: any[];
  coursesSubscription: Subscription;
  @Input() etat: string;

  elements = [1,2,3,4,5];



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

  deletePrd(id: number){
    this.courseService.deletePrd(id);
  }

  updatePrd(pCourse: Course){
    this.courseService.change(pCourse);
  }



}
