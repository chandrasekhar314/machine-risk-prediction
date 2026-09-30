package com.machine.backend.controller;

import com.machine.backend.model.MachineRecord;
import com.machine.backend.repository.MachineRecordRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/machines")
@CrossOrigin
public class MachineController {
    private final MachineRecordRepository repo;
    public MachineController(MachineRecordRepository repo) { this.repo = repo; }

    @GetMapping public List<MachineRecord> getAll() { return repo.findAll(); }
    @PostMapping public MachineRecord add(@RequestBody MachineRecord m) { return repo.save(m); }
    @DeleteMapping("/{id}") public void delete(@PathVariable Long id) { repo.deleteById(id); }
}
