# Generated by Django 4.2.6 on 2023-11-17 03:04

import ServerCommon
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ServerCommon', '0010_alter_beacons_artworks'),
    ]

    operations = [
        migrations.AlterField(
            model_name='artworkitems',
            name='artwork_item_image',
            field=models.ImageField(upload_to=ServerCommon.unique_file_name),
        ),
    ]