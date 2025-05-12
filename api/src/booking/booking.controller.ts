import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/booking';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.guard';
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
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
