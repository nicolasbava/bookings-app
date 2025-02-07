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
    // Step 1: Fetch rooming lists with their related bookings
    const roomingLists = await this.roomingListRepository
      .createQueryBuilder('rooming_list')
      .leftJoinAndSelect(
        'rooming_list.roomingListBookings',
        'roomingListBookings',
      )
      .leftJoinAndSelect('roomingListBookings.booking', 'booking') // Join booking details for dates
      .orderBy('rooming_list.eventName', 'ASC')
      .getMany();

    // Step 2: Group rooming lists by event name and calculate min/max dates
    const groupedRoomingLists = this.groupByEventNameAndCalcDate(roomingLists);
    return groupedRoomingLists;
  }

  private groupByEventNameAndCalcDate(roomingLists: RoomingList[]) {
    return roomingLists.reduce(
      (acc, roomingList) => {
        if (!acc[roomingList.eventName]) {
          acc[roomingList.eventName] = [];
        }

        // Step 3: Calculate the min and max dates for each rooming list
        const { minDate, maxDate } = this.calculateBookingDates(roomingList);
        roomingList['minDate'] = minDate;
        roomingList['maxDate'] = maxDate;

        acc[roomingList.eventName].push(roomingList);
        return acc;
      },
      {} as Record<string, RoomingList[]>,
    );
  }

  private calculateBookingDates(roomingList: RoomingList) {
    if (roomingList.roomingListBookings.length === 0) {
      return { minDate: null, maxDate: null };
    }

    // Extract the check-in and check-out dates from all bookings
    const dates = roomingList.roomingListBookings.map((rlb) => {
      const booking = rlb.booking;
      return {
        checkInDate: new Date(booking.checkInDate!),
        checkOutDate: new Date(booking.checkOutDate!),
      };
    });

    // Calculate the minimum check-in and maximum check-out dates
    const minDate = new Date(
      Math.min(...dates.map((d) => d.checkInDate.getTime())),
    );
    const maxDate = new Date(
      Math.max(...dates.map((d) => d.checkOutDate.getTime())),
    );

    return {
      minDate: minDate.toISOString().split('T')[0],
      maxDate: maxDate.toISOString().split('T')[0],
    };
  }

  async createRoomingLists(
    roomingLists: RoomingList[],
  ): Promise<RoomingList[]> {
    return this.roomingListRepository.save(roomingLists);
  }
}
