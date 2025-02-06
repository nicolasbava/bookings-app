import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './entities/booking.entity';
import { CreateBookingDto } from './dto/booking';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>,
  ) {}

  findAll() {
    return this.bookingRepository.find({
      relations: ['roomingListBookings'],
    });
  }

  async createMultipleBookings(
    bookings: CreateBookingDto[],
  ): Promise<Booking[]> {
    return await this.bookingRepository.save(bookings);
  }

//   async deleteAllBookings(): Promise<void> {
//     // First delete from child tables (if they exist)
//     await this.bookingRepository.query(
//       'ALTER TABLE roominglistbookings DROP CONSTRAINT roominglistbookings_bookingid_fkey CASCADE;',
//     );

//     await this.bookingRepository.query(
//       'TRUNCATE TABLE roominglistbookings, bookings, roominglists CASCADE;',
//     );

//     await this.bookingRepository.query(
//       'ALTER TABLE roominglistbookings ADD CONSTRAINT roominglistbookings_bookingid_fkey FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE;',
//     );

//     // Then delete from the `roominglists` table
//     await this.bookingRepository.clear();
//   }
}
