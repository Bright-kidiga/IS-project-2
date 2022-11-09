from django.urls import path, include
from .views import RegisterView,RegisterCaregiverView, LoginView, UserView, LogoutView, caregiversList   

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('registerCaregiver', RegisterCaregiverView.as_view()),
    path('login', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('logout', LogoutView.as_view()),
    path('caregivers', caregiversList.as_view()),
]