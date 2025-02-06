import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RoomingListBooking } from '../../rooming-list-booking/entities/rooming-list-booking.entity';

@Entity('rooming_lists')
export class RoomingList {
  @PrimaryGeneratedColumn()
  roomingList_id: number;

  @Column()
  event_id: number;

  @Column()
  event_name: string;

  @Column()
  hotel_id: number;

  @Column()
  rfp_name: string;

  @Column({ type: 'date' })
  cutOff_date: string;

  @Column()
  status: string;

  @Column()
  agreement_type: string;

  @OneToMany(() => RoomingListBooking, (rlb) => rlb.rooming_list)
  roomingListBookings: RoomingListBooking[];
}
