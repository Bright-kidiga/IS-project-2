from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from .models import Application

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ('name', 'image')