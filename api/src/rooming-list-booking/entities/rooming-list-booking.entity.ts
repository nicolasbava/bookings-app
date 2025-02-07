/* eslint-disable @typescript-eslint/no-unsafe-return */
// import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
// import { RoomingList } from '../../rooming-list/entities/rooming-list.entity';
// import { Booking } from '../../booking/entities/booking.entity';

// @Entity('rooming_list_bookings')
// export class RoomingListBooking {
//   @PrimaryGeneratedColumn()
//   id!: number;

//   @ManyToOne(
//     () => RoomingList,
//     (roomingList) => roomingList.roomingListBookings,
//     { onDelete: 'CASCADE' },
//   )
//   roomingList!: RoomingList;

//   @ManyToOne(() => Booking, (booking) => booking.roomingListBookings, {
//     onDelete: 'CASCADE',
//   })
//   booking!: Booking;
// }

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
