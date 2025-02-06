export class CreateBookingDto {
  bookingId!: number;
  hotelId!: number;
  eventId!: number;
  guestName!: string;
  guestPhoneNumber!: string;
  checkInDate!: string;
  checkOutDate!: string;
}
