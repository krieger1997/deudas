import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonSpinner, IonItem, IonLabel, IonCardHeader, IonCardTitle, IonCard, IonCardContent, IonCardSubtitle } from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { Deuda } from '../../models/Deuda.model';
import { DeudaService } from '../../services/deudaService';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.css'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCardHeader, IonCardTitle, IonCard, IonCardContent, IonCardSubtitle]
})
export class IndexPage implements OnInit {

  deudaDebo: number = 0;
  deudaMeDeben: number = 0;
  cantidadDebo: number = 0;
  cantidadMeDeben: number = 0;
  deudas$!: Observable<Deuda[]>;
  constructor(private deudaService: DeudaService) {

    this.deudas$ = this.deudaService.deudas$;
  }



  ngOnInit() {
    this.deudaDebo = this.deudaService.getTotalDebo();
    this.deudaMeDeben = this.deudaService.getTotalMeDebe();
    this.cantidadDebo = this.deudaService.getCantidadDebo();
    this.cantidadMeDeben = this.deudaService.getCantidadMeDebe();
    console.log("hola")
  }




  detalleDebo() {
    console.log("Detalle debo");
    
  }


  detalleMeDeben() {

  }
}
