import { Dispositivo } from './entities/dispositivo.entity';

export abstract class DispositivosRepository {
  abstract findById(
    host: string,
    code: string,
    id: number,
  ): Promise<Dispositivo>;

  abstract create(
    host: string,
    code: string,
    dispositivo: Dispositivo,
  ): Promise<Dispositivo>;
}
