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

  async findAll() {
    const roomingLists = await this.roomingListRepository.find({
      relations: ['roomingListBookings', 'roomingListBookings.booking'],
    });

    return this.groupByEventNameAndCalcDate(roomingLists);
  }

  // async findAllByEventName() {
  //   const roomingLists = await this.roomingListRepository
  //     .createQueryBuilder('rooming_list')
  //     .leftJoinAndSelect(
  //       'rooming_list.roomingListBookings',
  //       'roomingListBookings',
  //     )
  //     .orderBy('rooming_list.eventName', 'ASC')
  //     .getMany();

  //   const groupedByEvent = roomingLists.reduce(
  //     (acc, roomingList) => {
  //       let eventGroup = acc.find((e) => e.eventName === roomingList.eventName);
  //       if (!eventGroup) {
  //         eventGroup = { eventName: roomingList.eventName, roomingLists: [] };
  //         acc.push(eventGroup);
  //       }
  //       eventGroup.roomingLists.push(roomingList);
  //       return acc;
  //     },
  //     [] as { eventName: string; roomingLists: RoomingList[] }[],
  //   );

  //   return groupedByEvent;
  // }

  async findAllByEventName() {
    const roomingLists = await this.roomingListRepository
      .createQueryBuilder('rooming_list')
      .leftJoinAndSelect(
        'rooming_list.roomingListBookings',
        'roomingListBookings',
      )
      .leftJoinAndSelect('roomingListBookings.booking', 'booking')
      .orderBy('rooming_list.eventName', 'ASC')
      .getMany();

    return this.groupByEventNameAndCalcDate(roomingLists);
  }

  // private groupByEventNameAndCalcDate(roomingLists: RoomingList[]) {
  //   return roomingLists.reduce(
  //     (acc, roomingList) => {
  //       if (!acc[roomingList.eventName]) {
  //         acc[roomingList.eventName] = [];
  //       }

  //       const { minDate, maxDate } = this.calculateBookingDates(roomingList);
  //       roomingList['minDate'] = minDate;
  //       roomingList['maxDate'] = maxDate;

  //       acc[roomingList.eventName].push(roomingList);
  //       return acc;
  //     },
  //     {} as Record<string, RoomingList[]>,
  //   );
  // }

  private groupByEventNameAndCalcDate(roomingLists: RoomingList[]) {
    const grouped = roomingLists.reduce(
      (acc, roomingList) => {
        let eventGroup = acc.find((e) => e.eventName === roomingList.eventName);

        if (!eventGroup) {
          eventGroup = { eventName: roomingList.eventName, data: [] };
          acc.push(eventGroup);
        }

        const { minDate, maxDate } = this.calculateBookingDates(roomingList);
        roomingList['minDate'] = minDate;
        roomingList['maxDate'] = maxDate;

        eventGroup.data.push(roomingList);

        return acc;
      },
      [] as { eventName: string; data: RoomingList[] }[],
    );

    return grouped;
  }

  private calculateBookingDates(roomingList: RoomingList) {
    if (roomingList.roomingListBookings.length === 0) {
      return { minDate: null, maxDate: null };
    }

    const dates = roomingList.roomingListBookings.map((rlb) => {
      const booking = rlb.booking;
      return {
        checkInDate: new Date(booking.checkInDate!),
        checkOutDate: new Date(booking.checkOutDate!),
      };
    });

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
