from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework import status
from myapp.models import Users
from myapp.serializers import UsersSerializer 
from django.http import HttpResponse, JsonResponse
from rest_framework import generics


class user_list(generics.ListCreateAPIView):
	queryset = Users.objects.all()
   	serializer_class = UsersSerializer
       

class user_detail(generics.RetrieveUpdateAPIView):
	queryset = Users.objects.all()
   	serializer_class = UsersSerializer






