import { Injectable } from '@angular/core';
import { Deuda } from '../models/Deuda.model';
import { BehaviorSubject } from 'rxjs';
import { Persona } from '../models/Persona.model';

@Injectable({
  providedIn: 'root',
})
export class DeudaService {
  constructor() {
    // setTimeout(() => {
      this.loadInitialData();
    // }, 3000);
  }

  private deudasSubject = new BehaviorSubject<Deuda[]>([]);
  deudas$ = this.deudasSubject.asObservable();

  private loadInitialData() {

    const Persona1:Persona = {
      id:'1',
      nombre: 'Nico',
      creacion: '2026-01-09'
    };
    const Persona2:Persona = {
      id:'2',
      nombre: 'Belen',
      creacion: '2026-01-09'
    };
    const Persona3:Persona = {
      id:'3',
      nombre: 'CMR',
      creacion: '2026-01-09'
    };


    const mock: Deuda[] = [
      {
        id: '1',
        UsuarioId: 'user-1',
        tipo: 'DEBO',
        titulo: 'San josé Nico',
        montoTotal: 8000,
        montoPagado: 0,
        fechaInicio: '2026-01-06',
        fechaVencimiento: '2026-01-31',
        estado: 'ACTIVA',
        personaEntidad:Persona1
      },
      {
        id: '2',
        UsuarioId: 'user-1',
        tipo: 'ME_DEBE',
        titulo: 'Taos Nico',
        montoTotal: 7990,
        montoPagado: 0,
        fechaInicio: '2026-01-09',
        estado: 'ACTIVA',
        personaEntidad:Persona1

      },
      {
        id: '3',
        UsuarioId: 'user-1',
        tipo: 'ME_DEBE',
        titulo: 'Taos Belen',
        montoTotal: 4990,
        montoPagado: 0,
        fechaInicio: '2026-01-09',
        estado: 'ACTIVA',
        personaEntidad:Persona2

      },
      {
        id: '3',
        UsuarioId: 'user-1',
        tipo: 'DEBO',
        titulo: 'Taos Belen',
        montoTotal: 3100,
        montoPagado: 0,
        fechaInicio: '2026-01-09',
        estado: 'ACTIVA',
        personaEntidad:Persona2

      }
      //
    ];

    this.deudasSubject.next(mock);
  }



  getTodo(): Deuda[] {
    // console.log(this.deudasSubject.value)
    return this.deudasSubject.value;
    
  }

  getPorId(id: string): Deuda | undefined {
    return this.getTodo().find(d => d.id === id);
  }

  agrega(debt: Deuda) {
    this.deudasSubject.next([...this.getTodo(), debt]);
  }

  actualiza(debt: Deuda) {
    const updated = this.getTodo().map(d =>
      d.id === debt.id ? debt : d
    );
    this.deudasSubject.next(updated);
  }

  elimina(id: string) {
    const filtered = this.getTodo().filter(d => d.id !== id);
    this.deudasSubject.next(filtered);
  }

  // --------------------
  // Cálculos
  // --------------------
  getTotalDebo(): number {
    return this.getTodo()
      .filter(d => d.tipo === 'DEBO' && d.estado !== 'PAGADA')
      .reduce((acc, d) => acc + (d.montoTotal - d.montoPagado), 0);
  }

  getTotalMeDebe(): number {
    return this.getTodo()
      .filter(d => d.tipo === 'ME_DEBE' && d.estado !== 'PAGADA')
      .reduce((acc, d) => acc + (d.montoTotal - d.montoPagado), 0);
  }
  
  getCantidadDebo(): number {
    return this.getTodo()
      .filter(d => d.tipo === 'DEBO' && d.estado !== 'PAGADA')
      .length;
  }

  getCantidadMeDebe(): number {
    return this.getTodo()
      .filter(d => d.tipo === 'ME_DEBE' && d.estado !== 'PAGADA')
      .length;
  }

  marcarPagado(id: string) {
    const debt = this.getPorId(id);
    if (!debt) return;

    debt.montoPagado = debt.montoTotal;
    debt.estado = 'PAGADA';

    this.actualiza(debt);
  }
}
