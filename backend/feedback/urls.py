from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, CategoryViewSet,FeedbackViewSet


router = DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'feedback', FeedbackViewSet)


urlpatterns = [
     path('', include(router.urls)),
]