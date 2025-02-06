import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoomingList } from './entities/rooming-list.entity';

@Injectable()
export class RoomingListService {
  constructor(
    @InjectRepository(RoomingList)
    private readonly roomingListRepository: Repository<RoomingList>,
  ) {}

  findAll() {
    return this.roomingListRepository.find({
      relations: ['roomingListBookings'],
    });
  }
}
