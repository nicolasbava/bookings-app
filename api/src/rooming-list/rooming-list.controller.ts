import { Controller, Get } from '@nestjs/common';
import { RoomingListService } from './rooming-list.service';

@Controller('rooming-list')
export class RoomingListController {
  constructor(private readonly roomingListService: RoomingListService) {}

  @Get()
  findAll() {
    return this.roomingListService.findAll();
  }

//   @Delete('clear')
//   async clearBookings() {
//     await this.roomingListService.deleteAllBookings();
//     return { message: 'All bookings have been deleted' };
//   }
}
