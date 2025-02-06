import { Module } from '@nestjs/common';
import { RoomingListBookingController } from './rooming-list-booking.controller';
import { RoomingListBookingService } from './rooming-list-booking.service';

@Module({
  controllers: [RoomingListBookingController],
  providers: [RoomingListBookingService]
})
export class RoomingListBookingModule {}
