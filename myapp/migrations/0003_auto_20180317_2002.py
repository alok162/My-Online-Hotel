# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-03-17 20:02
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0002_game_created'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Game',
            new_name='Users',
        ),
    ]