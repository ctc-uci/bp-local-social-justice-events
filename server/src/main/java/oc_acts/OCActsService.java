package oc_acts;

import oc_acts.config.OCActsServiceConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

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
