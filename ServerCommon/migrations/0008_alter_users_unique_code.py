# Generated by Django 4.2.6 on 2023-11-15 20:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ServerCommon', '0007_alter_artworkitems_artwork_item_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='unique_code',
            field=models.CharField(max_length=255, null=True, unique=True),
        ),
    ]