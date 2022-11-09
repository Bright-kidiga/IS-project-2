from django.urls import path, include
from .views import RegisterView,RegisterCaregiverView, LoginView, UserView, LogoutView, caregiverList, userList, ApplyView   

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('registerCaregiver', RegisterCaregiverView.as_view()),
    path('login', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('logout', LogoutView.as_view()),
    path('userlist', userList.as_view()),
    path('apply', ApplyView.as_view()),
    path('applications', caregiverList.as_view()),#list of applications
]