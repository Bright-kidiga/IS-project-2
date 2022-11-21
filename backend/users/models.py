# from email.policy import default
# from django.db import models
# from django.contrib.auth.models import AbstractUser
from pickle import TRUE
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin,BaseUserManager




# Create your models here.
def imageUpload(instance, filename):
        return '/'.join(['images', str(instance.id_photo), filename])
    # image storage needs work
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
    def create_staff(self,email,name,password=None):
        user = self.create_staff(email,name,password)

        user.is_staff = True
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
    
class Application(models.Model):
    cgiver = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.TextField(max_length=500)
    id_photo = models.ImageField(upload_to= imageUpload, blank=True, null=True)
    good_conduct = models.ImageField(upload_to= imageUpload, blank=True, null=True)
    location = models.TextField(max_length=300, blank=True, null=True)
    age= models.IntegerField()
    phone = models.TextField(max_length=100)
    is_approved = models.BooleanField(default=False)
    #categories
    is_nurse= models.BooleanField(default=False)
    is_babysitter= models.BooleanField(default=False)
    is_petcarer= models.BooleanField(default=False)


class Jobs(models.Model):
    c_giver = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    review = models.TextField(max_length=500)
    rating = models.FloatField()
    location = models.TextField(max_length=300, blank=True, null=True)
    timeStarted = models.DateTimeField(auto_now_add=True)
    timeEnded = models.DateTimeField()
    
    #job categories
    nurse= models.BooleanField(default=False)
    babysitter= models.BooleanField(default=False)
    petcarer= models.BooleanField(default=False)