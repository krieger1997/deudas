import { Injectable } from '@angular/core';
import { Deuda } from '../models/Deuda.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeudaService {
  constructor() {
    this.loadInitialData();
  }

  private deudasSubject = new BehaviorSubject<Deuda[]>([]);
  deudas$ = this.deudasSubject.asObservable();

  private loadInitialData() {
    const mock: Deuda[] = [
      {
        id: '1',
        UsuarioId: 'user-1',
        tipo: 'DEBO',
        titulo: 'Crédito banco',
        montoTotal: 500000,
        montoPagado: 150000,
        // tipoInteres: 'SIMPLE',
        // tasaInteres: 2.1,
        fechaInicio: '2025-01-01',
        fechaVencimiento: '2025-12-31',
        estado: 'ACTIVA'
      },
      {
        id: '2',
        UsuarioId: 'user-1',
        tipo: 'ME_DEBE',
        titulo: 'Préstamo a amigo',
        montoTotal: 100000,
        montoPagado: 0,
        // tipoInteres: 'NONE',
        fechaInicio: '2025-02-10',
        estado: 'ACTIVA'
      }
    ];

    this.deudasSubject.next(mock);
  }



  getTodo(): Deuda[] {
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

  marcarPagado(id: string) {
    const debt = this.getPorId(id);
    if (!debt) return;

    debt.montoPagado = debt.montoTotal;
    debt.estado = 'PAGADA';

    this.actualiza(debt);
  }
}
