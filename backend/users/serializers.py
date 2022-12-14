from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from .models import User, Application, Jobs

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'password', 'is_caregiver']
        extra_kwargs = {
            'password': {'write_only': True,}
        }
    
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class caregiverSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'is_caregiver']
    
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ('image')

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = ['cgiver', 'id', 'description', 'id_photo', 'location', 'good_conduct', 'age', 'phone', 'is_nurse', 'is_babysitter', 'is_petcarer', 'is_approved']

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jobs
        fields = ['c_giver', 'id', 'review', 'rating', 'location', 'timeStarted', 'timeEnded', 'nurse', 'babysitter', 'petcarer']



# class CaregiverCountSerializer(serializers.ModelSerializer):
#     user_count = serializers.SerializerMethodField()

#     class Meta:
#         model = User
#         fields = ( 'user_count',)   

#     def get_user_count(self, obj):
#         return User.objects.count()