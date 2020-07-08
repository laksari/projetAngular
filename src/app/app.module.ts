import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import {CourseService} from './services/course.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { NewProduitComponent } from './new-produit/new-produit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {ReactiveFormsModule} from '@angular/forms';

const route: Routes = [{path: 'lstCourse', component: ViewCoursesComponent},
                        {path: 'ajoutPdt', component: NewProduitComponent},
                        {path: '', component: ViewCoursesComponent}];

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ViewCoursesComponent,
    NewProduitComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(route),
    ReactiveFormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
