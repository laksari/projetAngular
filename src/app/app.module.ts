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
import { DeleteProduitComponent } from './delete-produit/delete-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { AccueilComponent } from './accueil/accueil.component';

const route: Routes = [ {path: 'accueil', component: AccueilComponent},
                        {path: 'lstCourse', component: ViewCoursesComponent},
                        {path: 'ajoutPdt', component: NewProduitComponent},
                        {path: 'deletePdt', component: DeleteProduitComponent},
                        {path: 'editPdt', component: EditProduitComponent},
                        {path: '', component: AccueilComponent}];

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ViewCoursesComponent,
    NewProduitComponent,
    NavbarComponent,
    SidebarComponent,
    DeleteProduitComponent,
    EditProduitComponent,
    AccueilComponent
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
