/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoomingListBooking } from './entities/rooming-list-booking.entity';
import { RoomingListBookingDto } from './dto/rooming-list-booking';
import { RoomingList } from 'src/rooming-list/entities/rooming-list.entity';
import { Booking } from 'src/booking/entities/booking.entity';

@Injectable()
export class RoomingListBookingService {
  constructor(
    @InjectRepository(RoomingListBooking)
    private readonly roomingListBookingRepository: Repository<RoomingListBooking>,

    @InjectRepository(RoomingList)
    private readonly roomingListRepository: Repository<RoomingList>,

    @InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>,
  ) {}

  // Method to import bookings
  async importBookings(data: RoomingListBookingDto[]): Promise<void> {
    const bookings = await Promise.all(
      data.map(async (item) => {
        const booking = await this.bookingRepository.findOne({
          where: { bookingId: item.bookingId },
        });

        const roomingList = await this.roomingListRepository.findOne({
          where: { roomingListId: item.roomingListId },
        });

        if (!booking || !roomingList) {
          throw new Error('Booking or RoomingList not found');
        }

        const roomingListBooking = new RoomingListBooking();
        roomingListBooking.booking = booking;
        roomingListBooking.roomingList = roomingList;

        // Map other fields like guestName, checkInDate, etc. if needed

        return roomingListBooking;
      }),
    );

    // Save all roomingListBooking records at once
    await this.roomingListBookingRepository.save(bookings);
  }

  // Delete all records, including related ones, using CASCADE
//   async deleteAllBookings(): Promise<void> {
//     await this.bookingRepository.query(
//       'TRUNCATE TABLE roominglists, roominglistbookings CASCADE',
//     );
//   }
}
