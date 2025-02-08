import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomingListBookingService } from './rooming-list-booking.service';
import { RoomingListBookingController } from './rooming-list-booking.controller';
import { RoomingListBooking } from './entities/rooming-list-booking.entity';
import { RoomingList } from '../rooming-list/entities/rooming-list.entity';
import { Booking } from '../booking/entities/booking.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoomingListBooking, RoomingList, Booking]),
  ],
  providers: [RoomingListBookingService],
  controllers: [RoomingListBookingController],
})
export class RoomingListBookingModule {}
