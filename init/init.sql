-- Create the bookings table
CREATE TABLE IF NOT EXISTS bookings (
    bookingId SERIAL PRIMARY KEY,
    hotelId INTEGER NOT NULL,
    eventId INTEGER NOT NULL,
    guestName VARCHAR(255) NOT NULL,
    guestPhoneNumber VARCHAR(20) NOT NULL,
    checkInDate DATE NOT NULL,
    checkOutDate DATE NOT NULL
);

-- Create the rooming lists table
CREATE TABLE IF NOT EXISTS rooming_lists (
    roomingListId SERIAL PRIMARY KEY,
    eventId INTEGER NOT NULL,
    eventName VARCHAR(255) NOT NULL,
    hotelId INTEGER NOT NULL,
    rfpName VARCHAR(255) NOT NULL,
    cutOffDate DATE NOT NULL,
    status VARCHAR(50) CHECK (status IN ('Active', 'Closed', 'Cancelled', 'completed', 'received', 'archived', 'Confirmed')),
    agreement_type VARCHAR(50) CHECK (agreement_type IN ('leisure', 'staff', 'artist'))
);

-- Create the rooming list bookings table
CREATE TABLE IF NOT EXISTS rooming_list_bookings (
    roomingListId INTEGER NOT NULL,
    bookingId INTEGER NOT NULL,
    PRIMARY KEY (roomingListId, bookingId),
    FOREIGN KEY (roomingListId) REFERENCES rooming_lists(roomingListId) ON DELETE CASCADE,
    FOREIGN KEY (bookingId) REFERENCES bookings(bookingId) ON DELETE CASCADE
);
