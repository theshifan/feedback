from rest_framework import viewsets
from .models import Product, Category, Feedback
from .serializers import ProductSerializer, CategorySerializer ,FeedbackSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from .serializers import UserSerializer
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework.permissions import AllowAny


class SignupView(APIView):
    permission_classes = [AllowAny]
    def post(self, request):
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')

        if not username or not email or not password:
            return Response({'error': 'All fields are required'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username already taken'}, status=status.HTTP_400_BAD_REQUEST)

        user = User.objects.create(
            username=username,
            email=email,
            password=make_password(password)
        )

        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
            'user': UserSerializer(user).data
        }, status=status.HTTP_201_CREATED)
    

class LoginView(APIView):
       def post(self, request):
           username = request.data.get('username')
           password = request.data.get('password')
           user = authenticate(username=username, password=password)
           if user:
               refresh = RefreshToken.for_user(user)
               return Response({
                   'refresh': str(refresh),
                   'access': str(refresh.access_token),
                   'user': UserSerializer(user).data
               })
           return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer 



class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = Feedback.objects.all().order_by('-timestamp')
    serializer_class = FeedbackSerializer