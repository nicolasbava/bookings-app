import { Controller, Post, Body } from '@nestjs/common';
import { RoomingListBookingService } from './rooming-list-booking.service';
import { RoomingListBookingDto } from './dto/rooming-list-booking';

@Controller('rooming-list-booking')
export class RoomingListBookingController {
  constructor(
    private readonly roomingListBookingService: RoomingListBookingService,
  ) {}

  @Post('import')
  async importBookings(@Body() data: RoomingListBookingDto[]): Promise<void> {
    return this.roomingListBookingService.importBookings(data);
  }

//   @Delete('delete-all')
//   async deleteAllBookings(): Promise<void> {
//     return this.roomingListBookingService.deleteAllBookings();
//   }
}
