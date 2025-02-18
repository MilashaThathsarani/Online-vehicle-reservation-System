package carrental.carrental.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import carrental.carrental.Model.Customer;

@Repository
public interface CustomerRepository extends MongoRepository<Customer, String> {
}