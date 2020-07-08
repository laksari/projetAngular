import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  @Input() id: number;
  @Input() libelle: string;
  @Input() quantite: number;


  constructor() { }

  ngOnInit(): void {
  }

}
