from django.urls import path, include
from .views import RegisterView,RegisterCaregiverView, LoginView, postJob, UserView, LogoutView, caregiverList, userList, ApplyView, jobsList, caregiverCount, clientCount, jobCount, applicationCount, approvedApplicationCount, nurseCount, babysitterCount, petsitterCount, notApprovedApplicationCount, findByID

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('registerCaregiver', RegisterCaregiverView.as_view()),
    path('login', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('logout', LogoutView.as_view()),
    path('caregiverlist', userList.as_view()),
    path('apply', ApplyView.as_view()),
    path('hireJob', postJob.as_view()),

    path('applications', caregiverList.as_view()),#list of applications
    path('jobs', jobsList.as_view()),#list of jobs

    path('caregiverCount', caregiverCount.as_view()),#count of caregivers
    path('clientCount', clientCount.as_view()),#count of clients
    path('jobCount', jobCount.as_view()),#count of jobs
    path('applicationCount', applicationCount.as_view()),#count of applications
    path('approvedApplicationCount', approvedApplicationCount.as_view()),#count of applications approved
    path('notApprovedApplicationCount', notApprovedApplicationCount.as_view()),#count of applications approved
    path('nurseCount', nurseCount.as_view()),#number of nurses
    path('petsitterCount', petsitterCount.as_view()),#number of petsitters
    path('babysitterCount', babysitterCount.as_view()),#number of babysitters

    path('findByID/<str:id>/', findByID.as_view()),#find user based on ID
]