from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class Feedback(models.Model):
    name =models.CharField(max_length=50)
    email = models.EmailField()
    products = models.ForeignKey(Product, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    feedback = models.TextField()
    feedback_type = models.CharField(max_length=40)
    rating = models.IntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.name} - {self.feedback}"
    


    
class Feedback(models.Model):
    name =models.CharField(max_length=50)
    email = models.EmailField()
    products = models.ForeignKey(Product, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    feedback = models.TextField()
    feedback_type = models.CharField(max_length=40)
    rating = models.IntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.name} - {self.feedback}"
    
