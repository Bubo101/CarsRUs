# Generated by Django 4.0.3 on 2022-08-02 02:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0004_remove_serviceappointment_appt_date_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='serviceappointment',
            name='completed',
            field=models.BooleanField(default=False, null=True),
        ),
        migrations.AddField(
            model_name='serviceappointment',
            name='vip',
            field=models.BooleanField(default=False, null=True),
        ),
    ]