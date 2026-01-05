export type DeudaTipo = 'DEBO' | 'ME_DEBE';
export type DeudaEstado = 'ACTIVA' | 'PAGADA' | 'ATRASADA';
// export type InterestType = 'NONE' | 'SIMPLE' | 'COMPUESTO';

export interface Deuda {
  id: string;
  UsuarioId: string;
//   partyId: string;

  tipo: DeudaTipo;
  titulo: string;

  montoTotal: number;
  montoPagado: number;

//   tasaInteres?: number;
//   tipoInteres: InterestType;

  fechaInicio: string;
  fechaVencimiento?: string;

  estado: DeudaEstado;
  notas?: string;
}