/* eslint-disable @typescript-eslint/unbound-method */
import { Test, TestingModule } from '@nestjs/testing';
import { BookingController } from '../src/booking/booking.controller';
import { BookingService } from '../src/booking/booking.service';
import { CreateBookingDto } from '../src/booking/dto/booking';

describe('BookingController (Integration)', () => {
  let bookingController: BookingController;
  let bookingService: BookingService;

  const mockBookingService = {
    findAll: jest.fn().mockResolvedValue([{ id: 1, name: 'Booking 1' }]),
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
        { id: 1, name: 'Booking 1' },
      ]);
      expect(bookingService.findAll).toHaveBeenCalledTimes(1);
    });
  });

//   describe('create', () => {
//     it('should create multiple bookings', async () => {
//       const newBookings: CreateBookingDto[] = [
//         { name: 'Booking A' },
//         { name: 'Booking B' },
//       ];

//       await expect(bookingController.create(newBookings)).resolves.toEqual([
//         { id: 1, name: 'Booking A' },
//         { id: 2, name: 'Booking B' },
//       ]);

//       expect(bookingService.createMultipleBookings).toHaveBeenCalledWith(
//         newBookings,
//       );
//       expect(bookingService.createMultipleBookings).toHaveBeenCalledTimes(1);
//     });
//   });
});
