import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CourseService} from '../services/course.service';
import {Course} from '../models/course.model';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.scss']
})
export class EditProduitComponent implements OnInit {

  editProduitForm: FormGroup;
  course: Course = new Course();

  constructor(private formBuilder: FormBuilder, private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.produit.subscribe(
      (response)=> {
          this.course = response;
      }
    );


    this.initForm();
  }

  onSubmitForm(){
    const formValue = this.editProduitForm.value;
     this.course.libelle = formValue['libelle'];
     this.course.quantite = formValue['quantite'];
     this.courseService.updateCourse(this.course);
     this.initForm();
  }

  initForm(){
    //this.course = this.courseService.pCourse;
    this.editProduitForm = this.formBuilder.group({
      libelle: ['', Validators.required],
      quantite: ['', Validators.required]
    });
  }

}
