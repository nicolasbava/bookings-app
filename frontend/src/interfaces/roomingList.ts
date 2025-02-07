export interface RoomingListType {
    roomingListId: number
    eventId: number
    hotelId: number
    rfpName: string
    cutOffDate: string
    status: string
    agreement_type: string
    eventName: string
}

enum AgreementType {
    LEISURE = 'leisure',
    STAFF = 'staff',
    ARTISTS = 'artists'
}

export type RoomingListBookingItem = {
    id: number,
    booking: {
        bookingId: number
        checkInDate: string
        checkOutDate: string
        eventId: number
        guestName: string
        guestPhoneNumber: string
        hotelId: number
    }
}

export type RoomingListItem = {
    eventId: number
    eventName: string
    hotelId: number
    rfpName: string
    cutOffDate: string
    status: string
    minDate: string
    maxDate: string
    agreement_type: AgreementType
    roomingListId: number
    roomingListBookings: RoomingListBookingItem[]
}

export interface RoomingListFetch {
    data: RoomingListItem[]
    eventName: string
}