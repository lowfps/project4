import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-programa-academico',
  templateUrl: './programa.academico.component.html',
  styleUrls: ['./programa.academico.scss']
})
export class ProgramaComponent implements OnInit {

 

  constructor() {


  }

  ngOnInit(): void {
    $.getScript('./assets/js/e-commerce-dashboard.js');
    
  }

  


}
