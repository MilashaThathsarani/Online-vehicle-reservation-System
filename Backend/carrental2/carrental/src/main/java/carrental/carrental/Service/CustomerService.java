package carrental.carrental.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import carrental.carrental.Model.Customer;
import carrental.carrental.Repository.CustomerRepository;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public Customer create(Customer customer) {
        return customerRepository.save(customer);
    }

    public Customer update(String id, Customer customer) {
        customer.setCustomerID(id);
        return customerRepository.save(customer);
    }

    
    public List<Customer> findAll() {
        return customerRepository.findAll();
    }

    public Optional<Customer> findById(String id) {
        return customerRepository.findById(id);
    }

    public void delete(String id) {
        customerRepository.deleteById(id);
    }
    
}
