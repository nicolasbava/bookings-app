import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/booking';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Get()
  findAll() {
    return this.bookingService.findAll();
  }

  @Post()
  async create(@Body() bookings: CreateBookingDto[]) {
    return this.bookingService.createMultipleBookings(bookings);
  }

//   @Delete('clear')
//   async clearBookings() {
//     await this.bookingService.deleteAllBookings();
//     return { message: 'All bookings have been deleted' };
//   }
}
