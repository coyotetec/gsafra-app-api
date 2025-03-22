import { Module } from '@nestjs/common';
import { EstoqueController } from './estoque.controller';
import { EstoqueService } from './estoque.service';

@Module({
  imports: [],
  controllers: [EstoqueController],
  providers: [EstoqueService],
})
export class EstoqueModule { }
