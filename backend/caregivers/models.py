from django.db import models
from pickle import TRUE
from users.models import is_caregiver

# Create your models here.
def nameFile(instance, filename):
    return '/'.join(['images', str(instance.name), filename])

class Application():
    is_cg = models.ForeignKey(is_caregiver, on_delete=models.CASCADE)
    id_photo = models.ImageField(upload_to= nameFile, blank=True, null=True)
    is_approved = models.BooleanField(default=False)