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

  async findAllPaged(
    limit = 10,
    offset = 0,
    order: 'ASC' | 'DESC' = 'ASC',
  ): Promise<[Booking[], number]> {
    return this.bookingRepository.findAndCount({
      skip: offset,
      take: limit,
      order: { checkOutDate: order },
    });
  }

  async createMultipleBookings(
    bookings: CreateBookingDto[],
  ): Promise<Booking[]> {
    return await this.bookingRepository.save(bookings);
  }
}
