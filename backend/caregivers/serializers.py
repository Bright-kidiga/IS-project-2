from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from .models import Application

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ('name', 'image')
class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ('id', 'c_name', 'description', 'id_photo', 'age', 'is_approved')

    