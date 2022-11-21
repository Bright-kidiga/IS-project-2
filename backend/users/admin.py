from django.contrib import admin
from django.contrib.auth.models import Group
from .models import User, Application, Jobs


# Register your models here.
admin.site.register(User)
admin.site.register(Application)
admin.site.register(Jobs)

admin.site.unregister(Group)


