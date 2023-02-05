package com.amealio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserdataRepo extends JpaRepository<Userdata, Long> {
}
