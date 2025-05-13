-- Tabla bookings
CREATE TABLE IF NOT EXISTS bookings (
    booking_id SERIAL PRIMARY KEY,
    hotel_id INTEGER NOT NULL,
    event_id INTEGER NOT NULL,
    guest_name VARCHAR(255) NOT NULL,
    guest_phone_number VARCHAR(20) NOT NULL,
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL
);

-- Tabla rooming_lists
CREATE TABLE IF NOT EXISTS rooming_lists (
    rooming_list_id SERIAL PRIMARY KEY,
    event_id INTEGER NOT NULL,
    event_name VARCHAR(255) NOT NULL,
    hotel_id INTEGER NOT NULL,
    rfp_name VARCHAR(255) NOT NULL,
    cut_off_date DATE NOT NULL,
    status VARCHAR(50) CHECK (status IN ('Active', 'Closed', 'Cancelled', 'completed', 'received', 'archived', 'Confirmed')),
    agreement_type VARCHAR(50) CHECK (agreement_type IN ('leisure', 'staff', 'artist'))
);

-- Tabla de relación rooming_list_bookings
CREATE TABLE IF NOT EXISTS rooming_list_bookings (
    rooming_list_id INTEGER NOT NULL,
    booking_id INTEGER NOT NULL,
    PRIMARY KEY (rooming_list_id, booking_id),
    FOREIGN KEY (rooming_list_id) REFERENCES rooming_lists(rooming_list_id) ON DELETE CASCADE,
    FOREIGN KEY (booking_id) REFERENCES bookings(booking_id) ON DELETE CASCADE
);