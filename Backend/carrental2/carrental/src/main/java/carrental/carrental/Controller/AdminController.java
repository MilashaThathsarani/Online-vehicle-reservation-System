package carrental.carrental.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import carrental.carrental.Model.Admin;
import carrental.carrental.Repository.AdminRepository;
import carrental.carrental.Service.AdminService;

@RestController
@CrossOrigin
public class AdminController {

    @Autowired
    private AdminService adminService;

    @Autowired
    private AdminRepository adminRepository;

    @PostMapping("/createadmin")
    @ResponseStatus(HttpStatus.CREATED)
    public Admin createAdmin(@RequestBody Admin admin) {
       return adminService.createAdmin(admin);
   }
   
   @GetMapping("/getadminbyid/{adminId}")
   public Admin getAdminId(@PathVariable String adminId) {
        return adminService.getAdminById(adminId);
   }

   
}
