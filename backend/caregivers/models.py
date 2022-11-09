from django.db import models
from pickle import TRUE
from users.models import is_caregiver
from users.models import name

# Create your models here.
def imageUpload(instance, filename):
    return '/'.join(['images', str(instance.name), filename])
    # image storage needs work

class Application(models.Model):
    is_cgiver = models.ForeignKey(is_caregiver, on_delete=models.CASCADE)
    c_name = models.ForeignKey(name, on_delete=models.CASCADE)
    description = models.TextField(max_length=500)
    id_photo = models.ImageField(upload_to= imageUpload, blank=True, null=True)
    good_conduct = models.ImageField(upload_to= imageUpload, blank=True, null=True)
    age= models.IntegerField(max_length=100)
    phone = models.TextField(max_length=100)
    is_approved = models.BooleanField(default=False)
    #categories
    is_nurse= models.BooleanField(default=False)
    is_babysitter= models.BooleanField(default=False)
    is_petcarer= models.BooleanField(default=False)

    def __str__(self):
        return self.c_name
    def __repr__(self):
        return repr(self.c_name)