package carrental.carrental.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "Customer")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Customer {
     @Id
    private String customerID;
    private String customerName;
    private String customerAddress;
    private String customerPhone;
    private String customerEmail;
    private String customerUsername;
    private String customerPassword;
    private String customerProfilePicture;
}
