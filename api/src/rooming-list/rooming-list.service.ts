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

  async findAllByEventName() {
    const roomingLists = await this.roomingListRepository
      .createQueryBuilder('rooming_list')
      .leftJoinAndSelect(
        'rooming_list.roomingListBookings',
        'roomingListBookings',
      )
      .orderBy('rooming_list.eventName', 'ASC')
      .getMany();

    return roomingLists.reduce(
      (acc, roomingList) => {
        if (!acc[roomingList.eventName]) {
          acc[roomingList.eventName] = [];
        }
        acc[roomingList.eventName].push(roomingList);
        return acc;
      },
      {} as Record<string, RoomingList[]>,
    );
  }

  async createRoomingLists(
    roomingLists: RoomingList[],
  ): Promise<RoomingList[]> {
    return this.roomingListRepository.save(roomingLists);
  }
}
