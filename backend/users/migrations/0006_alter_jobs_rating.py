# Generated by Django 4.1.2 on 2022-11-20 09:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_alter_jobs_timeended_alter_jobs_timestarted'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jobs',
            name='rating',
            field=models.FloatField(),
        ),
    ]
