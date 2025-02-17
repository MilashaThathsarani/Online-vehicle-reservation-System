package carrental.carrental.Service;

import java.time.ZoneId;
import java.time.ZonedDateTime;

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
    
    
}
