from rest_framework import serializers
from .models import Product, Category,Feedback
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
       class Meta:
           model = User
           fields = ('id', 'username', 'email')

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class FeedbackSerializer(serializers.ModelSerializer):
    products = ProductSerializer(read_only=True)
    category = CategorySerializer(read_only=True)
    product_id = serializers.PrimaryKeyRelatedField(
        queryset=Product.objects.all(), source='products', write_only=True)
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=Category.objects.all(), source='category', write_only=True)

    class Meta:
        model = Feedback
        fields = [
            'id', 'name', 'email',
            'products', 'product_id',
            'category', 'category_id',
            'feedback',
            'rating', 'timestamp'
        ]
