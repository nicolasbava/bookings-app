import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RoomingListBooking } from '../../rooming-list-booking/entities/rooming-list-booking.entity';

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn()
  booking_id: number;

  @Column()
  customer_name: string;

  @Column({ type: 'date' })
  checkin_date: string;

  @Column({ type: 'date' })
  checkout_date: string;

  @OneToMany(() => RoomingListBooking, (rlb) => rlb.booking)
  roomingListBookings: RoomingListBooking[];
}
