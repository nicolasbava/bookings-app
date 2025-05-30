import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { RoomingListBooking } from '../../rooming-list-booking/entities/rooming-list-booking.entity';

@Entity('bookings')
export class Booking {
  @PrimaryColumn()
  bookingId!: number;

  @Column({ nullable: true })
  hotelId!: number;

  @Column({ nullable: true })
  eventId!: number;

  @Column({ nullable: true, length: 255 })
  guestName!: string;

  @Column({ nullable: true, length: 255 })
  guestPhoneNumber!: string;

  @Column({ type: 'date', nullable: true })
  checkInDate!: string | null;

  @Column({ type: 'date', nullable: true })
  checkOutDate!: string | null;

  @OneToMany(() => RoomingListBooking, (rlb) => rlb.booking)
  roomingListBookings!: RoomingListBooking[];
}
