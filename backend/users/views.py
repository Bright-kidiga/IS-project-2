from urllib import response
from rest_framework.views import APIView
from django.views.generic.list import ListView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .serializers import UserSerializer, ApplicationSerializer, caregiverSerializer, JobSerializer
from .models import User, Application, Jobs
import jwt, datetime

# Create your views here.
class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class RegisterCaregiverView(APIView):
    def post(self, request):
        serializer = caregiverSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('user not found')

        if not user.check_password(password):
            raise AuthenticationFailed('password is incorrect')

        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm= 'HS256')

        response = Response()

        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            'jwt' : token
        }

        return response

class UserView(APIView):
    def get(self, request):
        token = request.headers.get('Authorization').split(' ')[1]
        #return Response(token)
        
        if not token:
            raise AuthenticationFailed('unauthenticated!')

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])

        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('unauthenticated!') 

        user = User.objects.filter(id=payload['id']).first()
        serializer = UserSerializer(user)

        return Response(serializer.data)

class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }
        return response

class ApplyView(APIView):
    def post(self, request):
        serializer = ApplicationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class postJob(APIView):
    def post(self, request):
        serializer = JobSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class userList(APIView):
    serializer = caregiverSerializer

    def get_queryset(self):
        users = User.objects.filter(is_caregiver= True)
        return users

    def get(self, request, *args, **kwargs):
        
        users = self.get_queryset()
        serializer = caregiverSerializer(users, many=True)

        return Response(serializer.data)
class caregiverList(APIView):
    serializer = caregiverSerializer

    def get_queryset(self):
        users = Application.objects.all()
        return users

    def get(self, request, *args, **kwargs):
        
        users = self.get_queryset()
        serializer = ApplicationSerializer(users, many=True)

        return Response(serializer.data)
class jobsList(APIView):
    serializer = JobSerializer

    def get_queryset(self):
        users = Jobs.objects.all()
        return users

    def get(self, request, *args, **kwargs):
        
        users = self.get_queryset()
        serializer = JobSerializer(users, many=True)

        return Response(serializer.data)
class clientCount(APIView):
    def get_queryset(self):
        users = User.objects.filter(is_caregiver= False).count()
        return users
    def get(self, request, *args, **kwargs):
        
        users = self.get_queryset()
        return Response(users)

class caregiverCount(APIView):
    def get_queryset(self):
        users = User.objects.filter(is_caregiver= True).count()
        return users
    def get(self, request, *args, **kwargs):
        
        users = self.get_queryset()
        return Response(users)

class jobCount(APIView):
    def get_queryset(self):
        jobs = Jobs.objects.count()
        return jobs
    def get(self, request, *args, **kwargs):
        
        jobs = self.get_queryset()
        return Response(jobs)
    
class applicationCount(APIView):
    def get_queryset(self):
        applications = Application.objects.count()
        return applications
    def get(self, request, *args, **kwargs):
        
        applications = self.get_queryset()
        return Response(applications)

class approvedApplicationCount(APIView):
    def get_queryset(self):
        applications = Application.objects.filter(is_approved= True).count()
        return applications
    def get(self, request, *args, **kwargs):
        
        applications = self.get_queryset()
        return Response(applications)

class notApprovedApplicationCount(APIView): 
    def get_queryset(self):
        applications = Application.objects.filter(is_approved= False).count()
        return applications
    def get(self, request, *args, **kwargs):
        
        applications = self.get_queryset()
        return Response(applications)

class nurseCount(APIView):
    def get_queryset(self):
        nurses = Application.objects.filter(is_nurse= True).count()
        return nurses
    def get(self, request, *args, **kwargs):
        
        nurses = self.get_queryset()
        return Response(nurses)   

class babysitterCount(APIView):
    def get_queryset(self):
        babysitters = Application.objects.filter(is_babysitter= True).count()
        return babysitters
    def get(self, request, *args, **kwargs):
        
        babysitters = self.get_queryset()
        return Response(babysitters)  

class petsitterCount(APIView):
    def get_queryset(self):
        petsitters = Application.objects.filter(is_petcarer= True).count()
        return petsitters
    def get(self, request, *args, **kwargs):
        
        petsitters = self.get_queryset()
        return Response(petsitters)

class findByID(APIView):
    def get_queryset(self, id):
        users = User.objects.filter(id = id)
        return users
    def get(self, request, id, **kwargs):
        
       users = self.get_queryset(id)
       serializer = UserSerializer(users, many=True)

       return Response(serializer.data[0])

# user= request.user
# if user.is_caregiver == True :


# else user.is_caregiver = False
# class Approval(APIView):
#     Tasks.Approval = True 
#     Tasks.save()