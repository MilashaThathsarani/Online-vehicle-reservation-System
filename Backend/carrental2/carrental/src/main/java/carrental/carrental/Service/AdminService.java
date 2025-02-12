package carrental.carrental.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import carrental.carrental.Model.Admin;
import carrental.carrental.Repository.AdminRepository;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public Admin createAdmin(Admin admin) {
        return adminRepository.save(admin);
    }
    public Admin getAdminById(String adminID) {
        return adminRepository.findById(adminID).get();
    }
}
