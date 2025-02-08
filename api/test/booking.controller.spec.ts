/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/unbound-method */
import { Test, TestingModule } from '@nestjs/testing';
import { BookingController } from '../src/booking/booking.controller';
import { BookingService } from '../src/booking/booking.service';
import { CreateBookingDto } from '../src/booking/dto/booking';

describe('BookingController (Integration)', () => {
  let bookingController: BookingController;
  let bookingService: BookingService;

  const mockBookingService = {
    findAll: jest.fn().mockResolvedValue([
        { 
            bookingId: 1, 
            guestName: 'John Paul',
            hotelId: 3,
            eventId: 1,
            guestPhoneNumber: '1928421984291',
            checkInDate: '2025-04-01',
            checkOutDate: '2025-04-01',
        }
    ]),
    createMultipleBookings: jest
      .fn()
      .mockImplementation((bookings: CreateBookingDto[]) =>
        Promise.resolve(bookings.map((b, index) => ({ id: index + 1, ...b }))),
      ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingController],
      providers: [
        {
          provide: BookingService,
          useValue: mockBookingService,
        },
      ],
    }).compile();

    bookingController = module.get<BookingController>(BookingController);
    bookingService = module.get<BookingService>(BookingService);
  });

  describe('findAll', () => {
    it('should return an array of bookings', async () => {
      await expect(bookingController.findAll()).resolves.toEqual([
        { 
            bookingId: 1, 
            guestName: 'John Paul',
            hotelId: 3,
            eventId: 1,
            guestPhoneNumber: '1928421984291',
            checkInDate: '2025-04-01',
            checkOutDate: '2025-04-01',

        },
      ]);
      expect(bookingService.findAll).toHaveBeenCalledTimes(1);
    });
  });

//   it('should create multiple bookings', async () => {
//     const createBookingDto: CreateBookingDto[] = [
//       {
//         bookingId: 1,
//         hotelId: 100,
//         eventId: 200,
//         guestName: 'John Doe',
//         guestPhoneNumber: '+1234567890',
//         checkInDate: '2025-02-01',
//         checkOutDate: '2025-02-05',
//       },
//       {
//         bookingId: 2,
//         hotelId: 101,
//         eventId: 201,
//         guestName: 'Jane Smith',
//         guestPhoneNumber: '+0987654321',
//         checkInDate: '2025-03-10',
//         checkOutDate: '2025-03-15',
//       },
//     ];

//     jest
//       .spyOn(bookingService, 'createMultipleBookings')
//       .mockResolvedValue(createBookingDto);

//     const result = await bookingController.create(createBookingDto);
//     expect(result).toEqual(createBookingDto);
//     expect(bookingService.createMultipleBookings).toHaveBeenCalledWith(
//       createBookingDto,
//     );
//   });
});
