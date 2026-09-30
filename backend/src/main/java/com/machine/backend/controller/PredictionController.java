package com.machine.backend.controller;

import com.machine.backend.model.MachineRecord;
import com.machine.backend.repository.MachineRecordRepository;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;
import java.util.*;

@RestController
@RequestMapping("/predict")
@CrossOrigin
public class PredictionController {

    private final MachineRecordRepository repo;
    private final RestTemplate restTemplate = new RestTemplate();

    public PredictionController(MachineRecordRepository repo) {
        this.repo = repo;
    }

    @GetMapping("/{id}")
    public Map<String, String> predict(@PathVariable Long id) {
        MachineRecord record = repo.findById(id).orElseThrow();

        // Send record fields to Python ML service
        String url = "http://127.0.0.1:5000/predict";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, String>> request = new HttpEntity<>(record.getFields(), headers);
        ResponseEntity<Map> response = restTemplate.postForEntity(url, request, Map.class);

        Map<String, String> result = new HashMap<>();
        result.put("risk", response.getBody().get("risk").toString());
        return result;
    }
}
