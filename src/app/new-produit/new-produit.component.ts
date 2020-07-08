import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CourseService} from '../services/course.service';
import {Course} from '../models/course.model';

@Component({
  selector: 'app-new-produit',
  templateUrl: './new-produit.component.html',
  styleUrls: ['./new-produit.component.scss']
})
export class NewProduitComponent implements OnInit {

  newProduitForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private courseService: CourseService) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmitForm(){
    const formValue = this.newProduitForm.value;
    const course = new Course(null,formValue['libelle'], formValue['quantite']);
    this.courseService.saveCourse(course);
  }

  initForm(){
    this.newProduitForm = this.formBuilder.group({
      libelle: [''],
      quantite: ['']
    });
  }

}
