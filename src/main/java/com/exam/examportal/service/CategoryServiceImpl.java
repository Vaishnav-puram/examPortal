package com.exam.examportal.service;

import com.exam.examportal.models.QuizModel.Category;
import com.exam.examportal.repo.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;

@Service
public class CategoryServiceImpl implements CategoryService{
    @Autowired
    private CategoryRepo categoryRepo;
    @Override
    public Category addCategory(Category category) {
        return categoryRepo.save(category);
    }

    @Override
    public Category updateCategory(Category category) {
        return categoryRepo.save(category);
    }

    @Override
    public Set<Category> getCategories() {
        return new LinkedHashSet<>(categoryRepo.findAll());
    }

    @Override
    public Category getCategoryById(Long cid) {
        return categoryRepo.findByCid(cid);
    }

    @Override
    public void deleteCategory(Long cid) {
        categoryRepo.deleteById(cid);
    }
}
