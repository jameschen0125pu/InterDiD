# Generated by Django 4.2.6 on 2023-11-17 02:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ServerCommon', '0008_alter_users_unique_code'),
    ]

    operations = [
        migrations.AlterField(
            model_name='artworkitems',
            name='artwork_item_image',
            field=models.ImageField(upload_to=''),
        ),
    ]