import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { RoomingListService } from './rooming-list.service';
import { RoomingList } from './entities/rooming-list.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('rooming-lists')
export class RoomingListController {
  constructor(private readonly roomingListService: RoomingListService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAllByEventName() {
    try {
      return this.roomingListService.findAllByEventName();
    } catch (error) {
      throw new InternalServerErrorException(
        error,
        'Failed to fetch rooming lists',
      );
    }
  }

  @Post()
  async createRoomingLists(
    @Body() roomingLists: RoomingList[],
  ): Promise<RoomingList[]> {
    try {
      return this.roomingListService.createRoomingLists(roomingLists);
    } catch (error) {
      throw new InternalServerErrorException(
        error,
        'Failed to create rooming lists',
      );
    }
  }
}
