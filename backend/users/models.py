# from email.policy import default
# from django.db import models
# from django.contrib.auth.models import AbstractUser
from pickle import TRUE
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin,BaseUserManager



# Create your models here.

class UserAccountManager(BaseUserManager):
    def create_user(self,email,name,password=None):
        if not email:
            raise ValueError('Users must have an email')

        email = self.normalize_email(email)
        email = email.lower()

        user = self.model(
            email = email,
            name = name 
        )

        user.set_password(password)
        user.save(using = self._db)

        return user

    def create_caregiver(self,email,name,password=None):
        user = self.create_caregiver(email,name,password)

        user.is_caregiver = True
        user.save(using = self._db)

        return user

    def create_superuser(self,email,name,password=None):
        user = self.create_user(email,name,password)

        user.is_superuser = True
        user.is_staff = True
        user.is_caregiver = True
        
        user.save(using = self._db)

        return user

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255,unique=TRUE)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    is_caregiver = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def _str_(self):
        return self.email

        # lands model and merchant model will be on separate apps