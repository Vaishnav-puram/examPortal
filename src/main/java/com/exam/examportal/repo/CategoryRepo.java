package com.exam.examportal.repo;

import com.exam.examportal.models.QuizModel.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepo extends JpaRepository<Category,Long> {
    Category findByCid(Long cid);
}
