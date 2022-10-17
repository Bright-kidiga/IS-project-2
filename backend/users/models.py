from email.policy import default
from django.db import models
from django.contrib.auth.models import AbstractUser



# Create your models here.
class User(AbstractUser):
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    is_caregiver = models.BooleanField(default=False)
    username = None

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS =[]



# class Tasks(models.Model):
#     name = models.CharField(max_length=255)
#     users =models.ForeignKey(User)
#     Approval = models.BooleanField(default=False)