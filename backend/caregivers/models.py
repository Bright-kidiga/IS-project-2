from django.db import models
from pickle import TRUE
from users.models import is_caregiver

# Create your models here.
def imageUpload(instance, filename):
    return '/'.join(['images', str(instance.name), filename])
    # image storage needs work

class Application():
    is_cgiver = models.ForeignKey(is_caregiver, on_delete=models.CASCADE)
    description = models.CharField(max_length=500)
    id_photo = models.ImageField(upload_to= imageUpload, blank=True, null=True)
    is_approved = models.BooleanField(default=False)