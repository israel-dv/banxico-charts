import { Dato } from './Dato.types';

export type Serie = {
  readonly idSerie: string;
  titulo: string;
  datos: Dato[];
};
