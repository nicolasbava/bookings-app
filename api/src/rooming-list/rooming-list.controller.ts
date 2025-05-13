import {
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  Query,
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

  @UseGuards(JwtAuthGuard)
  @Get('paged')
  async findAllPaged(
    @Query('limit') limit = 10,
    @Query('offset') offset = 0,
    @Query('order') order: 'ASC' | 'DESC' = 'ASC',
  ) {
    return this.roomingListService.findAllPaged(
      Number(limit),
      Number(offset),
      order,
    );
  }

  @UseGuards(JwtAuthGuard)
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
