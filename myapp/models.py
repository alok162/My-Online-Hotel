# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib.auth.models import AbstractUser

from django.db import models

# Create your models here.

# class Users(models.Model):
# 	name = models.CharField(max_length=200, blank=True, default='')
# 	designation = models.CharField(max_length=200, blank=True, default='')
# 	created = models.DateTimeField(auto_now_add=True)

	
# 	class Meta:
# 		ordering = ('name',)



# class CustomUser(AbstractUser):
#     # First/last name is not a global-friendly pattern
#     name = models.CharField(blank=True, max_length=255)

#     def __str__(self):
#         return self.email



