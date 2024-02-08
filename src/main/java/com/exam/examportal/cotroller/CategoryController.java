package com.exam.examportal.cotroller;

import com.exam.examportal.models.QuizModel.Category;
import com.exam.examportal.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/exam/category")
@CrossOrigin(origins = {"http://localhost:5173/"})
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping("/getCategory/{cid}")
    public Category getCategory(@PathVariable Long cid){
        return categoryService.getCategoryById(cid);
    }
    @PostMapping("/addCategory")
    public Category addCategory(@RequestBody Category category){
        return categoryService.addCategory(category);
    }
    @PutMapping("/updateCategory")
    public Category updateCategory(@RequestBody Category category){
        return categoryService.updateCategory(category);
    }
    @GetMapping("/getCategories")
    @CrossOrigin(origins = "*")
    public ResponseEntity<?> getCategories(){
        return ResponseEntity.ok(categoryService.getCategories());
    }
    @DeleteMapping("/delCategory/{cid}")
    public void delCategory(@PathVariable Long cid){
        categoryService.deleteCategory(cid);
    }
}
