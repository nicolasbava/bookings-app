import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RoomingListBookingService } from './rooming-list-booking.service';
import { RoomingListBookingDto } from './dto/rooming-list-booking';

@Controller('rooming-list-booking')
export class RoomingListBookingController {
  constructor(
    private readonly roomingListBookingService: RoomingListBookingService,
  ) {}

  @Delete('delete-all')
  async deleteAllData(): Promise<void> {
    await this.roomingListBookingService.deleteAllData();
  }

  @Get(':roomingListId')
  getBookings(@Param('roomingListId') roomingListId: number) {
    return this.roomingListBookingService.getRoomingListBookings(roomingListId);
  }

  @Post()
  async importBookings(@Body() data: RoomingListBookingDto[]): Promise<void> {
    return this.roomingListBookingService.importBookings(data);
  }
}
