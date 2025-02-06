import { Module } from '@nestjs/common';
import { RoomingListController } from './rooming-list.controller';
import { RoomingListService } from './rooming-list.service';

@Module({
  controllers: [RoomingListController],
  providers: [RoomingListService]
})
export class RoomingListModule {}
