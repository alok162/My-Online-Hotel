from rest_framework import serializers
from myapp.models import Users


class UsersSerializer(serializers.ModelSerializer):
	#model serializer inbuilt method with create() and update()
		class Meta:
			model = Users
			fields = ['name', 'designation', 'pk']

	


