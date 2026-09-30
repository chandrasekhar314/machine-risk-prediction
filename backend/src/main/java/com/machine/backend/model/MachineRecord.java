package com.machine.backend.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.Map;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MachineRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ElementCollection
    private Map<String, String> fields; // dynamic key-value pairs
}
