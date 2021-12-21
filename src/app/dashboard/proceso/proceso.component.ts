import { Component, OnInit } from '@angular/core';
import * as highchartsData from '../../shared/data/analytics.highchartsData';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";






@Component({
  selector: 'app-proceso',
  templateUrl: './proceso.component.html',
  styleUrls: ['./proceso.component.scss']
})
export class ProcesoComponent implements OnInit {


  

  constructor(private router: Router) {


   }

  ngOnInit(): void {
    $.getScript('./assets/js/analytics-dashboard.js');
    $.getScript('./assets/plugins/Drag-And-Drop/imageuploadify.min.js');
    $.getScript("./assets/js/add-new-product-image-upload.js")
  }

  public sendInfo(form: NgForm): boolean {
    // this.createRegistro();
    // this.objProfessor = new Professor(0, '', '', '', '');
    // this.objProfessorUniversity = new ProfessorUniversity(this.objProfessor, this.objUniversity);
    // this.ToastrModal('The professor has been <b>created</b> successfully', 'Success', 1);
    // this.router.navigate(['/professor/view']);
     return true;
  }

  // public createRegistro(): void {
  //   this.objProfessor.cod = ARRAY_PROFESSOR.length + 1;
  //   ARRAY_PROFESSOR.push(this.objProfessor);
  //   ARRAY_PROFESSOR_UNIVERSITY.push(this.objProfessorUniversity);
  //   this.router.navigate(['/professor/view']);
  //   console.log(ARRAY_PROFESSOR_UNIVERSITY);
  //   for (let index = 0; index < this.tempArray.length; index++) {
  //     const element = this.tempArray[index];
  //     this.objProfessorUniversity = new ProfessorUniversity(this.objProfessor, element);
  //     ARRAY_PROFESSOR_UNIVERSITY.push(this.objProfessorUniversity);
  //   }
  // }

}
