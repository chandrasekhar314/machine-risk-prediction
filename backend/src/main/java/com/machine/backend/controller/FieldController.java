package com.machine.backend.controller;

import com.machine.backend.model.FieldConfig;
import com.machine.backend.repository.FieldConfigRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/fields")
@CrossOrigin
public class FieldController {
    private final FieldConfigRepository repo;
    public FieldController(FieldConfigRepository repo) { this.repo = repo; }

    @GetMapping public List<FieldConfig> getAll() { return repo.findAll(); }
    @PostMapping public FieldConfig add(@RequestBody FieldConfig f) { return repo.save(f); }
    @DeleteMapping("/{id}") public void delete(@PathVariable Long id) { repo.deleteById(id); }
}
