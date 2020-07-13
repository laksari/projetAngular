import {Subject} from 'rxjs';
import {EventEmitter, Injectable, Output} from '@angular/core';
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

  @Output() produit: EventEmitter<Course> = new EventEmitter();

  change(pProduit: Course) {
    //this.isOpen = !this.isOpen;
    this.produit.emit(pProduit);
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

  updateCourse(pcourse: Course) {
    this.httpClient.put('http://localhost:8080/courses',pcourse ).subscribe(
      () => {
        console.log("Mise a jour effectuée");
        this.getCourses();
      },
      (error)=>{
        console.log("erreur lors de la mise a jour "+error);
      }
    );
  }

  deletePrd(id: number){
    this.httpClient.delete('http://localhost:8080/courses/'+ id).subscribe(
      ()=>{
        console.log("Suppression effectuée");
        this.getCourses();
      },
      (error)=>{
        console.log("erreur lors de la suppression "+id);
      }
    )
  }
}
