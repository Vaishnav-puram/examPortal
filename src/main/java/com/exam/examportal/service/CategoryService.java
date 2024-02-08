package com.exam.examportal.service;

import com.exam.examportal.models.QuizModel.Category;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public interface CategoryService {
    Category addCategory(Category category);
    Category updateCategory(Category category);
    Set<Category> getCategories();
    Category getCategoryById(Long cid);
    void deleteCategory(Long cid);
}
