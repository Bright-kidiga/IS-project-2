from django.urls import path, include
from .views import RegisterView,RegisterCaregiverView, LoginView, UserView, LogoutView, caregiverList, userList, ApplyView, jobsList, caregiverCount, clientCount, jobCount, applicationCount, approvedApplicationCount

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('registerCaregiver', RegisterCaregiverView.as_view()),
    path('login', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('logout', LogoutView.as_view()),
    path('caregiverlist', userList.as_view()),
    path('apply', ApplyView.as_view()),
    path('applications', caregiverList.as_view()),#list of applications
    path('jobs', jobsList.as_view()),#list of jobs
    path('caregiverCount', caregiverCount.as_view()),#count of caregivers
    path('clientCount', clientCount.as_view()),#count of clients
    path('jobCount', jobCount.as_view()),#count of jobs
    path('applicationCount', applicationCount.as_view()),#count of applications
    path('approvedApplicationCount', approvedApplicationCount.as_view()),#count of applications approved
    #number of nurses
    #number of petsitters
    #number of babysitters
]