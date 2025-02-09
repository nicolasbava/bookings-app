import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoomingListService } from './rooming-list.service';
import { RoomingList } from './entities/rooming-list.entity';

@Controller('rooming-lists')
export class RoomingListController {
  constructor(private readonly roomingListService: RoomingListService) {}

  @Get()
  findAllByEventName() {
    return this.roomingListService.findAllByEventName();
  }

  @Post()
  async createRoomingLists(
    @Body() roomingLists: RoomingList[],
  ): Promise<RoomingList[]> {
    return this.roomingListService.createRoomingLists(roomingLists);
  }
}
