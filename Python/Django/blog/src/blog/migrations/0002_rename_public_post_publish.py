# Generated by Django 3.2.8 on 2021-10-20 03:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='public',
            new_name='publish',
        ),
    ]
