import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/booking';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Get()
  findAll() {
    try {
      return this.bookingService.findAll();
    } catch (error) {
      throw new InternalServerErrorException(
        error,
        'Failed to fetch rooming lists',
      );
    }
  }

  @Post()
  async create(@Body() bookings: CreateBookingDto[]) {
    try {
      return this.bookingService.createMultipleBookings(bookings);
    } catch (error) {
      throw new InternalServerErrorException(
        error,
        'Failed to create bookings',
      );
    }
  }
}
