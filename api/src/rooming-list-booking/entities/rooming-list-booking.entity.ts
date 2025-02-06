import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { RoomingList } from '../../rooming-list/entities/rooming-list.entity';
import { Booking } from '../../booking/entities/booking.entity';

@Entity('rooming_list_bookings')
export class RoomingListBooking {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(
    () => RoomingList,
    (roomingList) => roomingList.roomingListBookings,
    { onDelete: 'CASCADE' },
  )
  roomingList!: RoomingList;

  @ManyToOne(() => Booking, (booking) => booking.roomingListBookings, {
    onDelete: 'CASCADE',
  })
  booking!: Booking;
}
