-- Create the bookings table
CREATE TABLE IF NOT EXISTS bookings (
    booking_id SERIAL PRIMARY KEY,
    hotel_id INT NOT NULL,
    event_id INT NOT NULL,
    guest_name VARCHAR(255) NOT NULL,
    guest_phone_number VARCHAR(20) NOT NULL,
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL
);

-- Insert data into bookings table
INSERT INTO bookings (booking_id, hotel_id, event_id, guest_name, guest_phone_number, check_in_date, check_out_date) VALUES
(1, 101, 1, 'John Doe', '1234567890', '2025-09-01', '2025-09-05'),
(2, 101, 1, 'Alice Smith', '2345678901', '2025-09-02', '2025-09-06'),
(3, 101, 1, 'Bob Johnson', '3456789012', '2025-09-03', '2025-09-07'),
(4, 101, 1, 'Sarah Lee', '4567890123', '2025-09-05', '2025-09-10'),
(5, 101, 1, 'David Brown', '5678901234', '2025-09-06', '2025-09-11'),
(6, 101, 1, 'Emily White', '6789012345', '2025-09-07', '2025-09-12'),
(7, 101, 1, 'Michael Black', '7890123456', '2025-09-08', '2025-09-13'),
(8, 101, 2, 'Lisa Green', '8901234567', '2025-09-15', '2025-09-20'),
(9, 101, 2, 'Paul Gray', '9012345678', '2025-09-16', '2025-09-21'),
(10, 101, 2, 'Tom Harris', '0123456789', '2025-09-25', '2025-09-30'),
(11, 101, 2, 'Anna Clark', '1234567890', '2025-09-26', '2025-09-30'),
(12, 101, 2, 'George King', '2345678901', '2025-10-01', '2025-10-05'),
(13, 101, 2, 'Jessica Allen', '3456789012', '2025-10-02', '2025-10-06'),
(14, 101, 2, 'Gilliam King', '3456789012', '2025-10-02', '2025-10-06'),
(15, 101, 2, 'Natalia Fernandez', '(805) 440-2313', '2025-04-02', '2025-05-20'),
(16, 101, 2, 'Campbell Raymond', '(910) 581-3774', '2025-04-15', '2025-05-13'),
(17, 101, 2, 'Rhodes Charles', '(882) 559-2902', '2025-04-12', '2025-05-17'),
(18, 101, 2, 'Mejia Ferguson', '(842) 592-3410', '2025-03-25', '2025-05-10'),
(19, 101, 2, 'Dominique Ayers', '(805) 546-3313', '2025-04-03', '2025-05-11')
ON CONFLICT (booking_id) DO NOTHING; -- Prevent duplicate inserts if re-run

-- Create the rooming_lists table
CREATE TABLE rooming_lists (
    rooming_list_id SERIAL PRIMARY KEY,
    event_id INT NOT NULL,
    hotel_id INT NOT NULL,
    rfp_name VARCHAR(255) NOT NULL,
    cutoff_date DATE NOT NULL,
    status VARCHAR(50) CHECK (status IN ('Active', 'Closed', 'Cancelled', 'completed', 'received', 'archived', 'Confirmed')),
    agreement_type VARCHAR(50) CHECK (agreement_type IN ('leisure', 'staff', 'artist'))
);

-- Insert data into rooming_lists table
INSERT INTO rooming_lists (rooming_list_id, event_id, hotel_id, rfp_name, cutOff_date, status, agreement_type)
VALUES
    (1, 1, 101, 'ACL-2025', '2025-09-30', 'completed', 'leisure'),
    (2, 1, 101, 'ACL-2025', '2025-09-30', 'received', 'staff'),
    (3, 1, 101, 'ACL-2024', '2024-09-30', 'archived', 'leisure'),
    (4, 2, 101, 'RLM-2025', '2025-09-30', 'completed', 'leisure'),
    (5, 2, 101, 'RLM-2025', '2025-10-15', 'completed', 'staff'),
    (6, 2, 101, 'RLM-2025', '2025-10-15', 'Confirmed', 'leisure'),
    (7, 2, 101, 'RLM-2026', '2026-10-25', 'received', 'leisure'),
    (8, 2, 101, 'RLM-2026', '2026-10-25', 'received', 'staff');




CREATE TABLE rooming_list_bookings (
    rooming_list_id INT,
    booking_id INT,
    PRIMARY KEY (rooming_list_id, booking_id),
    FOREIGN KEY (rooming_list_id) REFERENCES rooming_lists(rooming_list_id),
    FOREIGN KEY (booking_id) REFERENCES bookings(booking_id)
);

INSERT INTO rooming_list_bookings (rooming_list_id, booking_id) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 4),
(2, 5),
(3, 6),
(3, 7),
(4, 8),
(4, 9),
(5, 10),
(5, 11),
(6, 12),
(6, 13),
(7, 14),
(7, 15),
(7, 16),
(8, 17),
(8, 18),
(8, 19);