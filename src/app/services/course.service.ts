import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course} from '../models/course.model';

@Injectable()
export class CourseService {

  constructor(private httpClient: HttpClient ){
  }

  private courses = [];

  courseSubjetc = new Subject<any[]>();

  emisCoursesSubject(){
    this.courseSubjetc.next(this.courses.slice());
  }


  getCourses(){
   this.httpClient.get<any[]>("http://localhost:8080/courses").subscribe(
     (response)=>{
         this.courses = response;
         this.emisCoursesSubject();
     },
     (error)=>{
       console.log("Erreur lors du chargement de la liste des courses "+error);
    }
   );
  }

  saveCourse(pcourse: Course) {
  this.httpClient.post('http://localhost:8080/courses', pcourse).subscribe(
    () => {
      console.log("Enregistrement effectué");
      this.getCourses();
    },
    (error)=>{
      console.log("erreur lors de l'enregistrement "+error);
    }
  );
  }
}
