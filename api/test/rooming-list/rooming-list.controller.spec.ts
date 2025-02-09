/* eslint-disable @typescript-eslint/unbound-method */
import { RoomingList } from '../../src/rooming-list/entities/rooming-list.entity';
import { RoomingListController } from '../../src/rooming-list/rooming-list.controller';
import { RoomingListService } from '../../src/rooming-list/rooming-list.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('RoomingListController', () => {
  let controller: RoomingListController;
  let service: RoomingListService;

  const mockRoomingListService = {
    findAllByEventName: jest.fn().mockResolvedValue([
      {
        eventName: 'Rolling Loud',
        data: [
          {
            roomingListId: 1,
            eventId: 1,
            eventName: 'Rolling Loud',
            hotelId: 101,
            rfpName: 'ACL-2025',
            cutOffDate: '2025-09-30',
            status: 'completed',
            agreement_type: 'leisure',
            roomingListBookings: [
              {
                roomingListId: 1,
                bookingId: 1,
                booking: {
                  bookingId: 1,
                  hotelId: 101,
                  eventId: 1,
                  guestName: 'John Doe',
                  guestPhoneNumber: '1234567890',
                  checkInDate: '2025-09-01',
                  checkOutDate: '2025-09-05',
                },
              },
              {
                roomingListId: 1,
                bookingId: 2,
                booking: {
                  bookingId: 2,
                  hotelId: 101,
                  eventId: 1,
                  guestName: 'Alice Smith',
                  guestPhoneNumber: '2345678901',
                  checkInDate: '2025-09-02',
                  checkOutDate: '2025-09-06',
                },
              },
            ],
          },
        ],
      },
    ]),
    createRoomingLists: jest
      .fn()
      .mockImplementation((roomingLists: RoomingList[]) =>
        Promise.resolve(roomingLists),
      ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomingListController],
      providers: [
        {
          provide: RoomingListService,
          useValue: mockRoomingListService,
        },
      ],
    }).compile();

    controller = module.get<RoomingListController>(RoomingListController);
    service = module.get<RoomingListService>(RoomingListService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAllByEventName', () => {
    it('should return rooming lists grouped by event name', async () => {
      const result = await controller.findAllByEventName();

      expect(service.findAllByEventName).toHaveBeenCalled();
      expect(result).toEqual([
        {
          eventName: 'Rolling Loud',
          data: [
            {
              roomingListId: 1,
              eventId: 1,
              eventName: 'Rolling Loud',
              hotelId: 101,
              rfpName: 'ACL-2025',
              cutOffDate: '2025-09-30',
              status: 'completed',
              agreement_type: 'leisure',
              roomingListBookings: [
                {
                  roomingListId: 1,
                  bookingId: 1,
                  booking: {
                    bookingId: 1,
                    hotelId: 101,
                    eventId: 1,
                    guestName: 'John Doe',
                    guestPhoneNumber: '1234567890',
                    checkInDate: '2025-09-01',
                    checkOutDate: '2025-09-05',
                  },
                },
                {
                  roomingListId: 1,
                  bookingId: 2,
                  booking: {
                    bookingId: 2,
                    hotelId: 101,
                    eventId: 1,
                    guestName: 'Alice Smith',
                    guestPhoneNumber: '2345678901',
                    checkInDate: '2025-09-02',
                    checkOutDate: '2025-09-06',
                  },
                },
              ],
            },
          ],
        },
      ]);
    });
  });
});
