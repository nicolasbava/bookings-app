/* eslint-disable @typescript-eslint/no-unsafe-return */

import { Booking } from 'src/booking/entities/booking.entity';
import { RoomingList } from 'src/rooming-list/entities/rooming-list.entity';
import { Entity, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm';

@Entity('rooming_list_bookings')
export class RoomingListBooking {
  @PrimaryColumn()
  roomingListId!: number;

  @PrimaryColumn()
  bookingId!: number;

  @ManyToOne(() => RoomingList, (roomingList) => roomingList.roomingListId, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'roomingListId' })
  roomingList!: RoomingList;

  @ManyToOne(() => Booking, (booking) => booking.bookingId, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'bookingId' })
  booking!: Booking;
}
