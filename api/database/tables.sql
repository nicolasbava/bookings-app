-- Create the bookings table
CREATE TABLE IF NOT EXISTS bookings (
    "bookingId" SERIAL PRIMARY KEY,
    "hotelId" INT NOT NULL,
    "eventId" INT NOT NULL,
    "guestName" VARCHAR(255) NOT NULL,
    "guestPhoneNumber" VARCHAR(20) NOT NULL,
    "checkInDate" DATE NOT NULL,
    "checkOutDate" DATE NOT NULL
);

-- Create the rooming lists table
CREATE TABLE rooming_lists (
    "roomingListId" SERIAL PRIMARY KEY,
    "eventId" INT NOT NULL,
    "eventName" VARCHAR(255) NOT NULL,
    "hotelId" INT NOT NULL,
    "rfpName" VARCHAR(255) NOT NULL,
    "cutOffDate" DATE NOT NULL,
    "status" VARCHAR(50) CHECK ("status" IN ('Active', 'Closed', 'Cancelled', 'completed', 'received', 'archived', 'Confirmed')),
    agreement_type VARCHAR(50) CHECK (agreement_type IN ('leisure', 'staff', 'artist'))
);

-- Create the rooming list bookings table
CREATE TABLE rooming_list_bookings (
    "roomingListId" INT NOT NULL,
    "bookingId" INT NOT NULL,
    PRIMARY KEY ("roomingListId", "bookingId"),
    FOREIGN KEY ("roomingListId") REFERENCES rooming_lists("roomingListId") ON DELETE CASCADE,
    FOREIGN KEY ("bookingId") REFERENCES bookings("bookingId") ON DELETE CASCADE
);
