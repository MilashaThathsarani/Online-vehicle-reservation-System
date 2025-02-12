package carrental.carrental.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import carrental.carrental.Model.Admin;


@Repository
public interface AdminRepository extends MongoRepository<Admin,String>{
    
}
