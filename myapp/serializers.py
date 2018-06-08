from rest_framework import serializers
# from myapp.models import Users
from django.contrib.auth.models import User


class UsersSerializer(serializers.ModelSerializer):
	#model serializer inbuilt method with create() and update()
		class Meta:
			model = User
			fields = fields=['username', 'password', 'email']

class UserSignupSerializer(serializers.ModelSerializer):
	#model serializer inbuilt method with create() and update()
		class Meta:
			model = User
			fields = fields=['username', 'password', 'email']

	


#post curl code fo rterminal

#curl -X POST --data '{"username":"dalokrockstar", "password":"123", "email":"test@mail.com"}' --header "Content-Type:application/json" http://127.0.0.1:8000/signup/