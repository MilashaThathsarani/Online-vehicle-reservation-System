package carrental.carrental.Service;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import carrental.carrental.Model.Booking;
import carrental.carrental.Repository.BookingRepository;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    public Booking createBooking(Booking booking) {       
        ZonedDateTime colomboZonedDateTime = ZonedDateTime.of(
                booking.getDate().atTime(booking.getTime()),
                ZoneId.of("Asia/Colombo")
        );
        ZonedDateTime utcZonedDateTime = colomboZonedDateTime.withZoneSameInstant(ZoneId.of("UTC"));
        return bookingRepository.save(booking);
    }

    public Booking updateBooking(String bookingId, Booking bookingDetails) {
        Optional<Booking> optionalBooking = bookingRepository.findById(bookingId);
        if (optionalBooking.isPresent()) {
            Booking existingBooking = optionalBooking.get();
            existingBooking.setPickupLocation(bookingDetails.getPickupLocation());
            existingBooking.setDropLocation(bookingDetails.getDropLocation());
            existingBooking.setDate(bookingDetails.getDate());
            existingBooking.setTime(bookingDetails.getTime());
            existingBooking.setCustomerID(bookingDetails.getCustomerID());
            existingBooking.setDriverID(bookingDetails.getDriverID());
            return bookingRepository.save(existingBooking);
        }
        return null; // or throw an exception
    }

    public Optional<Booking> getBookingById(String bookingId) {
        return bookingRepository.findById(bookingId);
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public void deleteBooking(String bookingId) {
        bookingRepository.deleteById(bookingId);
    }
    
    
}
