import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Post,
} from '@nestjs/common';
import { RoomingListBookingService } from './rooming-list-booking.service';
import { RoomingListBookingDto } from './dto/rooming-list-booking';

@Controller('rooming-list-booking')
export class RoomingListBookingController {
  constructor(
    private readonly roomingListBookingService: RoomingListBookingService,
  ) {}

  @Delete('delete-all')
  async deleteAllData(): Promise<void> {
    try {
      await this.roomingListBookingService.deleteAllData();
    } catch (error) {
      throw new InternalServerErrorException(
        error,
        'Failed to delete all data',
      );
    }
  }

  @Get(':roomingListId')
  getBookings(@Param('roomingListId') roomingListId: number) {
    try {
      return this.roomingListBookingService.getRoomingListBookings(
        roomingListId,
      );
    } catch (error) {
      throw new InternalServerErrorException(
        error,
        'Failed to get rooming list',
      );
    }
  }

  @Post()
  async importBookings(@Body() data: RoomingListBookingDto[]): Promise<void> {
    try {
      return this.roomingListBookingService.importBookings(data);
    } catch (error) {
      throw new InternalServerErrorException(error, 'Failed to import booking');
    }
  }
}
