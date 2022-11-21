from django.contrib import admin
from .models import User, Application, Jobs


# Register your models here.
admin.site.register(User)
admin.site.register(Application)
admin.site.register(Jobs)


