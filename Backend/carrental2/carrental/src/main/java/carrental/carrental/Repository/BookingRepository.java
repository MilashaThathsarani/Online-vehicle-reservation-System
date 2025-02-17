package carrental.carrental.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import carrental.carrental.Model.Booking;

@Repository
public interface BookingRepository extends MongoRepository <Booking , String>{
    
}
