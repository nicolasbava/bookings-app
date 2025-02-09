export class RoomingListBookingDto {
  bookingId!: number;
  roomingListId!: number;
}

export class RoomingListBookingPerBookingDto {
  rlb_roomingListId!: number;
  rlb_bookingId!: number;
  b_bookingId!: number;
  b_hotelId!: number;
  b_eventId!: number;
  b_guestName!: string;
  b_guestPhoneNumber!: string;
  b_checkInDate!: string | Date;
  b_checkOutDate!: string | Date;
}
