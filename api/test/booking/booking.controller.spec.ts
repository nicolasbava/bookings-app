/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/unbound-method */
import { Test, TestingModule } from '@nestjs/testing';
import { BookingController } from '../../src/booking/booking.controller';
import { BookingService } from '../../src/booking/booking.service';
import { CreateBookingDto } from '../../src/booking/dto/booking';

describe('BookingController', () => {
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

});
