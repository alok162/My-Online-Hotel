from rest_framework import serializers
# from myapp.models import Users
from django.contrib.auth.models import User


class UsersSerializer(serializers.ModelSerializer):
	#model serializer inbuilt method with create() and update()
		class Meta:
			model = User
			fields = '__all__'

	


