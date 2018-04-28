from django.conf.urls import url
from myapp import views

urlpatterns = [
    url(r'^login', views.user_login.as_view()),
    # url(r'^users/$', views.user_list.as_view()),
    # url(r'^users/(?P<pk>[0-9]+)/$', views.user_detail.as_view()),
]
