import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomingList } from './entities/rooming-list.entity';
import { RoomingListService } from './rooming-list.service';
import { RoomingListController } from './rooming-list.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RoomingList])],
  providers: [RoomingListService],
  controllers: [RoomingListController],
  exports: [RoomingListService],
})
export class RoomingListModule {}
