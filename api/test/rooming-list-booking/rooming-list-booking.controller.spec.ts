/* eslint-disable @typescript-eslint/unbound-method */
import { RoomingListBookingDto } from '../../src/rooming-list-booking/dto/rooming-list-booking';
import { RoomingListBookingController } from '../../src/rooming-list-booking/rooming-list-booking.controller';
import { RoomingListBookingService } from '../../src/rooming-list-booking/rooming-list-booking.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('RoomingListBookingController', () => {
  let controller: RoomingListBookingController;
  let service: RoomingListBookingService;

  const mockRoomingListBookingService = {
    deleteAllData: jest.fn().mockResolvedValue(undefined),
    getRoomingListBookings: jest.fn().mockResolvedValue([
      {
        rlb_roomingListId: 1,
        rlb_bookingId: 1,
        b_bookingId: 1,
        b_hotelId: 101,
        b_eventId: 1,
        b_guestName: 'John Doe',
        b_guestPhoneNumber: '1234567890',
        b_checkInDate: '2025-09-01T06:00:00.000Z',
        b_checkOutDate: '2025-09-05T06:00:00.000Z',
      },
      {
        rlb_roomingListId: 1,
        rlb_bookingId: 2,
        b_bookingId: 2,
        b_hotelId: 101,
        b_eventId: 1,
        b_guestName: 'Alice Smith',
        b_guestPhoneNumber: '2345678901',
        b_checkInDate: '2025-09-02T06:00:00.000Z',
        b_checkOutDate: '2025-09-06T06:00:00.000Z',
      },
    ]),
    importBookings: jest.fn().mockResolvedValue(undefined),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomingListBookingController],
      providers: [
        {
          provide: RoomingListBookingService,
          useValue: mockRoomingListBookingService,
        },
      ],
    }).compile();

    controller = module.get<RoomingListBookingController>(
      RoomingListBookingController,
    );
    service = module.get<RoomingListBookingService>(RoomingListBookingService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('deleteAllData', () => {
    it('should call service.deleteAllData()', async () => {
      await controller.deleteAllData();
      expect(service.deleteAllData).toHaveBeenCalled();
    });
  });

  describe('getBookings', () => {
    it('should return rooming list bookings for a given roomingListId', async () => {
      const roomingListId = 1;
      const result = await controller.getBookings(roomingListId);

      expect(service.getRoomingListBookings).toHaveBeenCalledWith(
        roomingListId,
      );
      expect(result).toEqual([
        {
          rlb_roomingListId: 1,
          rlb_bookingId: 1,
          b_bookingId: 1,
          b_hotelId: 101,
          b_eventId: 1,
          b_guestName: 'John Doe',
          b_guestPhoneNumber: '1234567890',
          b_checkInDate: '2025-09-01T06:00:00.000Z',
          b_checkOutDate: '2025-09-05T06:00:00.000Z',
        },
        {
          rlb_roomingListId: 1,
          rlb_bookingId: 2,
          b_bookingId: 2,
          b_hotelId: 101,
          b_eventId: 1,
          b_guestName: 'Alice Smith',
          b_guestPhoneNumber: '2345678901',
          b_checkInDate: '2025-09-02T06:00:00.000Z',
          b_checkOutDate: '2025-09-06T06:00:00.000Z',
        },
      ]);
    });
  });

  describe('importBookings', () => {
    it('should call service.importBookings with provided data', async () => {
      const bookingDtos: RoomingListBookingDto[] = [
        { roomingListId: 1, bookingId: 101 },
        { roomingListId: 1, bookingId: 102 },
      ];

      await controller.importBookings(bookingDtos);

      expect(service.importBookings).toHaveBeenCalledWith(bookingDtos);
    });
  });
});
