import { Controller, Delete } from '@nestjs/common';
import { RoomingListBookingService } from './rooming-list-booking.service';

@Controller('rooming-list-booking')
export class RoomingListBookingController {
  constructor(
    private readonly roomingListBookingService: RoomingListBookingService,
  ) {}

  @Delete('delete-all')
  async deleteAllData(): Promise<void> {
    await this.roomingListBookingService.deleteAllData();
  }

//   @Post('import')
//   async importBookings(@Body() data: RoomingListBookingDto[]): Promise<void> {
//     return this.roomingListBookingService.importBookings(data);
//   }

}
