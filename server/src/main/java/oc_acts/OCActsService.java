package oc_acts;

import oc_acts.config.OCActsServiceConfig;
import oc_acts.core.OCActsResults;
import oc_acts.model.data.Event;
import oc_acts.model.response.EventResponse;
import oc_acts.repo.OCActsRepo;
import oc_acts.util.Validate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@SpringBootApplication
@EnableConfigurationProperties({
        OCActsServiceConfig.class
})
public class OCActsService
{
    public static void main(String[] args)
    {
        SpringApplication.run(OCActsService.class, args);
    }
}
