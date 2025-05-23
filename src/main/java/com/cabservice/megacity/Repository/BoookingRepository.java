package com.cabservice.megacity.Repository;
import com.cabservice.megacity.Model.Booking;
import com.cabservice.megacity.Model.Driver;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface BoookingRepository extends MongoRepository<Booking, String> {
    // Custom method to find bookings by customer ID
    

    // Custom method to find a booking by its ID
    Optional<Booking> findByBookingId(String bookingId);


       // Custom method to find drivers by their status
      List<Driver> findByDriverStatues(String status);


      List<Booking> findByCustomerId(String customerId);


    List<Booking> findByBookingStatus(String string);


    List<Booking> findByDriverID(String driverID);

    
  }