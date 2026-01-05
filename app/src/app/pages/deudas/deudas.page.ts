import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonSpinner, IonItem, IonLabel } from '@ionic/angular/standalone';
import { Observable } from 'rxjs';
import { Deuda } from '../../models/Deuda.model';
import { DeudaService } from '../../services/deudaService';

@Component({
  selector: 'app-deudas',
  templateUrl: './deudas.page.html',
  styleUrls: ['./deudas.page.css'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonList, IonSpinner, IonItem, IonLabel]
})
export class DeudasPage implements OnInit {


  deudas$!: Observable<Deuda[]>;
  constructor(private deudaService: DeudaService) {

    this.deudas$ = this.deudaService.deudas$;
  }



  ngOnInit() {
  }

}
