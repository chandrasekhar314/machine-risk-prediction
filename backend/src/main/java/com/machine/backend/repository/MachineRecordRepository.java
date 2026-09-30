package com.machine.backend.repository;

import com.machine.backend.model.MachineRecord;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MachineRecordRepository extends JpaRepository<MachineRecord, Long> {}
