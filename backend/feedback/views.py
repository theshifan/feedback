from rest_framework import viewsets
from .models import Product, Category, Feedback
from .serializers import ProductSerializer, CategorySerializer ,FeedbackSerializer


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer 



class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = Feedback.objects.all().order_by('-timestamp')
    serializer_class = FeedbackSerializer